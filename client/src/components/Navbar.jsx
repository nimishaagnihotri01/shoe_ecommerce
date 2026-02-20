import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        width: "100vw",
        boxSizing:"border-box",
        padding: "20px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        left: 0,
        color: "white",
        zIndex: 10,
      }}
    >
      {/* LEFT LOGO */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
      >
        VOID
      </div>

      {/* CENTER MENU */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        <Link to="/">Home</Link>
<Link to="/shop">Shop</Link>
<Link to="/cart">Cart</Link>
<Link to="/login">Login</Link>
      </div>

      {/* RIGHT ACTIONS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "18px",
        }}
      >
        <span style={{ cursor: "pointer" }}>🔍</span>
        <span style={{ cursor: "pointer" }}>🛒</span>
        <span style={{ cursor: "pointer" }}>👤</span>
      </div>
    </div>
  );
}
