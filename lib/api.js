const BASE = "https://api.abcz.workers.dev/api/fitlog";

export async function fetchWorkouts() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Failed to load workouts");
  return res.json();
}

export async function fetchWorkout(id) {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error("Workout not found");
  const data = await res.json();
  if (!data || data.error || data.id === undefined) throw new Error("Workout not found");
  return data;
}
