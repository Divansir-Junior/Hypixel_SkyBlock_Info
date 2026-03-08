interface Props {
  onClick: () => void;
}

export default function SearchButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Minecraft', sans-serif",
        fontSize: "0.8rem",
        color: "#0f0f0f",
        background: "#f5c842",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        letterSpacing: "0.1em",
        transition: "background 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#ffd700")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#f5c842")}
    >
      Search
    </button>
  );
}
