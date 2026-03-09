import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import GameCarousel from "./components/Carousel/Carousel";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <GameCarousel />
              <InfoSection />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
