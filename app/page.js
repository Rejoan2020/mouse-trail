import Image from "next/image";
import TrailContainer from "./components/TrailContainer";

export default function Home() {
  return (
    <div className="relative">

      <div
        className="absolute inset-0 pointer-events-none" 
      >
        <TrailContainer />
      </div>

      <section className="hero">
        <div className="her-img">
          <Image fill src="/hero.jpg" alt="" className="w-full"/>
        </div>
        <p>[The future moves in Frames]</p>
        <p>Mouse trail By Rejoan</p>
      </section>

      {/* <section className="relative z-0">
        <div className="her-img">
          <Image src="/hero.jpg" alt="" fill/>
        </div>
      </section> */}
    </div>
  );
}