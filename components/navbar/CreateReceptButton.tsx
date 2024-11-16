"use client";
import { Pen } from "lucide-react";

const ReceptButton = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="group relative uppercase inline-flex h-8 gap-2.5 rounded-xl items-center bg-dark justify-center overflow-hidden px-3 text-base tracking-tight font-medium text-background transition-all duration-300 hover:opacity-75 hover:ring-offset-2 active:ring-2 active:ring-neutral-800 ring-[#4640DE] ring-opacity-15"
    >
      <Pen className="h-4 w-4 transition duration-300 delay-100 group-hover:rotate-[360deg]" />
      Sukurti
    </button>
  );
};

export default ReceptButton;
