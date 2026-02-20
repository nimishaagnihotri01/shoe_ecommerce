import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        padding: "120px 60px",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "40px" }}>
        Shop Sneakers
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}