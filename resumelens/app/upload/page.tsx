import UploadBox from "@/components/UploadBox";

export default function UploadPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-ink">Upload your resume</h1>
      <p className="mb-6 mt-1 text-sm text-slate-600">Choose a file and a target role. You will get a report in a few seconds.</p>
      <UploadBox />
    </div>
  );
}
