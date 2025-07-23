import Header from "@/components/header";
import Hero from "@/components/hero";
import PlantInfo from "@/components/plant-info";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <Header />
        <Hero />
      </div>
      <div className="p-20 pb-0  bg-white">
        
        <PlantInfo />
      </div>
    </main>
  );
}
