import { Clock, Flame, Star } from "lucide-react";

export default function Stats({ w }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-300">
      <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent" />{w.duration} min</span>
      <span className="flex items-center gap-1.5"><Flame size={14} className="text-accent" />{w.caloriesBurned} kcal</span>
      <span className="flex items-center gap-1.5"><Star size={14} className="text-accent" />{w.rating}</span>
    </div>
  );
}
