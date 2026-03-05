import Header from "./components/header/Header";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchButton from "./components/SearchButton/SearchButton";
export default function App() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar></SearchBar>
        <SearchButton></SearchButton>
      </Container>
    </div>
  );
}
