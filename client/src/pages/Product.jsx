import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {

  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if(!product) return <h1 style={{color:"white"}}>Not Found</h1>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "120px 60px",
      }}
    >
      <h1>{product.name}</h1>
      <img
        src={product.image}
        style={{ width: "400px", objectFit: "contain" }}
      />
      <h2>${product.price}</h2>
    </div>
  );
}