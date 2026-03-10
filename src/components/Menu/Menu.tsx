import { Menu, X } from "lucide-react";

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: MenuProps) {
  return (
    <div
      className="absolute right-3 cursor-pointer text-[#f5c842] hover:text-[#ffd700] transition-colors duration-200"
      onClick={onClose}
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </div>
  );
}
