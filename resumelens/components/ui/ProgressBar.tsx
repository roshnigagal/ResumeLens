export default function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-ink">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-brand-100" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-brand-600" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
