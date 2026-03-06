import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface Game {
  image: string;
  name: string;
  badge: string;
}

const games: Game[] = [
  {
    image: "https://wiki.hypixel.net/images/d/d7/SkyBlock_renders_hub.png",
    name: "SkyBlock",
    badge: "RPG",
  },
  {
    image: "https://hypixel.net/attachments/skyyard-png.3193299/",
    name: "BedWars",
    badge: "PVP",
  },
  {
    image: "https://hypixel.net/attachments/image-png.152464/",
    name: "SkyWars",
    badge: "PVP",
  },
];

export default function GameCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);

  return (
    <div className="w-full py-6 bg-gray-950">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-6">
          {games.map((game) => (
            <div key={game.name} className="flex-none">
              <div
                className="relative w-72 h-44 rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.35)" }}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <span
                    className="text-white font-bold tracking-wide"
                    style={{
                      fontFamily: "'Minecraft', sans-serif",
                      fontSize: "1.1rem",
                      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    }}
                  >
                    {game.name}
                  </span>
                  <button
                    className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    Access →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
