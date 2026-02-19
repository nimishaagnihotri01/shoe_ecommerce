import Product3D from "./Product3D";

export default function Hero() {
  return (
    <div style={{
      display:"flex",
      height:"100vh",
      background:"#0a0a0a",
      color:"white"
    }}>
      <div style={{
        flex:1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"60px"
      }}>
        <h1 style={{fontSize:"56px"}}>Future Sneakers</h1>
        <p style={{opacity:0.7}}>
          A next-generation 3D ecommerce experience.
        </p>
        <button style={{
          marginTop:"20px",
          padding:"14px 28px",
          background:"#ff7a00",
          border:"none",
          color:"white",
          cursor:"pointer"
        }}>
          Shop Now
        </button>
      </div>

      <div style={{flex:1}}>
        <Product3D/>
      </div>
    </div>
  );
}
