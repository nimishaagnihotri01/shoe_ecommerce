import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <div style={{ color: "white", padding: "120px 60px" }}>
        Loading...
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "120px 60px",
        display: "flex",
        gap: "60px",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={product.image}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "42px" }}>{product.name}</h1>

        <p style={{ opacity: 0.7, marginTop: "20px" }}>
          {product.description}
        </p>

        <h2 style={{ marginTop: "20px" }}>
          ₹{product.price}
        </h2>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            background: "#ff7a00",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}