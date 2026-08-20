import test from "node:test";
import assert from "node:assert/strict";
import {
  honeypotWasFilled,
  validateBetaSignup,
} from "../lib/beta-validation.ts";

const validPayload = {
  name: "  Jane Merchant  ",
  businessEmail: "  JANE@EXAMPLE.COM ",
  shopifyStoreUrl: "https://Example-Store.myshopify.com/admin",
  monthlyOrders: "100–500",
  analyticsChallenge: "  Understand slow-moving products.  ",
};

test("normalizes a valid beta signup", () => {
  const result = validateBetaSignup(validPayload);
  assert.equal(result.success, true);
  if (!result.success) return;
  assert.deepEqual(result.data, {
    name: "Jane Merchant",
    businessEmail: "jane@example.com",
    shopifyStoreUrl: "example-store.myshopify.com",
    monthlyOrders: "100–500",
    analyticsChallenge: "Understand slow-moving products.",
  });
});

test("allows a valid custom store domain and empty optional fields", () => {
  const result = validateBetaSignup({
    name: "Jane",
    businessEmail: "jane@example.com",
    shopifyStoreUrl: "shop.example.com",
    monthlyOrders: "",
    analyticsChallenge: "",
  });
  assert.equal(result.success, true);
  if (!result.success) return;
  assert.equal(result.data.shopifyStoreUrl, "shop.example.com");
  assert.equal(result.data.monthlyOrders, null);
  assert.equal(result.data.analyticsChallenge, null);
});

test("rejects missing required fields", () => {
  const result = validateBetaSignup({});
  assert.equal(result.success, false);
  if (result.success) return;
  assert.ok(result.errors.name);
  assert.ok(result.errors.businessEmail);
  assert.ok(result.errors.shopifyStoreUrl);
});

test("rejects invalid email, URL, and monthly-order values", () => {
  const result = validateBetaSignup({
    ...validPayload,
    businessEmail: "not-an-email",
    shopifyStoreUrl: "localhost",
    monthlyOrders: "Millions",
  });
  assert.equal(result.success, false);
  if (result.success) return;
  assert.ok(result.errors.businessEmail);
  assert.ok(result.errors.shopifyStoreUrl);
  assert.ok(result.errors.monthlyOrders);
});

test("enforces the analytics challenge length", () => {
  const result = validateBetaSignup({
    ...validPayload,
    analyticsChallenge: "x".repeat(2001),
  });
  assert.equal(result.success, false);
  if (result.success) return;
  assert.ok(result.errors.analyticsChallenge);
});

test("detects only a filled honeypot", () => {
  assert.equal(honeypotWasFilled({ website: "https://spam.example" }), true);
  assert.equal(honeypotWasFilled({ website: "  " }), false);
  assert.equal(honeypotWasFilled({}), false);
});
