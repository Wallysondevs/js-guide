import { cn } from "@/lib/utils";

interface DifficultyBadgeProps {
  level: "iniciante" | "intermediário" | "avançado";
}

const config = {
  iniciante: { label: "Iniciante", className: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30" },
  intermediário: { label: "Intermediário", className: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" },
  avançado: { label: "Avançado", className: "bg-red-500/15 text-red-600 border-red-500/30" },
};

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const { label, className } = config[level];
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
        className
      )}
    >
      {label}
    </span>
  );
}
