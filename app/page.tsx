import Header from "@/components/navbar";
import Hero from "@/components/hero";
import PlantInfo from "@/components/plant-info";
import Image from "next/image";
import { Divide } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="bg-white">
        <Hero />
      </div>  
      <div className="bg-[#fcdeda] w-[982px] mx-auto px-2 pt-20" > 
        <PlantInfo />
        </div>      
      {/* <div className="px-20 pb-0 pt-20  bg-white">
        <PlantInfo />
      </div> */}
    </main>
  );
}
