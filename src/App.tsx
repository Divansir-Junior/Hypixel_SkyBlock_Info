// App.tsx
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import GameCarousel from "./components/Carousel/Carousel";
import InfoSection from "./components/InfoSection/InfoSection";
export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <InfoSection />
    </div>
  );
}
