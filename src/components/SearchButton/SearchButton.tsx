interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <button
      className="font-['Minecraft'] ml-4 px-3 py-1.5 border-2 border-amber-950 text-amber-100 cursor-pointer transition-all duration-200 hover:bg-amber-950"
      style={{
        backgroundImage:
          "url('https://ccvaults.com/textures/dark_oak_planks.png')",
        backgroundSize: "32px",
      }}
    >
      Search
    </button>
  );
}
