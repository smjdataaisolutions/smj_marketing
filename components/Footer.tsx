import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark">SMJ</span><span>SMJ Data <span className="brand-amp">&amp;</span> AI Solutions</span></Link><p>Data &amp; AI solutions for Shopify merchants.</p></div>
        <nav aria-label="Footer navigation"><Link href="/#product">Product</Link><Link href="/#beta">Beta</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/#contact">Contact</Link></nav>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SMJ Data &amp; AI Solutions</span><span>One Stop Analytics · Early Beta</span></div>
    </footer>
  );
}
