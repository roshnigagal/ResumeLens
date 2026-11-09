export default function TrendChart({ data }: { data: { label: string; value: number }[] }) {
  return (
    <div className="flex h-44 items-end gap-3" role="img" aria-label="Resume score by month">
      {data.map((d, i) => (
        <div key={d.label} className="flex h-full flex-1 flex-col justify-end text-center">
          <span className="mb-1 text-xs font-semibold text-ink">{d.value}</span>
          <div className={`rounded-t-md ${i === data.length - 1 ? "bg-brand-600" : "bg-brand-200"}`} style={{ height: `${d.value}%` }} />
          <span className="mt-2 text-xs text-slate-500">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
