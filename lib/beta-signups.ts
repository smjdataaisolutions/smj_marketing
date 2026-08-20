import "server-only";

import type { BetaSignup } from "./beta-validation";
import { getMarketingDatabasePool } from "./db";

export async function saveBetaSignup(signup: BetaSignup): Promise<void> {
  const pool = getMarketingDatabasePool();

  // The short duplicate window prevents repeated clicks/retries while still
  // allowing a merchant to submit another application later.
  await pool.query(
    `
      INSERT INTO beta_signups (
        name,
        business_email,
        shopify_store_url,
        monthly_orders,
        analytics_challenge
      )
      SELECT
        $1::varchar(150),
        $2::varchar(255),
        $3::varchar(500),
        $4::varchar(50),
        $5::text
      WHERE NOT EXISTS (
        SELECT 1
        FROM beta_signups
        WHERE business_email = $2
          AND shopify_store_url = $3
          AND created_at >= NOW() - INTERVAL '60 seconds'
      )
    `,
    [
      signup.name,
      signup.businessEmail,
      signup.shopifyStoreUrl,
      signup.monthlyOrders,
      signup.analyticsChallenge,
    ],
  );
}
