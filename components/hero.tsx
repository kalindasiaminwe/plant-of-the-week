import { navFont } from "./ui/fonts"

export default function Hero() {
  return (
    <section className="relative">
      {/* Mobile/Small screens: Custom sized container */}
      <div
        className="sm:hidden w-full h-[250px] bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="flex flex-col justify-start px-4 pt-13 ">
          <h2 className={`${navFont.className} font-black text-xl text-black text-center`}>Plant of The Week</h2>
        </div>
      </div>

      {/* Small screens and up: Custom sized container */}
      <div
        className="hidden sm:block md:hidden w-[350px] h-[450px] mx-auto bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: "url('/images/Untitled design.png')",
        }}
      >
        <div className="flex flex-col justify-start px-4 pt-8">
          <h2 className={`${navFont.className} font-black text-lg text-black text-center`}>Plant of The Week</h2>
        </div>
      </div>

      {/* Medium screens and up: Full height container */}
      <div
        className="hidden md:block min-h-screen bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: "url('/images/hero2.png')",
        }}
      >
        <div className="flex flex-col justify-center px-4">
          <h2 className={`${navFont.className} font-black text-6xl text-black text-center pt-35`}>Plant of The Week</h2>
        </div>
      </div>
      
    </section>
  )
}
