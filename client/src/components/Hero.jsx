import Product3D from "./Product3D";

export default function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      {/* LEFT TEXT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <h1 style={{ fontSize: "56px", fontWeight: "700" }}>
          Future Sneakers
        </h1>

        <p style={{ opacity: 0.7 }}>
          A next-generation 3D ecommerce experience.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "14px 28px",
            background: "#ff7a00",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* RIGHT 3D */}
      <div style={{ flex: 1 }}>
        <Product3D />
      </div>
    </div>
  );
}
