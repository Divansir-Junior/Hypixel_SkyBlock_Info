import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";
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
              <InfoSection />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
