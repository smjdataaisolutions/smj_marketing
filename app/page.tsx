import { ActionNeeded } from "@/components/ActionNeeded";
import { BetaSection } from "@/components/BetaSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductScreenshots } from "@/components/ProductScreenshots";

const contactEmail =
  process.env.CONTACT_EMAIL?.trim() || "smjdataaisolutions@gmail.com";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <ActionNeeded />
        <ProductScreenshots />
        <HowItWorks />
        <BetaSection />
        <section className="final-cta" aria-labelledby="final-cta-heading">
          <div className="container final-cta-inner">
            <p className="eyebrow light">Early beta</p>
            <h2 id="final-cta-heading">Help Shape the Future of One Stop Analytics</h2>
            <p>Join our early beta and help us build analytics that Shopify merchants actually need.</p>
            <a className="button button-light" href="#beta-form">Join the Free Beta</a>
          </div>
        </section>
        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 id="contact-heading">Questions?</h2>
            </div>
            <div>
              <p>Want to know more about One Stop Analytics or the beta program? Get in touch with SMJ Data &amp; AI Solutions.</p>
              <a className="text-link" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
