export default function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        paddingTop: "100px"  
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "12px",
          width: "320px",
        }}
      >
        <h2>Login</h2>

        <input
          placeholder="Email"
          style={{ width: "100%", marginTop: "20px", padding: "10px" }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{ width: "100%", marginTop: "10px", padding: "10px" }}
        />

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#ff7a00",
            border: "none",
            color: "white",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}