import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import ScoreRing from "@/components/ui/ScoreRing";
import { jobs, report } from "@/lib/mock-data";

export default function ReportPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">Analysis report</h1>
          <p className="mt-1 text-sm text-slate-600">{report.file}, targeting {report.role}</p>
        </div>
        <Button href="/upload" variant="ghost">Analyze another resume</Button>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Card title="Overall score" className="flex flex-col items-center text-center">
          <ScoreRing score={report.score} />
          <p className="mt-4 text-sm text-slate-600">Strong resume. Three edits would make it stand out.</p>
        </Card>
        <Card title="Section scores" className="lg:col-span-2">
          <div className="space-y-4">{report.sections.map((s) => <ProgressBar key={s.label} {...s} />)}</div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Card title="Skills found">
          <div className="flex flex-wrap gap-2">
            {report.matched.map((s) => <span key={s} className="rounded-full bg-brand-100 px-3 py-1 text-sm text-brand-700">{s}</span>)}
          </div>
        </Card>
        <Card title="Skills to add">
          <div className="flex flex-wrap gap-2">
            {report.missing.map((s) => <span key={s} className="rounded-full border border-dashed border-brand-500 px-3 py-1 text-sm text-ink">{s}</span>)}
          </div>
        </Card>
      </div>

      <Card title="Suggested edits" className="mt-5">
        <ul className="space-y-4">
          {report.suggestions.map((s) => (
            <li key={s.title}>
              <p className="text-sm font-semibold text-ink">{s.title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{s.detail}</p>
            </li>
          ))}
        </ul>
      </Card>

      <h2 className="mb-4 mt-10 text-xl font-bold text-ink">Best job matches</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {jobs.map((j) => (
          <Card key={j.title}>
            <p className="font-semibold text-ink">{j.title}</p>
            <p className="mb-4 text-sm text-slate-500">{j.company}, {j.location}</p>
            <ProgressBar label="Match" value={j.match} />
          </Card>
        ))}
      </div>
    </div>
  );
}
