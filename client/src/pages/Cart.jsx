import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "120px 60px",
      }}
    >
      <h1>Your Cart</h1>

      {cart.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            background: "#111",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <img src={item.image} width="80" />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}