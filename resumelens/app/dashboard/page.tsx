import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TrendChart from "@/components/charts/TrendChart";
import { jobs, recent, stats, trend, user } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">Hi {user.name.split(" ")[0]}, your score is rising</h1>
          <p className="mt-1 text-sm text-slate-600">Your latest resume scored 82, up 4 points from last month.</p>
        </div>
        <Button href="/upload">Upload a resume</Button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label}>
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-1 text-3xl font-bold text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-brand-700">{s.note}</p>
          </Card>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-5">
        <Card title="Score over time" className="lg:col-span-3"><TrendChart data={trend} /></Card>
        <Card title="Top job matches" className="lg:col-span-2">
          <ul className="space-y-4">
            {jobs.map((j) => (
              <li key={j.title} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{j.title}</p>
                  <p className="truncate text-xs text-slate-500">{j.company}, {j.location}</p>
                </div>
                <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700">{j.match}%</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Recent analyses" className="mt-5">
        <ul className="divide-y divide-brand-100">
          {recent.map((r) => (
            <li key={r.file} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{r.file}</p>
                <p className="text-xs text-slate-500">{r.role}, {r.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-ink">{r.score}/100</span>
                <Link href="/report" className="text-sm font-semibold text-brand-700 hover:underline">View report</Link>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
