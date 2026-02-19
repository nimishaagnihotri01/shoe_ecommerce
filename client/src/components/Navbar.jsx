export default function Navbar() {
  return (
    <div style={{
      position:"fixed",
      top:0,
      width:"100%",
      display:"flex",
      justifyContent:"space-between",
      padding:"20px 40px",
      color:"white",
      zIndex:10
    }}>
      <h2>3DStore</h2>

      <div style={{display:"flex",gap:"20px"}}>
        <span>Home</span>
        <span>Shop</span>
        <span>Cart</span>
      </div>
    </div>
  );
}
