interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="font-['Minecraft'] text-[0.8rem] text-[#0f0f0f] bg-[#f5c842]
      border-none px-5 py-2.5 cursor-pointer tracking-[0.1em]
      transition-all duration-200 ease-in-out
      hover:bg-[#ffd700] hover:text-[#292929]
      active:scale-95 active:brightness-90"
    >
      Search
    </button>
  );
}
