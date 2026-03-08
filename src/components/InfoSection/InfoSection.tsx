import { useEffect, useRef, useState } from "react";
import * as skinview3d from "skinview3d";

interface Props {
  uuid: string;
}

function SkinViewer({ uuid }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<skinview3d.SkinViewer | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    viewerRef.current = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: 200,
      height: 400,
      skin: `https://visage.surgeplay.com/skin/${uuid}`,
    });

    viewerRef.current.autoRotate = true;

    return () => viewerRef.current?.dispose();
  }, [uuid]);

  // Pausa ou retoma a rotação
  function handleToggle() {
    if (!viewerRef.current) return;
    viewerRef.current.autoRotate = !viewerRef.current.autoRotate;
  }

  // Fecha e esconde o viewer
  function handleClose() {
    viewerRef.current?.dispose();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative">
      <canvas ref={canvasRef} />
      <button
        className="absolute top-0 right-0 font-['Minecraft'] text-[#f5c842] text-xs"
        onClick={handleToggle}
      >
        ⏸
      </button>
      <button
        className="absolute top-0 left-0 font-['Minecraft'] text-red-400 text-xs"
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
}

export default function InfoSection() {
  return (
    <div className="text-center h-[500px] flex flex-row items-center justify-center gap-6">
      <h1 className="font-['Minecraft'] text-[#f0e6d0] text-2xl">
        PLAYER NAME
      </h1>
      <p>Minigame: SkyBlock</p>
      <SkinViewer uuid="a0a31a8e99944672b384ebc35669607c" />
    </div>
  );
}
