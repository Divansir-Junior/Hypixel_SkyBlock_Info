import { useEffect, useRef, useState } from "react";
import * as skinview3d from "skinview3d";
import type { PlayerData } from "../../App";

interface Props {
  uuid: string;
  visible: boolean;
  onClose: () => void;
  onToggle: () => void;
  rotating: boolean;
}

function SkinViewer({ uuid, visible, onClose, onToggle, rotating }: Props) {
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

  // Atualiza autoRotate quando rotating muda
  useEffect(() => {
    if (!viewerRef.current) return;
    viewerRef.current.autoRotate = rotating;
  }, [rotating]);

  if (!visible) return null;

  return (
    <div className="relative">
      <canvas ref={canvasRef} style={{ background: "transparent" }} />
      <button
        className="absolute top-0 right-0 font-['Minecraft'] text-[#f5c842] text-xs"
        onClick={onToggle}
        title={rotating ? "Pausar" : "Retomar"}
      >
        {rotating ? "⏸" : "▶"}
      </button>
      <button
        className="absolute top-0 left-0 font-['Minecraft'] text-white bg-red-500 text-xs mt-0.5 w-3.5 cursor-pointer"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
}

interface StatCategory {
  title: string;
  icon: string;
  items: { label: string; value: string }[];
}

function CategoryIcon({ icon }: { icon: string }) {
  if (icon.startsWith("http") || icon.startsWith("/")) {
    return <img src={icon} alt="icon" className="w-5 h-5 object-contain" />;
  }
  return <span>{icon}</span>;
}

export default function InfoSection({ player }: { player: PlayerData }) {
  const [visible, setVisible] = useState(true);
  const [rotating, setRotating] = useState(true);

  const profile =
    player.profiles?.profiles?.find((p: any) => p.selected) ??
    player.profiles?.profiles?.[0];
  const member = profile?.members?.[player.uuid.replace(/-/g, "")];

  const statCategories: StatCategory[] = [
    {
      title: "Basic Stats",
      icon: "https://ccvaults.com/assets/20.%20Blocks/24.%20Skulls/Player_Head.png",
      items: [
        { label: "Profile", value: profile?.cute_name ?? "—" },
        { label: "UUID", value: player.uuid ?? "—" },
        { label: "SkyBlock XP", value: member?.leveling?.experience ?? "—" },
      ],
    },
    {
      title: "Combat",
      icon: "https://ccvaults.com/assets/10.%20Items/1.%20Swords/Diamond_Sword.png",
      items: [
        {
          label: "Total kills",
          value: member?.player_stats?.kills?.total ?? "—",
        },
        {
          label: "Total deaths",
          value: member?.player_stats?.deaths?.total ?? "—",
        },
        {
          label: "Highest damage",
          value: member?.player_stats?.highest_damage ?? "—",
        },
      ],
    },
    {
      title: "Economy",
      icon: "https://ccvaults.com/assets/10.%20Items/11.%20Materials/Emerald.png",
      items: [
        {
          label: "Coin purse",
          value: member?.currencies?.coin_purse
            ? Math.floor(member.currencies.coin_purse).toLocaleString()
            : "—",
        },
        {
          label: "Gold earned",
          value: member?.player_stats?.auctions?.gold_earned ?? "—",
        },
      ],
    },
    {
      title: "Progression",
      icon: "https://ccvaults.com/assets/10.%20Items/2.%20Pickaxes/Diamond_Pickaxe.png",
      items: [
        {
          label: "Fairy souls",
          value: member?.fairy_soul?.total_collected ?? "—",
        },
        {
          label: "Mithril powder",
          value: member?.mining_core?.powder_mithril_total ?? "—",
        },
      ],
    },
    {
      title: "Pets",
      icon: "https://ccvaults.com/assets/10.%20Items/31.%20Spawn%20Eggs/fox_spawn_egg.png",
      items: [
        { label: "Total pets", value: member?.pets_data?.pets?.length ?? "—" },
        {
          label: "Active pet",
          value:
            member?.pets_data?.pets?.find((p: any) => p.active)?.type ?? "—",
        },
      ],
    },

    {
      title: "MINING",
      icon: "https://ccvaults.com/assets/20.%20Blocks/24.%20Skulls/Player_Head.png",
      items: [
        {
          label: "Experience",
          value: member?.skill_tree?.experience?.mining ?? "—",
        },
        {
          label: "Mining speed",
          value: member?.skill_tree?.nodes?.mining?.mining_speed ?? "—",
        },
        {
          label: "Mining fortune",
          value: member?.skill_tree?.nodes?.mining?.mining_fortune ?? "—",
        },
        {
          label: "Mountain level",
          value: member?.skill_tree?.tokens_spent?.mountain ?? "—",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-[600px] flex items-start justify-center gap-8 bg-[#1a1008] p-8 pt-12">
      {/* Stats lado esquerdo */}
      <div className="flex-1 flex flex-col gap-2">
        {statCategories.map((cat) => (
          <details key={cat.title} className="cursor-pointer w-full">
            <summary className="list-none font-['Minecraft'] text-[#f5c842] bg-amber-950 px-3 py-2 w-full hover:bg-amber-900 transition-colors flex items-center gap-2">
              <CategoryIcon icon={cat.icon} />
              {cat.title}
            </summary>
            <ul className="pl-4 mt-1 flex flex-col gap-1 font-['Minecraft'] text-[#f0e6d0] text-xs border-l border-amber-950 ml-2">
              {cat.items.map((item) => (
                <li key={item.label} className="py-0.5 flex gap-2">
                  <span className="text-[#9a7a5a]">{item.label}:</span>
                  <span className="text-[#f5c842]">{item.value}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Skin lado direito */}
      <div className="flex flex-col items-center gap-2 w-48 border border-white">
        <SkinViewer
          uuid={player.uuid}
          visible={visible}
          rotating={rotating}
          onClose={() => setVisible(false)}
          onToggle={() => setRotating((prev) => !prev)}
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
