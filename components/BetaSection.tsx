import { BetaForm } from "./BetaForm";
import { Icon } from "./Icon";

const benefits = ["Test the product", "Provide direct feedback", "Suggest useful analytics and features", "Help improve the merchant experience"];

export function BetaSection() {
  return (
    <section id="beta" className="section beta-section">
      <div className="container beta-layout">
        <div className="beta-copy"><p className="eyebrow">Limited early access</p><h2>Join the One Stop Analytics Beta</h2><p className="beta-lead">We&apos;re looking for a small group of Shopify merchants to help shape the next version of One Stop Analytics.</p><div className="free-beta"><span>Free</span><div><strong>Beta access is currently free.</strong><small>No payment details required for your application.</small></div></div><ul>{benefits.map((benefit) => <li key={benefit}><span><Icon name="check" size={16}/></span>{benefit}</li>)}</ul></div>
        <BetaForm />
      </div>
    </section>
  );
}
