import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";

export interface PlayerData {
  uuid: string;
  profiles: any; // dados brutos da Hypixel API
}

export default function App() {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection onSearch={setPlayerData} />
              {playerData && <InfoSection player={playerData} />}
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
