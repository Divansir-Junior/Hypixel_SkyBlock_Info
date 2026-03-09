import SearchButton from "../SearchButton/SearchButton";

interface Props {
  username: string;
  setUsername: (val: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ username, setUsername, onSearch }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        placeholder="Player name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        className="font-['Minecraft'] text-[#f0e6d0] bg-[#1a1008] border-2 border-[#3d2b1f] px-4 py-2.5 outline-none w-[280px] tracking-[0.05em] text-sm transition-colors duration-150"
        onFocus={(e) => (e.target.style.borderColor = "#f5c842")}
        onBlur={(e) => (e.target.style.borderColor = "#3d2b1f")}
      />
      <SearchButton onClick={onSearch} />
    </div>
  );
}
