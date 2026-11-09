export const user = { name: "Aarav Shah" };

export const stats = [
  { label: "Resumes analyzed", value: "12", note: "3 this month" },
  { label: "Average score", value: "78", note: "+6 since August" },
  { label: "Job matches", value: "24", note: "9 above 80%" },
];

export const trend = [
  { label: "Jun", value: 58 }, { label: "Jul", value: 64 }, { label: "Aug", value: 71 },
  { label: "Sep", value: 74 }, { label: "Oct", value: 78 }, { label: "Nov", value: 82 },
];

export const recent = [
  { file: "Aarav_Shah_Resume_v4.pdf", role: "Senior Product Designer", score: 82, date: "Nov 5" },
  { file: "Aarav_Shah_Resume_v3.pdf", role: "Product Designer", score: 78, date: "Oct 18" },
  { file: "Aarav_Shah_Resume_v2.docx", role: "UX Designer", score: 71, date: "Sep 2" },
];

export const jobs = [
  { title: "Senior Product Designer", company: "Northwind Labs", location: "Remote", match: 91 },
  { title: "Lead UX Designer", company: "Brightpath", location: "Bengaluru", match: 86 },
  { title: "Product Designer, Growth", company: "Cobalt Pay", location: "Ahmedabad", match: 79 },
];

export const report = {
  file: "Aarav_Shah_Resume_v4.pdf",
  role: "Senior Product Designer",
  score: 82,
  sections: [
    { label: "Formatting", value: 90 },
    { label: "Keywords", value: 74 },
    { label: "Experience impact", value: 80 },
    { label: "Skills", value: 85 },
    { label: "Readability", value: 88 },
  ],
  matched: ["Figma", "Design systems", "User research", "Prototyping", "Accessibility"],
  missing: ["A/B testing", "Product analytics", "Stakeholder management"],
  suggestions: [
    { title: "Add numbers to your results", detail: "Only 2 of 9 bullet points include a metric. Try “Cut checkout drop-off by 18%”." },
    { title: "Include missing keywords", detail: "Roles you target mention A/B testing and product analytics. Add them where they apply." },
    { title: "Shorten your summary", detail: "Your summary runs 6 lines. Aim for 3 lines that name your role and top strength." },
  ],
};
