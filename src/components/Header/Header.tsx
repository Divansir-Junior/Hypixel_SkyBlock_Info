import { useState } from "react";
import HamburgerMenu from "../Menu/Menu";

import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-14 flex items-center justify-center bg-[#0f0f0f] border-b-2 border-[#3d2b1f]">
        <h1
          className="font-['Minecraft'] text-2xl text-[#f5c842] tracking-[0.15em]"
          style={{ textShadow: "2px 2px 0 #7a5c00" }}
        >
          HypixelStats
        </h1>
        <HamburgerMenu isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      </header>

      {/* Menu aberto */}
      {isOpen && (
        <div className="fixed top-14 right-0 z-40 w-48 bg-[#0f0f0f] border-l-2 border-b-2 border-[#3d2b1f] flex flex-col p-4 gap-3">
          <a
            href="#"
            className="font-['Minecraft'] text-[#f5c842] text-sm hover:text-[#ffd700] transition-colors"
          >
            CONTACT
          </a>
          <Link
            to="/about"
            className="font-['Minecraft'] text-[#f5c842] text-sm hover:text-[#ffd700]"
          >
            About
          </Link>
        </div>
      )}
    </>
  );
}
