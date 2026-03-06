import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="w-full h-[200px] bg-amber-900 flex items-center justify-center">
      {children}
    </div>
  );
}
