"use client";

import { useRef, useState } from "react";
import type { DragEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function UploadBox() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  }

  function analyze() {
    setLoading(true);
    setTimeout(() => router.push("/report"), 1200); // Mock delay: no AI analysis yet.
  }

  return (
    <Card>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`rounded-xl border-2 border-dashed p-10 text-center transition ${dragging ? "border-brand-600 bg-brand-100" : "border-brand-200 bg-brand-50"}`}
      >
        <p className="text-base font-semibold text-ink">{file ? file.name : "Drag your resume here"}</p>
        <p className="mt-1 text-sm text-slate-600">{file ? `${(file.size / 1024).toFixed(0)} KB` : "PDF or DOCX, up to 5 MB"}</p>
        <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="sr-only" aria-label="Choose resume file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <Button variant="ghost" className="mt-4" onClick={() => inputRef.current?.click()}>{file ? "Choose a different file" : "Browse files"}</Button>
      </div>
      <label className="mt-6 block text-sm font-medium text-ink">Target role
        <select className="mt-1.5 w-full rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-sm font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100">
          <option>Senior Product Designer</option>
          <option>Frontend Developer</option>
          <option>Data Analyst</option>
          <option>Product Manager</option>
        </select>
      </label>
      <Button className="mt-6 w-full sm:w-auto" disabled={!file || loading} onClick={analyze}>{loading ? "Analyzing…" : "Analyze resume"}</Button>
    </Card>
  );
}
