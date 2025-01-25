import MainContent from "./MainContent";
import Menue from "./Menue";
import Rectangle from "./Rectangle";
import Section1 from "./Section1";
import TopNav from "./TopNav";

export default function Hero() {
  return (
    <div className="flex flex-col relative w-[100vw] gap-10 items-center ">
      {/* Top Nav */}
      <TopNav />
      <Menue />
      <MainContent />
      <Section1 />
      <Rectangle />
    </div>
  );
}
