import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "120px 60px",
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>Shop Sneakers</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "30px",
        }}
      >
        {products.map((p) => (
          <Link
            key={p._id}
            to={`/product/${p._id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />

              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}