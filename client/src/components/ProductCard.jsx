import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "14px",
          color: "white",
          transition: "0.3s",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "contain",
          }}
        />

        <h3>{product.name}</h3>
        <p style={{ opacity: 0.7 }}>${product.price}</p>
      </div>
    </Link>
  );
}