import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import ScoreRing from "@/components/ui/ScoreRing";
import { report } from "@/lib/mock-data";

const features = [
  { title: "Resume score", text: "Get a 0 to 100 score with a breakdown of formatting, keywords, impact and readability." },
  { title: "Keyword gaps", text: "See which skills recruiters look for in your target role and which ones your resume misses." },
  { title: "Job matching", text: "Compare your resume with open roles and start with the ones that fit best." },
];

const steps = [
  { title: "Upload your resume", text: "Add a PDF or DOCX and choose the role you want." },
  { title: "Review your report", text: "Read your score, skill gaps and suggested edits." },
  { title: "Apply with confidence", text: "Update your resume, then open the roles that match." },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">Know how your resume reads before a recruiter does.</h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">Upload your resume, get a scored report with clear fixes, and see which open roles fit you best.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/register">Analyze my resume</Button>
              <Button href="/report" variant="ghost">See a sample report</Button>
            </div>
          </div>
          <Card className="mx-auto w-full max-w-md !p-6 shadow-lg shadow-brand-100">
            <div className="flex items-center gap-5">
              <ScoreRing score={report.score} size={120} />
              <div>
                <p className="text-sm text-slate-500">Sample report</p>
                <p className="font-semibold text-ink">{report.role}</p>
                <p className="mt-1 text-sm text-brand-700">3 fixes could add about 8 points</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {report.sections.slice(0, 3).map((s) => <ProgressBar key={s.label} {...s} />)}
            </div>
          </Card>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">Everything you need to improve one resume</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <h3 className="font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">How it works</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-brand-100 bg-white p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10"><Button href="/register">Create a free account</Button></div>
        </div>
      </section>
    </>
  );
}
