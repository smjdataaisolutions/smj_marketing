import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Beta Terms | SMJ Data & AI Solutions",
  description: "Starter beta terms for One Stop Analytics.",
};

export default function TermsPage() {
  return (
    <><Header /><main className="legal-page"><div className="container legal-content">
      <p className="eyebrow">Starter document</p><h1>One Stop Analytics Beta Terms</h1>
      <div className="legal-warning"><strong>Professional review may be needed.</strong> These placeholder terms are provided for planning and must be reviewed and adapted before production use.</div>
      <p className="updated">Last updated: August 20, 2026</p>
      <h2>Beta participation</h2><p>One Stop Analytics is in early beta. Access may be limited, changed, suspended, or ended as the product develops. Submitting an application does not guarantee acceptance or access.</p>
      <h2>Beta product</h2><p>Beta software may be incomplete and may contain errors. Features, availability, and data displays may change. Do not rely on the beta as the only source for business-critical decisions.</p>
      <h2>Feedback</h2><p>Participants may choose to provide product feedback and feature suggestions. Final terms should clarify how feedback may be used before the public beta begins.</p>
      <h2>Fees and future changes</h2><p>Beta access is currently described as free. This does not promise that future versions or services will remain free. Any future pricing should be communicated separately.</p>
      <h2>Missing production provisions</h2><p>Final terms may need provisions covering acceptable use, account responsibilities, Shopify platform terms, intellectual property, confidentiality, disclaimers, liability, termination, governing law, and dispute handling. No legal guarantee is created by this placeholder.</p>
      <h2>Contact</h2><p>Replace the placeholder contact address before launch: <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.</p>
      <Link className="text-link back-link" href="/">← Back to home</Link>
    </div></main><Footer /></>
  );
}
