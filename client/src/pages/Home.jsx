import Hero from "../components/Hero";
import Featured from "../components/Featured";
import LimitedDrop from "../components/LimitedDrop";

export default function Home() {
  return (
    <div>
      <Hero />
      <LimitedDrop />
      <Featured />
    </div>
  );
}