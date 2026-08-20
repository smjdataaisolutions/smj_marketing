export const MONTHLY_ORDER_OPTIONS = [
  "Less than 100",
  "100–500",
  "500–1,000",
  "1,000–5,000",
  "More than 5,000",
  "Prefer not to say",
] as const;

export type MonthlyOrders = (typeof MONTHLY_ORDER_OPTIONS)[number];

export type BetaSignup = {
  name: string;
  businessEmail: string;
  shopifyStoreUrl: string;
  monthlyOrders: MonthlyOrders | null;
  analyticsChallenge: string | null;
};

export type BetaField =
  | "name"
  | "businessEmail"
  | "shopifyStoreUrl"
  | "monthlyOrders"
  | "analyticsChallenge";

type ValidationResult =
  | { success: true; data: BetaSignup }
  | { success: false; errors: Partial<Record<BetaField, string>> };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedMonthlyOrders = new Set<string>(MONTHLY_ORDER_OPTIONS);

function isRecord(input: unknown): input is Record<string, unknown> {
  return typeof input === "object" && input !== null && !Array.isArray(input);
}

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeStoreUrl(value: string): string | null {
  try {
    const parsed = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    if (
      !["http:", "https:"].includes(parsed.protocol) ||
      parsed.username ||
      parsed.password ||
      !parsed.hostname.includes(".")
    ) {
      return null;
    }

    const hostname = parsed.hostname.toLowerCase().replace(/\.$/, "");
    return hostname.length <= 500 ? hostname : null;
  } catch {
    return null;
  }
}

export function validateBetaSignup(input: unknown): ValidationResult {
  if (!isRecord(input)) {
    return { success: false, errors: { name: "Please check the submitted details." } };
  }

  const errors: Partial<Record<BetaField, string>> = {};
  const name = stringValue(input.name);
  const businessEmail = stringValue(input.businessEmail).toLowerCase();
  const rawStoreUrl = stringValue(input.shopifyStoreUrl);
  const shopifyStoreUrl = normalizeStoreUrl(rawStoreUrl);
  const monthlyOrders = stringValue(input.monthlyOrders);
  const analyticsChallenge = stringValue(input.analyticsChallenge);

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 150) errors.name = "Name must be 150 characters or fewer.";

  if (!businessEmail) errors.businessEmail = "Please enter your business email.";
  else if (businessEmail.length > 255 || !EMAIL_PATTERN.test(businessEmail)) {
    errors.businessEmail = "Enter a valid email address.";
  }

  if (!rawStoreUrl) errors.shopifyStoreUrl = "Please enter your Shopify store URL.";
  else if (!shopifyStoreUrl) {
    errors.shopifyStoreUrl = "Enter a valid store URL, such as your-store.myshopify.com.";
  }

  if (monthlyOrders && !allowedMonthlyOrders.has(monthlyOrders)) {
    errors.monthlyOrders = "Select a valid monthly order range.";
  }

  if (analyticsChallenge.length > 2_000) {
    errors.analyticsChallenge = "Analytics challenge must be 2,000 characters or fewer.";
  }

  if (Object.keys(errors).length || !shopifyStoreUrl) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name,
      businessEmail,
      shopifyStoreUrl,
      monthlyOrders: monthlyOrders ? (monthlyOrders as MonthlyOrders) : null,
      analyticsChallenge: analyticsChallenge || null,
    },
  };
}

export function honeypotWasFilled(input: unknown): boolean {
  return isRecord(input) && typeof input.website === "string" && input.website.trim().length > 0;
}
