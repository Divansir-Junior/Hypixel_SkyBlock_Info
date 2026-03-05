import { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import { getUUID } from "../../services/mojangService";
import { searchHypixelPlayer } from "../../services/hypixelService";

export default function SearchBar() {
  const [username, setUsername] = useState("");

  async function handleSearch() {
    const uuid = await getUUID(username); // 1. pega UUID da Mojang
    const player = await searchHypixelPlayer(uuid); // 2. busca no Hypixel com o UUID
    console.log(player);
  }

  return (
    <div className="flex items-center">
      <input
        className="font-['Minecraft'] text-xl text-white bg-transparent border-b-2 border-white outline-none placeholder:text-white"
        placeholder="Search player..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}
