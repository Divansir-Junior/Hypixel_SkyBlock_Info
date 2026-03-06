import Header from "./components/header/Header";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import GameCarousel from "./components/Carousel/Carousel ";

export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar />
      </Container>
      <GameCarousel />
    </div>
  );
}
