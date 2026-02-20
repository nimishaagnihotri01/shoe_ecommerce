import Limited3D from "./Limited3D";
export default function LimitedDrop() {
  return (
    <section
      className="scroll-section"
      style={{
        background:
          "linear-gradient(135deg, #000000, #0a0a0a, #111111)",
        color: "white",
        padding: "120px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
      }}
    >
      {/* LEFT SIDE TEXT */}
      <div className="scroll-float" style={{ maxWidth: "500px" }}>
        <p
          className="reveal-up"
          style={{
            letterSpacing: "3px",
            fontSize: "14px",
            opacity: 0.6,
            marginBottom: "10px",
          }}
        >
          LIMITED DROP
        </p>

        <h1
          className="reveal-up"
          style={{
            fontSize: "64px",
            lineHeight: "70px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          AIR VOID X
        </h1>

        <p className="reveal-up" style={{ opacity: 0.7 }}>
          Crafted for motion. Designed for the future.
          Experience the next generation of luxury sneakers.
        </p>

        <button
          className="reveal-up"
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            background: "#ff7a00",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "600",
          }}
        >
          Shop Limited Drop
        </button>
      </div>

      {/* RIGHT SIDE 3D VISUAL */}
      <div
        className="reveal-up scroll-float"
        style={{
          flex: 1,
          height: "420px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Limited3D />
      </div>
    </section>
  );
}
