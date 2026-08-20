"use client";

import { FormEvent, useRef, useState } from "react";
import {
  MONTHLY_ORDER_OPTIONS,
  type BetaField,
  validateBetaSignup,
} from "@/lib/beta-validation";
import { Icon } from "./Icon";

type Errors = Partial<Record<BetaField | "form", string>>;

export function BetaForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const isSubmitting = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      businessEmail: formData.get("businessEmail"),
      shopifyStoreUrl: formData.get("shopifyStoreUrl"),
      monthlyOrders: formData.get("monthlyOrders"),
      analyticsChallenge: formData.get("analyticsChallenge"),
      website: formData.get("website"),
    };
    const validation = validateBetaSignup(payload);

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    isSubmitting.current = true;
    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, website: payload.website }),
      });
      if (!response.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      isSubmitting.current = false;
      setErrors({
        form: "We couldn't submit your beta request right now. Please try again.",
      });
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div id="beta-form" className="form-success" role="status" tabIndex={-1}>
        <span className="success-icon"><Icon name="check" size={30} /></span>
        <p className="eyebrow">Request received</p>
        <h3>Thanks for your interest in One Stop Analytics.</h3>
        <p>We&apos;ve received your beta request and will get in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form id="beta-form" className="beta-form" onSubmit={submit} noValidate>
      <div className="form-heading"><span>Beta application</span><small>Fields marked * are required</small></div>
      <div className="form-website" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field-row">
        <label>
          <span>Name *</span>
          <input name="name" autoComplete="name" required maxLength={150} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />
          {errors.name && <small id="name-error" className="field-error">{errors.name}</small>}
        </label>
        <label>
          <span>Business Email *</span>
          <input name="businessEmail" type="email" autoComplete="email" required maxLength={255} aria-invalid={Boolean(errors.businessEmail)} aria-describedby={errors.businessEmail ? "email-error" : undefined} placeholder="you@company.com" />
          {errors.businessEmail && <small id="email-error" className="field-error">{errors.businessEmail}</small>}
        </label>
      </div>
      <label>
        <span>Shopify Store URL *</span>
        <input name="shopifyStoreUrl" inputMode="url" autoComplete="url" required maxLength={500} aria-invalid={Boolean(errors.shopifyStoreUrl)} aria-describedby={errors.shopifyStoreUrl ? "url-error" : "url-help"} placeholder="your-store.myshopify.com" />
        <small id="url-help" className="field-help">Your .myshopify.com URL or store domain</small>
        {errors.shopifyStoreUrl && <small id="url-error" className="field-error">{errors.shopifyStoreUrl}</small>}
      </label>
      <label>
        <span>Monthly Orders <em>Optional</em></span>
        <select name="monthlyOrders" defaultValue="" aria-invalid={Boolean(errors.monthlyOrders)} aria-describedby={errors.monthlyOrders ? "orders-error" : undefined}>
          <option value="" disabled>Select a range</option>
          {MONTHLY_ORDER_OPTIONS.map((option) => <option key={option}>{option}</option>)}
        </select>
        {errors.monthlyOrders && <small id="orders-error" className="field-error">{errors.monthlyOrders}</small>}
      </label>
      <label>
        <span>Main Analytics Challenge <em>Optional</em></span>
        <textarea name="analyticsChallenge" rows={4} maxLength={2000} aria-invalid={Boolean(errors.analyticsChallenge)} aria-describedby={errors.analyticsChallenge ? "challenge-error" : undefined} placeholder="What would you most like help understanding about your Shopify store?" />
        {errors.analyticsChallenge && <small id="challenge-error" className="field-error">{errors.analyticsChallenge}</small>}
      </label>
      {errors.form && <p className="form-error" role="alert">{errors.form}</p>}
      <button className="button form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting..." : "Request Beta Access"}<Icon name="arrow" size={18} />
      </button>
      <p className="form-privacy">By submitting, you agree that we may contact you about the beta. See our <a href="/privacy">starter privacy notice</a>.</p>
    </form>
  );
}
