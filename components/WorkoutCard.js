import Link from "next/link";
import Tags from "./Tags";
import Stats from "./Stats";

export default function WorkoutCard({ w }) {
  return (
    <Link
      href={`/workout/${w.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] transition hover:-translate-y-1 hover:border-accent"
    >
      <div className="h-48 overflow-hidden bg-black">
        <img src={w.image} alt={w.name} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Tags tags={w.muscleGroups} />
        <h3 className="mt-1 font-display text-xl font-bold uppercase leading-9">{w.name}</h3>
        <p className="text-xs text-neutral-400">{w.equipment}</p>
        <div className="mt-auto pt-4">
          <div className="border-t border-[#222630] pt-3"><Stats w={w} /></div>
        </div>
      </div>
    </Link>
  );
}
