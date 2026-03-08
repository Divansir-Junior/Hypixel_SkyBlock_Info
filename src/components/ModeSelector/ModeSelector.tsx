interface Props {
  onSelect: (mode: string) => void;
  selected: string | null;
}

const modes = [
  { name: "SkyBlock", tag: "RPG" },
  { name: "BedWars", tag: "PVP" },
  { name: "SkyWars", tag: "PVP" },
  { name: "Duels", tag: "1v1" },
  { name: "Murder Mystery", tag: "Social" },
];

export default function ModeSelector({ onSelect, selected }: Props) {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <p
        style={{
          fontFamily: "'Minecraft', sans-serif",
          color: "#5a3e2b",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Game Modes
      </p>
      {modes.map((mode) => (
        <button
          key={mode.name}
          onClick={() => onSelect(mode.name)}
          style={{
            fontFamily: "'Minecraft', sans-serif",
            fontSize: "0.8rem",
            textAlign: "left",
            padding: "8px 12px",
            background:
              selected === mode.name ? "rgba(245,200,66,0.08)" : "transparent",
            border:
              selected === mode.name
                ? "1px solid rgba(245,200,66,0.3)"
                : "1px solid transparent",
            color: selected === mode.name ? "#f5c842" : "#c4a882",
            cursor: "pointer",
            transition: "all 0.15s ease",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {selected === mode.name ? "▶ " : ""}
            {mode.name}
          </span>
          <span
            style={{
              fontSize: "0.5rem",
              color: "#5a3e2b",
              letterSpacing: "0.1em",
            }}
          >
            {mode.tag}
          </span>
        </button>
      ))}
    </nav>
  );
}
