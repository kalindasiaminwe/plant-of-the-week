import { heroFont, navFont } from "./ui/fonts";

export default function Hero() {
  return (
    <section
  className="relative min-h-screen bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('/images/Untitled design.png')",
    backgroundSize: "contain",
  }}
>
  <div>
    <h2 className={`${navFont.className} font-black text-6xl text-black text-center pt-35`}>Plant of The Week</h2>
  </div>
      
    </section>
  );
}
