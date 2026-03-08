import { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import { getUUID } from "../../services/mojangService";
import { searchHypixelPlayer } from "../../services/hypixelService";

export default function SearchBar() {
  const [username, setUsername] = useState("");

  async function handleSearch() {
    const uuid = await getUUID(username);
    const player = await searchHypixelPlayer(uuid);
    console.log(player);
  }

  return (
    <div className="flex items-center bg-transparent">
      <img
        src="https://ccvaults.com/assets/10.%20Items/27.%20Signs/Bamboo_Sign.png"
        alt="Search"
        className="w-10 h-10 object-contain mr-5 mb-1"
      />
      <input
        className="font-['Minecraft'] text-white border-2 border-amber-950 outline-none placeholder:text-amber-200 w-64 px-3 py-1"
        style={{
          backgroundImage:
            "url('https://ccvaults.com/textures/dark_oak_planks.png')",
          backgroundSize: "32px",
        }}
        placeholder="Name player ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}
