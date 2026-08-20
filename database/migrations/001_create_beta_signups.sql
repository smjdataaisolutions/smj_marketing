-- Run this migration ONLY against the dedicated smj_marketing database.

CREATE TABLE IF NOT EXISTS beta_signups (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    business_email VARCHAR(255) NOT NULL,
    shopify_store_url VARCHAR(500) NOT NULL,
    monthly_orders VARCHAR(50),
    analytics_challenge TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'contacted', 'approved', 'rejected', 'onboarded')),
    source VARCHAR(100) NOT NULL DEFAULT 'landing_page',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at
    ON beta_signups (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_beta_signups_status
    ON beta_signups (status);

CREATE INDEX IF NOT EXISTS idx_beta_signups_email
    ON beta_signups (business_email);
