import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChartBarBig, type LucideIcon } from "lucide-react";

interface Game {
  icon: string | LucideIcon;
  name: string;
  badge: string;
  description: string;
}

const games: Game[] = [
  {
    icon: ChartBarBig,
    name: "SkyBlock",
    badge: "RPG",
    description:
      "Track your SkyBlock profile, skills, pets, and economy stats in one place.",
  },
  {
    icon: "https://hypixel.net/attachments/skyyard-png.3193299/",
    name: "BedWars",
    badge: "PVP",
    description: "View wins, losses, and K/D ratio across all BedWars modes.",
  },
  {
    icon: "https://hypixel.net/attachments/image-png.152464/",
    name: "SkyWars",
    badge: "PVP",
    description:
      "Explore SkyWars statistics including kills, wins, and win streaks.",
  },
];

function GameIcon({ icon }: { icon: string | LucideIcon }) {
  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ imageRendering: "pixelated" }}
      />
    );
  }
  const Icon = icon;
  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #2d1a0a 0%, #1a1008 100%)",
      }}
    >
      <Icon size={80} color="#f5c842" />
    </div>
  );
}

export default function GameCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  return (
    <div className="w-full py-10 bg-transparent">
      <div className="overflow-hidden max-w-2xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {games.map((game) => (
            <div key={game.name} className="flex-none w-full px-2">
              <div
                className="relative w-full h-72 overflow-hidden cursor-pointer group"
                style={{
                  border: "3px solid #3d2b1f",
                  outline: "2px solid #1a0f05",
                  boxShadow: "4px 4px 0px #000, inset 0 0 0 1px #5a3e2b",
                  imageRendering: "pixelated",
                }}
              >
                <GameIcon icon={game.icon} />

                {/* Overlay escuro pixelado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Badge estilo Minecraft */}
                <span
                  className="absolute top-3 left-3 font-['Minecraft'] text-[9px] uppercase tracking-widest px-2 py-0.5 text-[#f5c842]"
                  style={{
                    background: "#1a1008",
                    border: "2px solid #3d2b1f",
                    outline: "1px solid #000",
                    boxShadow: "2px 2px 0px #000",
                  }}
                >
                  {game.badge}
                </span>

                {/* Nome + descrição */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
                  <span
                    className="font-['Minecraft'] text-[#f5c842] tracking-wide"
                    style={{
                      fontSize: "1.2rem",
                      textShadow: "2px 2px 0 #000, -1px -1px 0 #7a5c00",
                    }}
                  >
                    {game.name}
                  </span>
                  <p
                    className="font-['Minecraft'] text-[#c4a882] leading-relaxed"
                    style={{ fontSize: "0.6rem", textShadow: "1px 1px 0 #000" }}
                  >
                    {game.description}
                  </p>
                </div>

                {/* Linha decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3d2b1f]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
