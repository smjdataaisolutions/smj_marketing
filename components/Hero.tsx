import { Icon } from "./Icon";
import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" />
      <div className="container hero-copy">
        <div className="beta-pill"><span/> Early Beta · Free access</div>
        <h1>Understand Your Shopify Store <em>in One Place</em></h1>
        <p>Track sales, orders, inventory and product performance, and quickly see what needs your attention.</p>
        <div className="hero-actions">
          <a className="button" href="#beta-form">Join the Free Beta <Icon name="arrow" size={18}/></a>
          <a className="button button-secondary" href="#how-it-works">See How It Works</a>
        </div>
        <div className="hero-note"><span><Icon name="check" size={16}/> No cost during beta</span><span><Icon name="check" size={16}/> Built for Shopify merchants</span></div>
      </div>
      <div className="container hero-visual">
        <div className="visual-accent visual-accent-one"/><div className="visual-accent visual-accent-two"/>
        <ScreenshotPlaceholder src="/screenshots/store-overview.png" label="Store overview" priority />
      </div>
    </section>
  );
}
