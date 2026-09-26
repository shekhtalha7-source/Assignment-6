export default function Tags({ tags, color = "bg-accent" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className={`rounded-full ${color} px-2.5 py-0.5 text-[11px] font-bold uppercase leading-4 tracking-wide text-black`}>
          {t}
        </span>
      ))}
    </div>
  );
}
