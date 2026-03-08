import { useEffect, useRef, useState } from "react";
import * as skinview3d from "skinview3d";

interface Props {
  uuid: string;
  visible: boolean;
  onClose: () => void;
  onToggle: () => void;
}

function SkinViewer({ uuid, visible, onClose, onToggle }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<skinview3d.SkinViewer | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !visible) return;
    viewerRef.current = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: 180,
      height: 350,
      skin: `https://visage.surgeplay.com/skin/${uuid}`,
    });

    viewerRef.current.renderer.setClearColor(0x1a1008, 1);
    viewerRef.current.autoRotate = true;
    return () => viewerRef.current?.dispose();
  }, [uuid, visible]);

  if (!visible) return null;

  return (
    <div className="relative">
      <canvas ref={canvasRef} style={{ background: "transparent" }} />
      <button
        className="absolute top-0 right-0 font-['Minecraft'] text-[#f5c842] text-xs"
        onClick={onToggle}
      >
        ⏸
      </button>
      <button
        className="absolute top-0 left-0 font-['Minecraft'] text-red-400 text-xs"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
}

const statCategories = [
  {
    title: "Basic Stats",
    items: ["Player name:", "Player UUID:", "Player level:", "First join:"],
  },
  {
    title: "Combat",
    items: ["Total kills:", "Total deaths:", "Highest damage:", "Death count:"],
  },
  {
    title: "Economy",
    items: [
      "Coin purse:",
      "Auctions created:",
      "Gold earned:",
      "Auction fees:",
    ],
  },
  {
    title: "Progression",
    items: [
      "SkyBlock XP:",
      "Fairy souls:",
      "Mithril powder:",
      "Fishing treasure:",
    ],
  },
  {
    title: "Pets",
    items: ["Active pet:", "Total pets:", "Pet XP gained:"],
  },
];

export default function InfoSection() {
  const [visible, setVisible] = useState(true);
  const [rotating, setRotating] = useState(true);

  return (
    <div className="w-full min-h-[600px] flex items-start justify-center gap-8 bg-[#1a1008] p-8 pt-12">
      {/* Stats lado esquerdo */}
      <div className="flex-1 flex flex-col gap-2">
        {statCategories.map((cat) => (
          <details key={cat.title} className="cursor-pointer w-full">
            <summary className="font-['Minecraft'] text-[#f5c842] bg-amber-950 px-3 py-2 w-full hover:bg-amber-900 transition-colors">
              {cat.title}
            </summary>
            <ul className="pl-4 mt-1 flex flex-col gap-1 font-['Minecraft'] text-[#f0e6d0] text-xs border-l border-amber-950 ml-2">
              {cat.items.map((item) => (
                <li key={item} className="py-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Skin lado direito */}
      <div className="flex flex-col items-center gap-2 w-48">
        <SkinViewer
          uuid="a0a31a8e99944672b384ebc35669607c"
          visible={visible}
          onClose={() => setVisible(false)}
          onToggle={() => setRotating(!rotating)}
        />
        {!visible && (
          <button
            className="font-['Minecraft'] text-[#f5c842] text-xs"
            onClick={() => setVisible(true)}
          >
            Open
          </button>
        )}
      </div>
    </div>
  );
}
