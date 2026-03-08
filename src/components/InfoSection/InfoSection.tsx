import { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

interface Props {
  uuid: string;
}

function SkinViewer({ uuid }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: 200,
      height: 400,
      skin: `https://visage.surgeplay.com/skin/${uuid}`,
    });

    viewer.autoRotate = true;

    return () => viewer.dispose();
  }, [uuid]);

  return <canvas ref={canvasRef} />;
}

export default function InfoSection() {
  return (
    <div className="text-center h-[500px] flex flex-col items-center justify-center gap-6">
      <h1 className="font-['Minecraft'] text-[#f0e6d0] text-2xl">
        PLAYER NAME
      </h1>
      <button className="absolute left-0">Close</button>
      <SkinViewer uuid="a0a31a8e99944672b384ebc35669607c" />
    </div>
  );
}
