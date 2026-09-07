import Image from "next/image";
import TrailContainer from "./components/TrailContainer";

export default function Home() {
  return (
    <>
      <section>
        <div className="hero-img">
          <img src="/hero.jpg" alt="" />
        </div>
        <p>[The future moves in Frames]</p>
        <p>Mouse trail By Rejoan</p>
        <TrailContainer/>
      </section>
    </>
  );
}
