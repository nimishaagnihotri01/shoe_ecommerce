export default function Featured() {
  const sneakers = [
    { name: "AIR VOID", img: "/img1.jpeg" },
    { name: "SHADOW RUNNER", img: "/img2.webp" },
    { name: "NIGHT RACER", img: "/img3.jpg" },
    { name: "URBAN STEP", img: "/img4.webp" },
    { name: "PHANTOM WALK", img: "/img5.avif" },
    { name: "NEON STRIDE", img: "/img6.jpg" },
  ];

  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "white",
        padding: "80px 60px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        Featured Sneakers
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
        }}
      >
        {sneakers.map((shoe, index) => (
          <div
            key={index}
            style={{
              minWidth: "260px",
              background: "#111",
              padding: "20px",
              borderRadius: "14px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={shoe.img}
              alt={shoe.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>
              {shoe.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
