import Header from "@/components/navbar";

import Image from "next/image";
import { Divide } from "lucide-react";
import Mission from "@/components/mission";
import Influence from "@/components/influence";
import BestProduct from "@/components/best-product";
import HowToOrder from "@/components/how-to-order";
import Footer from "@/components/footer";
import Hero from "@/components/header";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="pb-10" > 
        <Hero />      
      </div>
      <Mission />
      <BestProduct />
      <Influence />      
      <HowToOrder />
      <Footer />
      
    </main>
  );
}
