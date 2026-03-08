import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ModeSelector from "../ModeSelector/ModeSelector";

export default function HeroSection() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-14 px-8 pb-12"
      style={{
        background: "linear-gradient(180deg, #1a1008 0%, #2d1a0a 100%)",
      }}
    >
      <div className="w-full max-w-[900px]">
        <div className="text-center mb-12">
          <p className="font-['Minecraft'] text-[#9a7a5a] text-[0.7rem] tracking-[0.3em] uppercase mb-3">
            Hypixel Network
          </p>
          <h2
            className="font-['Minecraft'] text-[#f0e6d0] leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              textShadow: "3px 3px 0 #1a0f05",
            }}
          >
            Search any player.
            <br />
            <span className="text-[#f5c842]">Explore their stats.</span>
          </h2>
        </div>

        <div
          className="grid gap-x-12 items-center"
          style={{ gridTemplateColumns: "200px 1px 1fr" }}
        >
          <ModeSelector onSelect={setSelectedMode} selected={selectedMode} />
          <div className="bg-[#3d2b1f] h-[120px]" />
          <div>
            <p className="font-['Minecraft'] text-[#9a7a5a] text-[0.65rem] tracking-[0.2em] uppercase mb-4">
              {selectedMode ? `↳ ${selectedMode}` : "Select a mode →"}
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
