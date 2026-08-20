import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";

const screenshots = [
  { name: "Store Overview", src: "/screenshots/overview.png", text: "See important store KPIs, highlights and areas requiring attention." },
  { name: "Sales Analytics", src: "/screenshots/sales.png", text: "Understand revenue, order trends and the products driving sales." },
  { name: "Inventory", src: "/screenshots/inventory.png", text: "Review inventory levels and spot low-stock or out-of-stock products." },
  { name: "Orders", src: "/screenshots/orders.png", text: "Monitor orders, fulfillment status and recent order activity." },
  { name: "Products", src: "/screenshots/products.png", text: "Compare product revenue, best sellers and slow-moving products." },
];

export function ProductScreenshots() {
  return (
    <section className="section screenshots-section" aria-labelledby="screenshots-heading">
      <div className="container">
        <div className="section-heading centered"><p className="eyebrow">Inside the product</p><h2 id="screenshots-heading">Explore Your Store From Every Angle</h2><p>Move from the big picture to the details without piecing together separate reports.</p></div>
        <div className="screenshot-grid">
          {screenshots.map((item, index) => <article className={`screenshot-card screenshot-card-${index + 1}`} key={item.name}><div className="screenshot-card-copy"><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.text}</p></div></div><ScreenshotPlaceholder src={item.src} label={item.name}/></article>)}
        </div>
      </div>
    </section>
  );
}
