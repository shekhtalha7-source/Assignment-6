"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onPlan = pathname.startsWith("/my-plan");
  return (
    <footer className={`border-t ${onHome ? "border-[#1a1d24] bg-[#090a0d] py-10" : "border-[#1b1f28] bg-[#0f1115] py-6"}`}>
      <div
        className={`mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-neutral-400 sm:flex-row sm:px-6 ${
          onPlan ? "max-w-[1232px]" : "max-w-[1280px]"
        }`}
      >
        <div className="flex items-center gap-2 text-white">
          <img src="/logo.png" alt="" width={20} height={20} />
          <span className="font-display text-base font-bold tracking-wider">FITLOG</span>
        </div>
        <p className="text-center text-xs sm:text-right">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
