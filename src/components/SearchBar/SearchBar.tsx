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
    // Input container  + button
    <div className="flex items-center gap-2">
      {/* Player name input */}
      <input
        placeholder="Player name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="font-['Minecraft'] text-[#f0e6d0] bg-[#1a1008] border-2 border-[#3d2b1f] px-4 py-2.5 outline-none w-[280px] tracking-[0.05em] text-sm transition-colors duration-150"
        onFocus={(e) => (e.target.style.borderColor = "#f5c842")}
        onBlur={(e) => (e.target.style.borderColor = "#3d2b1f")}
      />

      <SearchButton onClick={handleSearch} />
    </div>
  );
}
