import Header from "./components/header/Header";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar></SearchBar>
      </Container>
    </div>
  );
}
