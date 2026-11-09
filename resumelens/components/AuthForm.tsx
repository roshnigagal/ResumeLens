"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const isLogin = mode === "login";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/dashboard"); // Mock only: no authentication yet.
  }

  const input = "w-full rounded-lg border border-brand-200 px-3 py-2.5 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

  return (
    <div className="grid flex-1 place-items-center bg-brand-50 px-4 py-12">
      <Card className="w-full max-w-md !p-8">
        <h1 className="text-2xl font-bold text-ink">{isLogin ? "Welcome back" : "Create your account"}</h1>
        <p className="mt-1 text-sm text-slate-600">{isLogin ? "Log in to see your resume reports." : "Start with a free resume analysis."}</p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {!isLogin && (
            <label className="block text-sm font-medium text-ink">Full name
              <input required type="text" autoComplete="name" className={`${input} mt-1.5 font-normal`} />
            </label>
          )}
          <label className="block text-sm font-medium text-ink">Email
            <input required type="email" autoComplete="email" className={`${input} mt-1.5 font-normal`} />
          </label>
          <label className="block text-sm font-medium text-ink">Password
            <input required type="password" minLength={8} autoComplete={isLogin ? "current-password" : "new-password"} className={`${input} mt-1.5 font-normal`} />
          </label>
          <Button type="submit" className="w-full">{isLogin ? "Log in" : "Create account"}</Button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          {isLogin ? "New to ResumeLens? " : "Already have an account? "}
          <Link href={isLogin ? "/register" : "/login"} className="font-semibold text-brand-700 hover:underline">{isLogin ? "Create an account" : "Log in"}</Link>
        </p>
      </Card>
    </div>
  );
}
