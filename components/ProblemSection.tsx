import { Icon } from "./Icon";

const problems = [
  { icon: "chart" as const, number: "01", title: "Metrics Everywhere", text: "Sales, inventory, orders and product performance often need to be checked separately." },
  { icon: "eye" as const, number: "02", title: "Hard to Spot Problems", text: "Important changes can get buried across reports and dashboards." },
  { icon: "clock" as const, number: "03", title: "Too Much Time Checking Data", text: "Merchants need faster answers about what is happening and what needs attention." },
];

export function ProblemSection() {
  return (
    <section id="product" className="section problem-section">
      <div className="container">
        <div className="section-heading split-heading"><div><p className="eyebrow">The challenge</p><h2>Your Shopify Data Should Be Easier to Understand</h2></div><p>Running a store is already complex. Finding the right numbers shouldn&apos;t add to it.</p></div>
        <div className="card-grid three-col">
          {problems.map((item) => <article className="problem-card" key={item.title}><div className="card-top"><span className="icon-box"><Icon name={item.icon}/></span><span className="card-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
