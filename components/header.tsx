import { Search, ShoppingCart } from "lucide-react";
import { navFont, navFont2 } from "./ui/fonts";

export default function Header() {
  return (
    <header className="flex items-center bg-white justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f2] px-10 py-3">
      {/* Left: Logo */}
      <div className="flex items-center gap-4 text-[#131614]">
       
        <h2 className={`${navFont2.className} text-[#131614] text-2xl font-bold leading-tight tracking-[-0.015em]`}>
          The Little Sprout
        </h2>
      </div>

      {/* Center: Navigation */}
      <nav className={`${navFont.className} flex flex-1 justify-center items-center gap-9 `}>
        <a className="text-[#131614] text-xl font-medium leading-normal" href="#">
          Home
        </a>
        <a className="text-[#131614]  text-xl font-medium leading-normal" href="#">
          Plants
        </a>
        <a className="text-[#131614]  text-xl font-medium leading-normal" href="#">
          Care Tips
        </a>
        <a className="text-[#131614]  text-xl font-medium leading-normal" href="#">
          Community
        </a>
        <a className="text-[#131614]  text-xl font-medium leading-normal" href="#">
          Shop
        </a>
      </nav>

      {/* Right: Love Icon and Text */}
      <div className={`${navFont.className} flex items-center ml-auto`}>
        <img
          src="/icons/wired-outline-1704-flower-doodle-hover-pinch.gif"
          alt="Animated Plant Icon"
          className="w-10 h-10"
        />
        
        <p className="text-md text-black">
          Made with love, <span className={`${navFont.className} text-[#f0cbcb]`}>Kali</span>
        </p>
      </div>
    </header>
  );
}
