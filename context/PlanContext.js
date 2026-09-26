"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);
export const PLAN_CAP = 5;
const KEY = "fitlog-state-v1";

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [ready, setReady] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const s = JSON.parse(raw);
        setPlan(s.plan || []);
        setSaved(s.saved || []);
        setDone(s.done || []);
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ plan, saved, done }));
    } catch {}
  }, [plan, saved, done, ready]);

  const toast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  const addToPlan = (w) => {
    if (plan.some((p) => p.id === w.id)) return toast(`${w.name} is already in today's plan`, "info");
    if (plan.length >= PLAN_CAP) return toast(`Plan is full (${PLAN_CAP} lifts max)`, "error");
    setPlan([...plan, w]);
    toast(`Added ${w.name} to today's plan`);
  };
  const addToSaved = (w) => {
    if (saved.some((p) => p.id === w.id)) return toast(`${w.name} is already saved`, "info");
    setSaved([...saved, w]);
    toast(`Saved ${w.name} for later`);
  };
  const removeFromPlan = (w) => {
    setPlan(plan.filter((p) => p.id !== w.id));
    setDone(done.filter((d) => d !== w.id));
    toast(`Removed ${w.name} from today's plan`, "info");
  };
  const removeFromSaved = (w) => {
    setSaved(saved.filter((p) => p.id !== w.id));
    toast(`Removed ${w.name} from saved`, "info");
  };
  const markDone = (w) => {
    if (done.includes(w.id)) return toast(`${w.name} is already done`, "info");
    setDone([...done, w.id]);
    toast(`Marked ${w.name} as done`);
  };

  return (
    <PlanContext.Provider
      value={{ plan, saved, done, ready, addToPlan, addToSaved, removeFromPlan, removeFromSaved, markDone }}
    >
      {children}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 flex flex-col gap-2 items-end pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast-in pointer-events-auto rounded-lg border px-4 py-3 text-sm font-medium shadow-lg bg-card ${
              t.type === "success"
                ? "border-accent text-accent"
                : t.type === "error"
                ? "border-red-500 text-red-400"
                : "border-line text-white"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);
