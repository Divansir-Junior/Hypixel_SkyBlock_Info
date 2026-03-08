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
      width: 200,
      height: 400,
      skin: `https://visage.surgeplay.com/skin/${uuid}`,
    });

    viewerRef.current.autoRotate = true;

    return () => viewerRef.current?.dispose();
  }, [uuid, visible]);

  if (!visible) return null;

  return (
    <div className="relative">
      <canvas ref={canvasRef} />
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

export default function InfoSection() {
  const [visible, setVisible] = useState(true);
  const [rotating, setRotating] = useState(true);

  return (
    <div className="text-center h-[500px] flex flex-row items-center justify-center gap-6">
      <h1 className="font-['Minecraft'] text-[#f0e6d0] text-2xl">
        PLAYER NAME
      </h1>
      <p>Minigame: SkyBlock</p>
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
  );
}
