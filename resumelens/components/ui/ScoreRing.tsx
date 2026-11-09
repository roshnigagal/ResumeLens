export default function ScoreRing({ score, size = 140 }: { score: number; size?: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" role="img" aria-label={`Score ${score} out of 100`}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="#e2efff" strokeWidth="10" />
        <circle cx="60" cy="60" r={r} fill="none" stroke="#2272d9" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-3xl font-bold text-ink">{score}</div>
          <div className="text-xs text-slate-500">out of 100</div>
        </div>
      </div>
    </div>
  );
}
