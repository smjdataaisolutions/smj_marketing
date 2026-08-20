import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Notice | SMJ Data & AI Solutions",
  description: "Starter privacy notice for the One Stop Analytics beta.",
};

export default function PrivacyPage() {
  return (
    <><Header /><main className="legal-page"><div className="container legal-content">
      <p className="eyebrow">Starter document</p><h1>Privacy Notice</h1>
      <div className="legal-warning"><strong>Review required before launch.</strong> This is a plain-language starter notice, not a production-ready legal policy. It should be reviewed and updated for the final data handling practices and applicable laws.</div>
      <p className="updated">Last updated: August 20, 2026</p>
      <h2>Information we may collect</h2><p>When you apply for the One Stop Analytics beta, the form may collect your name, business email address, Shopify store URL, and optional business information such as monthly order range and your analytics challenge.</p>
      <h2>How information may be used</h2><p>The information may be used to review beta applications, contact applicants about access, understand merchant needs, and improve the product and beta experience.</p>
      <h2>How beta applications are stored</h2><p>Beta application details are sent to the website&apos;s server and stored in a dedicated marketing PostgreSQL database. This database is separate from the Shopify Analytics application database and does not contain Shopify order, product, or analytics data.</p>
      <h2>Sharing and retention</h2><p>No production sharing or retention terms are promised in this starter notice. Before public launch, this section must identify the database provider, any other processors, the retention and deletion approach, security measures, and any applicable international data transfers.</p>
      <h2>Your choices and contact</h2><p>Before launch, this section should explain how people can request access to, correction of, or deletion of their information where applicable. Replace the placeholder contact address at <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.</p>
      <Link className="text-link back-link" href="/">← Back to home</Link>
    </div></main><Footer /></>
  );
}
