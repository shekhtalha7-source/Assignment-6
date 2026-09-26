import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl pb-16 flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-bold text-accent">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold uppercase">Page not found</h1>
      <p className="mt-2 text-neutral-400">That page skipped leg day and doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 rounded-md bg-cta px-6 py-3 font-bold uppercase text-black hover:brightness-110">
        Back to workouts
      </Link>
    </div>
  );
}
