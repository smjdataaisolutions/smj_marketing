import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | SMJ Data & AI Solutions",
  description:
    "Privacy policy for the SMJ Data & AI Solutions website and OneStop Analytics Shopify application.",
};

const privacyEmail = "smjdataaisolutions@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-content">
      <p className="eyebrow">Legal</p><h1>Privacy Policy</h1>
      <p className="updated">Last updated: November 4, 2026</p>
      <p>SMJ Data &amp; AI Solutions (&quot;SMJ,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates smjdataai.com and OneStop Analytics, an embedded analytics application for Shopify merchants. This policy explains what information we process, why we process it, the service providers involved, and the choices available to merchants and other individuals.</p>
      <h2>1. Scope and our role</h2>
      <p>This policy applies to visitors to smjdataai.com, beta applicants, Shopify merchants who install or use OneStop Analytics, authorized Shopify users who access the application, and store data Shopify makes available to the application.</p>
      <p>For Shopify store data, the merchant determines why the store collects and uses information. SMJ processes that data to provide OneStop Analytics to the merchant and generally acts as the merchant&apos;s service provider or processor where those terms apply. For beta applications, support communications, and operation of our own website and services, SMJ determines the purposes described in this policy.</p>

      <h2>2. Information we process</h2>
      <h3>Website and beta applications</h3>
      <p>When someone applies for the OneStop Analytics beta, we collect their name, business email address, Shopify store hostname or URL, optional monthly order range, and optional description of their analytics challenges. The form sends this information to the website server and stores it in a dedicated Neon PostgreSQL marketing database. That database is separate from the OneStop Analytics session and analytics databases and does not contain Shopify order, product, inventory, or analytics data.</p>
      <p>Our website and network providers may also process technical request information such as IP address, request time, requested URL, browser or device information, and response status as part of delivering and protecting the website.</p>

      <h3>Merchant, installation, and Shopify session information</h3>
      <p>When a merchant installs or uses OneStop Analytics, we process the store&apos;s .myshopify.com domain and Shopify shop identifier; installation, synchronization, and uninstall status and timestamps; authorized access scopes; Shopify session identifiers, state, online or offline status, and expiry; access and refresh tokens; and information Shopify may associate with an authorized store user, such as Shopify user ID, name, email address, locale, account-owner or collaborator status, and email-verification status.</p>
      <p>Access and refresh tokens are used server-side to authenticate the application with Shopify and are not intentionally exposed through the analytics interface.</p>

      <h3>Shopify store and analytics information</h3>
      <p>OneStop Analytics requests read-only access to products, inventory, locations, and orders. It synchronizes product, variant, and inventory-item identifiers; titles; handle; status; vendor; product type; tags; featured image; SKU; barcode; price; inventory policy; inventory tracking and quantities; and creation and update times.</p>
      <p>For merchant locations, we process the location identifier, name, address, active and fulfillment status, and related inventory quantities. For orders and line items, we process Shopify identifiers, order number, timestamps, currency, financial and fulfillment status, sales channel, monetary totals, refund notes when present, product and variant references, title, SKU, quantities, unit price, and currency. We use this information for Store Overview, Sales, Inventory, Orders, and Products analytics.</p>

      <h3>Customer-related and protected Shopify data</h3>
      <p>Shopify treats order data as protected customer data because an order relates to an individual customer, even when direct identifying fields are omitted. OneStop Analytics does not intentionally request or store customer first or last name, customer email address, customer phone number, billing address, or shipping address in its analytics database. Its scheduled Shopify GraphQL synchronization deliberately excludes customer objects and those fields.</p>
      <p>Shopify order and mandatory privacy webhooks are received as authenticated payloads before the application selects the analytics fields it stores. If Shopify supplies customer-identifying fields in those payloads, they may pass transiently through application memory for authentication, routing, synchronization, or privacy-request processing. The application does not intentionally store the raw webhook body or those customer contact fields in its analytics database.</p>
      <p>Refund notes are free-text information entered in Shopify and could contain personal information. Merchant location addresses may also be personal addresses if a merchant has configured a home or other personal address as a Shopify location.</p>

      <h3>Webhooks, privacy requests, and operational information</h3>
      <p>We process the Shopify store domain, webhook topic, delivery identifier and time where supplied, signed webhook body, authentication signature, store-data changes, privacy-request identifier, and relevant order identifiers. For a Shopify customer data request, we retain only the request identifier and relevant order identifiers; we do not intentionally retain the customer email, phone number, or raw privacy-webhook payload.</p>
      <p>Operational logs may contain store domain, request path, timestamps, authentication results, response status, and error diagnostics. The application does not intentionally log Shopify access tokens, database credentials, authorization headers, or webhook bodies.</p>

      <h2>3. How we use information</h2>
      <p>We use information to review beta applications and contact applicants; understand merchant needs and improve the product; install, authenticate, and operate OneStop Analytics; synchronize Shopify data; provide analytics, filters, charts, tables, and downloads; maintain separation between stores; diagnose failures and protect the service; respond to support and privacy requests; and process Shopify&apos;s mandatory data-access and deletion webhooks.</p>
      <p>OneStop Analytics does not include advertising functionality, and we do not use Shopify store data for targeted advertising.</p>

      <h2>4. Sources of information</h2>
      <p>We receive information directly from beta applicants and people who contact us; from merchants and authorized users during Shopify installation and use; from Shopify through authentication, the Admin API, and webhooks; and from our hosting, network, logging, and database providers as part of operating the service.</p>

      <h2>5. Service providers and disclosures</h2>
      <p><strong>Shopify</strong> provides app installation, authentication, APIs, webhooks, and the platform through which merchants access the app.</p>
      <p><strong>Google Cloud</strong> hosts the React Router frontend and FastAPI backend on Cloud Run in the us-east5 region in Columbus, Ohio, United States. Google Cloud Secret Manager stores application and database credentials, and Google Cloud processes operational logs.</p>
      <p><strong>Neon</strong> provides separate PostgreSQL databases for beta applications, persistent Shopify sessions, and merchant analytics. The reviewed production connections use Neon infrastructure in AWS us-east-2, Ohio, United States.</p>
      <p><strong>Cloudflare</strong> provides DNS, TLS termination, and reverse proxy services for app.smjdataai.com and hosts the marketing website through Cloudflare Workers. Cloudflare processes requests through its network.</p>
      <p>These providers process information as necessary to deliver their services to us. We may also disclose information when required by applicable law, to protect the service or its users, or at the relevant person&apos;s or merchant&apos;s direction. We do not disclose Shopify store data to unrelated parties for their own advertising purposes.</p>

      <h2>6. Security</h2>
      <p>The reviewed implementation uses HTTPS and TLS-required database connections; server-side Shopify authentication; persistent session storage; independently verified Shopify identity tokens; short-lived, server-generated tenant assertions; an IAM-protected analytics backend; Shopify HMAC validation; allowlisted webhook topics and destinations; read-only Shopify scopes; store-scoped database records; tenant-restricted merchant database sessions; private, no-store caching instructions for analytics responses; and server-side credential storage through Google Cloud Secret Manager.</p>
      <p>No method of transmission or storage is completely secure. We do not claim a security certification or guarantee that unauthorized access can never occur.</p>

      <h2>7. Retention, uninstall, and deletion</h2>
      <h3>Beta applications</h3>
      <p>Beta application information is retained for no more than 24 months after the last meaningful contact with the applicant, unless it is deleted earlier following a verified request.</p>

      <h3>Shopify sessions and uninstall</h3>
      <p>Persistent Shopify session records are deleted when the application successfully receives and authenticates Shopify&apos;s app-uninstalled webhook for the store. Sessions are also deleted when a successful shop-redaction request is processed.</p>
      <p>The uninstall webhook marks the analytics tenant as uninstalled but does not itself immediately delete the store&apos;s analytics history. Shopify ordinarily sends a shop-redaction webhook after uninstall. When OneStop Analytics successfully receives and authenticates that webhook, it deletes the store&apos;s active products, variants, locations, inventory, orders, line items, synchronization state, privacy-request records, and tenant record.</p>

      <h3>Customer redaction and record deletion</h3>
      <p>When Shopify sends an authenticated customer-redaction webhook, OneStop Analytics deletes the specified store-scoped orders and line-item records. Authenticated product, order, inventory, and location deletion webhooks remove or update the corresponding active analytics records.</p>

      <h3>Customer data requests, backups, and logs</h3>
      <p>For a Shopify customer data request, an authorized operator can export the relevant stored order and line-item analytics and provide them to the requesting store owner through a controlled channel. Temporary export files are deleted no later than 30 days after the request is completed. The request identifier, relevant order identifiers, and completion status are retained for no more than 90 days after completion.</p>
      <p>Ordinary application and request logs are retained for no more than 30 days. Security, administrative, or audit logs that a cloud provider maintains under its standard service controls may remain for the provider&apos;s documented retention period.</p>
      <p>Provider-managed backup and recoverable database history expires under the configured provider retention window. Any manual backup containing Shopify protected customer data is deleted within 30 days after its verification or recovery purpose is complete.</p>
      <p>Deletion from active application tables may not immediately remove residual copies from backups or recoverable database history. Those copies are isolated from normal application use and expire under the applicable backup schedule. If a backup is restored, applicable deletion requests will be reapplied.</p>

      <h3>Merchant data protection agreement</h3>
      <p>By installing or using OneStop Analytics, the merchant instructs SMJ to process the Shopify store data described in this policy only for the purposes stated here. This policy forms the merchant&apos;s data protection agreement with SMJ for that processing. The merchant acts as the controller or business responsible for its store data, and SMJ acts as the merchant&apos;s processor or service provider where those terms apply.</p>
      <p>The merchant generally authorizes SMJ to use the service providers identified in Section 5 for their stated functions. SMJ processes store data only to provide, secure, support, and maintain OneStop Analytics and to fulfill applicable privacy requests, subject to the security, deletion, retention, and transfer provisions in this policy.</p>

      <h2>8. International data transfers</h2>
      <p>SMJ and its service providers may process information outside the country where a merchant, authorized user, customer, or website visitor is located. The reviewed application stores and processes application and database information in the United States, including Google Cloud&apos;s Columbus, Ohio region and Neon&apos;s AWS Ohio region. Cloudflare may process network requests through data centers in multiple countries. Shopify and other providers may also process information where they and their subprocessors operate.</p>
      <p>These countries may have privacy laws different from those in the individual&apos;s country. Provider terms and applicable data-protection law govern these transfers.</p>

      <h2>9. Privacy rights and requests</h2>
      <p>Depending on applicable law, individuals may have rights to request access to, correction of, deletion of, or restriction of personal information, or to object to certain processing.</p>
      <p>A Shopify customer should normally submit a request to the merchant from whom they purchased. The merchant can then use Shopify&apos;s privacy-request process or contact us about data processed by OneStop Analytics.</p>
      <p>Merchants, authorized Shopify users, beta applicants, and other individuals may email <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. Include your name and contact information, the relevant Shopify store domain if applicable, the type of request, and enough information for us to identify the relevant records and verify that the request is authorized. Do not email passwords, Shopify access tokens, full payment-card information, or unnecessary customer personal information.</p>
      <p>We may need to verify identity, store ownership, or authority before acting on a request. Rights may be limited where an exception under applicable law applies.</p>

      <h2>10. Children</h2>
      <p>OneStop Analytics is a business service for Shopify merchants and is not directed to children. The application does not intentionally request customer birth dates or information used to identify children.</p>

      <h2>11. Changes to this policy</h2>
      <p>We may update this policy when our services, providers, or data practices change. The &quot;Last updated&quot; date identifies the published version. Material application changes should be reflected here before or when the changed processing begins.</p>

      <h2>12. Contact</h2>
      <p>For privacy questions or requests, contact SMJ Data &amp; AI Solutions at <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.</p>
      <Link className="text-link back-link" href="/">&larr; Back to home</Link>
    </div></main><Footer /></>
  );
}
