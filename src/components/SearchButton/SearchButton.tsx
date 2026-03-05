import { Search } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        border-2 ml-4 p-0.5
        font-['Minecraft']
        flex items-center justify-center gap-2
        text-black cursor-pointer bg-amber-50
        transition-all duration-300 ease-in-out
        hover:text-green-500 hover:bg-white
      "
    >
      <Search size={20} />
      <span>Search</span>
    </button>
  );
}
