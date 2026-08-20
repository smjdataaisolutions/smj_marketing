import { Icon } from "./Icon";

const insights = [
  { tone: "amber", tag: "Inventory", title: "Low Stock", text: "3 fast-selling products are running low on inventory." },
  { tone: "red", tag: "Performance", title: "Sales Change", text: "Revenue decreased compared with the previous period." },
  { tone: "blue", tag: "Products", title: "Slow-Moving Product", text: "A product has high inventory but very low recent sales." },
];

export function ActionNeeded() {
  return (
    <section className="section action-section" aria-labelledby="action-heading">
      <div className="container action-layout">
        <div className="action-copy"><p className="eyebrow light">Action needed</p><h2 id="action-heading">Know What Needs Your Attention</h2><p>Instead of only showing charts, One Stop Analytics highlights areas that may require action.</p><div className="honesty-note"><Icon name="alert" size={18}/><span>Examples shown are illustrative and reflect the current “Action Needed” concept.</span></div></div>
        <div className="insight-stack">
          {insights.map((item, index) => <article className="insight-card" key={item.title} style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}><span className={`status-dot ${item.tone}`}/><div><span className="insight-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div><Icon name="arrow" size={20}/></article>)}
        </div>
      </div>
    </section>
  );
}
