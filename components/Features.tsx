import { Icon } from "./Icon";

const features = [
  { icon: "store" as const, title: "Store Performance", text: "See the overall health of your Shopify store using key performance indicators, business highlights and actions that need attention." },
  { icon: "sales" as const, title: "Sales Analytics", text: "Track revenue, orders, sales trends, sales channels and product revenue performance." },
  { icon: "inventory" as const, title: "Inventory Insights", text: "Understand inventory levels and quickly identify low-stock and out-of-stock products." },
  { icon: "orders" as const, title: "Orders & Fulfillment", text: "Monitor order performance, fulfillment status and order activity." },
  { icon: "products" as const, title: "Product Analytics", text: "Identify best sellers, slow-moving products, product revenue and product performance." },
];

export function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-heading centered"><p className="eyebrow">The product</p><h2>One View of Your Store Performance</h2><p>One Stop Analytics brings the key areas of your Shopify store together so you can understand performance and act faster.</p></div>
        <div className="feature-grid">
          {features.map((item, index) => <article className={`feature-card ${index === 0 ? "featured" : ""}`} key={item.title}><span className="icon-box"><Icon name={item.icon}/></span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="feature-line"/></article>)}
        </div>
      </div>
    </section>
  );
}
