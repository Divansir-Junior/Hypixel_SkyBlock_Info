import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div
      className="w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://ccvaults.com/textures/dark_oak_planks.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "64px 64px",
        imageRendering: "pixelated",
      }}
    >
      {children}
    </div>
  );
}
