"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CalendarPlus, Bookmark } from "lucide-react";
import { fetchWorkout } from "@/lib/api";
import { usePlan, PLAN_CAP } from "@/context/PlanContext";
import Tags from "@/components/Tags";
import Spinner from "@/components/Spinner";
import NotFound from "../../not-found";

export default function WorkoutDetail() {
  const { id } = useParams();
  const { plan, addToPlan, addToSaved } = usePlan();
  const [w, setW] = useState(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMissing(false);
    fetchWorkout(id)
      .then(setW)
      .catch(() => setMissing(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner label="Loading workout…" />;
  if (missing || !w) return <NotFound />;

  const inPlan = plan.some((p) => p.id === w.id);
  const full = !inPlan && plan.length >= PLAN_CAP;
  const specs = [
    ["Equipment", w.equipment],
    ["Difficulty", w.difficulty],
    ["Sets", w.sets],
    ["Reps", w.reps],
    ["Duration", `${w.duration} min`],
    ["Calories", `${w.caloriesBurned} kcal`],
    ["Rating", w.rating],
  ];

  return (
    <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="h-[340px] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] sm:h-[480px] lg:h-[735px]">
          <img src={w.image} alt={w.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-display text-4xl font-bold uppercase">{w.name}</h1>
            <p className="mt-3 text-neutral-400">{w.description}</p>
            <div className="mt-4"><Tags tags={w.muscleGroups} color="bg-cta" /></div>
          </div>

          <div className="rounded-xl border border-[#232834] bg-[#151922]">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-[#232834] px-5 py-3 text-sm last:border-0">
                <span className="font-semibold uppercase tracking-wide text-neutral-400">{k}</span>
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-bold uppercase tracking-wide">Instructions</h2>
            <ol className="flex flex-col gap-3">
              {w.instructions.map((s, i) => (
                <li key={i} className="flex gap-3 text-neutral-300">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta text-sm font-bold text-black">{i + 1}</span>
                  <span className="pt-0.5">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToPlan(w)}
              disabled={full}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cta px-6 text-sm font-bold uppercase text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <CalendarPlus size={16} /> {full ? "Plan is full" : "Add to today's plan"}
            </button>
            <button
              onClick={() => addToSaved(w)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#374151] px-6 text-sm font-bold uppercase hover:border-accent hover:text-accent"
            >
              <Bookmark size={16} /> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
