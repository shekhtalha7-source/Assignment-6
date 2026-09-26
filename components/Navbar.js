"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const onHome = pathname === "/";
  const onPlan = pathname.startsWith("/my-plan");
  const onWorkout = onHome || pathname.startsWith("/workout");
  const link = (active) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
      active ? "bg-[#1a2312] text-accent" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur ${
        onHome ? "border-[#1c1f26] bg-[#0c0d10]/95" : "border-[#1b1f28] bg-[#0f1115]/95"
      }`}
    >
      <nav
        className={`mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-6 ${
          onPlan ? "h-[67px] max-w-[1232px]" : "h-20 max-w-[1280px]"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <img src="/logo.png" alt="FitLog logo" width={28} height={28} />
          <span className="hidden font-display text-xl font-bold tracking-wider min-[420px]:inline">FITLOG</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/" className={link(onWorkout)}>Workout</Link>
          <Link href="/my-plan" className={link(onPlan)}>My Plan</Link>
        </div>

        <div className="flex items-center gap-3 justify-self-end sm:gap-4">
          <Link href="/my-plan" aria-label={`Plan: ${plan.length}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
            <span className="hidden sm:inline">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" aria-label={`Saved: ${saved.length}`} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
            <span className="hidden sm:inline">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2d313b] px-1.5 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
