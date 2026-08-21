import "server-only";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Pool } from "pg";

declare global {
  // Reuse the pool across Next.js development reloads and server requests.
  var marketingDatabasePool: Pool | undefined;
}

export function getMarketingDatabasePool(): Pool {
  let cloudflareConnectionString: string | undefined;

  try {
    const cloudflareEnv = getCloudflareContext().env as CloudflareEnv & {
      MARKETING_DATABASE_URL?: string;
    };
    cloudflareConnectionString = cloudflareEnv.MARKETING_DATABASE_URL;
  } catch {
    // Outside the Workers runtime, Next.js reads the local .env file instead.
  }

  const connectionString =
    cloudflareConnectionString ?? process.env.MARKETING_DATABASE_URL;

  if (!connectionString) {
    throw new Error("MARKETING_DATABASE_URL is not configured");
  }

  if (!globalThis.marketingDatabasePool) {
    globalThis.marketingDatabasePool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });
  }

  return globalThis.marketingDatabasePool;
}
