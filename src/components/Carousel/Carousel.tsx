import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChartBarBig, Sword, Cloud, type LucideIcon } from "lucide-react";

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
      />
    );
  }
  const Icon = icon;
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#1a1008]">
      <Icon size={80} color="#f5c842" />
    </div>
  );
}

export default function GameCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  return (
    <div className="w-full py-6 bg-gray-950">
      <div className="overflow-hidden max-w-2xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {games.map((game) => (
            <div key={game.name} className="flex-none w-full">
              <div
                className="relative w-full h-72 rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.35)" }}
              >
                <GameIcon icon={game.icon} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge */}
                <span
                  className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {game.badge}
                </span>

                {/* Nome + descrição */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                  <span
                    className="text-white font-bold tracking-wide"
                    style={{
                      fontFamily: "'Minecraft', sans-serif",
                      fontSize: "1.3rem",
                      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    }}
                  >
                    {game.name}
                  </span>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {game.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
