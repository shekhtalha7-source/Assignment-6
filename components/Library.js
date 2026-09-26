"use client";
import { useEffect, useState } from "react";
import { fetchWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";
import Spinner from "./Spinner";

export default function Library() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWorkouts()
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="library" className="mx-auto mt-12 max-w-[1280px] scroll-mt-24 px-4 sm:mt-16 sm:px-6">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold uppercase">The Library</h2>
        <p className="mt-1 text-sm text-neutral-400">Twelve lifts covering every major muscle group.</p>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="py-20 text-center text-red-400">{error}. Please refresh.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w) => <WorkoutCard key={w.id} w={w} />)}
        </div>
      )}
    </section>
  );
}
