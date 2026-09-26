import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6">
      <div className="grid items-center gap-8 rounded-2xl border border-[#222630] bg-[#15171d] px-6 py-10 md:min-h-[448px] md:grid-cols-[1fr_334px] md:px-14">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Workout Library</p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-[56px]">
            Train with intent. Log every set.
          </h1>
          <p className="mt-6 max-w-[482px] text-sm leading-6 text-neutral-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex h-10 items-center gap-2 rounded-md bg-accent px-6 text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-110"
          >
            Browse Workouts <ArrowDown size={16} />
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/banner.png"
            alt="FitLog hero"
            className="aspect-square w-full max-w-[334px] rounded-xl border border-[#222630] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
