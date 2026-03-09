import { useState } from "react";
import HamburgerMenu from "../Menu/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 h-14 flex items-center justify-center bg-[#0f0f0f] border-b-2 border-[#3d2b1f]">
      <h1
        className="font-['Minecraft'] text-2xl text-[#f5c842] tracking-[0.15em]"
        style={{ textShadow: "2px 2px 0 #7a5c00" }}
      >
        HypixelStats
      </h1>
      <HamburgerMenu isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </header>
  );
}
