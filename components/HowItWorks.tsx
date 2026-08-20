import { Icon } from "./Icon";

const steps = [
  { icon: "store" as const, title: "Connect Your Shopify Store", text: "Authorize One Stop Analytics to access the store data required for analytics." },
  { icon: "inventory" as const, title: "Your Data Is Organized", text: "Sales, orders, products and inventory are brought together for analysis." },
  { icon: "eye" as const, title: "Understand What Matters", text: "Use dashboards and insights to understand performance and identify areas that need attention." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <div className="section-heading centered"><p className="eyebrow">Simple by design</p><h2>How It Works</h2><p>From store data to a clearer view of what&apos;s happening.</p></div>
        <ol className="steps-list">
          {steps.map((step, index) => <li key={step.title}><div className="step-marker"><span>0{index + 1}</span></div><div className="step-icon"><Icon name={step.icon}/></div><h3>{step.title}</h3><p>{step.text}</p>{index < steps.length - 1 && <span className="step-connector" aria-hidden="true"/>}</li>)}
        </ol>
      </div>
    </section>
  );
}
