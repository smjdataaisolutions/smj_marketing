-- Recent beta leads
SELECT
    id,
    name,
    business_email,
    shopify_store_url,
    monthly_orders,
    analytics_challenge,
    status,
    source,
    created_at
FROM beta_signups
ORDER BY created_at DESC;

-- Total beta lead count
SELECT COUNT(*) AS total_beta_signups
FROM beta_signups;

-- Leads by workflow status
SELECT
    status,
    COUNT(*) AS leads
FROM beta_signups
GROUP BY status
ORDER BY leads DESC;
