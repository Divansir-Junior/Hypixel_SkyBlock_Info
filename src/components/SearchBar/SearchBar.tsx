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
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        placeholder="Player name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        style={{
          fontFamily: "'Minecraft', sans-serif",
          fontSize: "0.9rem",
          color: "#f0e6d0",
          background: "#1a1008",
          border: "2px solid #3d2b1f",
          padding: "10px 16px",
          outline: "none",
          width: "280px",
          letterSpacing: "0.05em",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#f5c842")}
        onBlur={(e) => (e.target.style.borderColor = "#3d2b1f")}
      />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}
