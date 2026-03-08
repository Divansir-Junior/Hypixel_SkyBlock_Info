import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ModeSelector from "../ModeSelector/ModeSelector";

export default function HeroSection() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1a1008 0%, #2d1a0a 100%)",
        minHeight: "100vh",
        paddingTop: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 32px 48px",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Minecraft', sans-serif",
              color: "#9a7a5a",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Hypixel Network
          </p>
          <h2
            style={{
              fontFamily: "'Minecraft', sans-serif",
              color: "#f0e6d0",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1.2,
              textShadow: "3px 3px 0 #1a0f05",
            }}
          >
            Search any player.
            <br />
            <span style={{ color: "#f5c842" }}>Explore their stats.</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1px 1fr",
            gap: "0 48px",
            alignItems: "center",
          }}
        >
          <ModeSelector onSelect={setSelectedMode} selected={selectedMode} />
          <div style={{ background: "#3d2b1f", height: "120px" }} />
          <div>
            <p
              style={{
                fontFamily: "'Minecraft', sans-serif",
                color: "#9a7a5a",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              {selectedMode ? `↳ ${selectedMode}` : "Select a mode →"}
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
