"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./ui/Button";

const publicLinks = [{ href: "/#features", label: "Features" }, { href: "/#how-it-works", label: "How it works" }];
const appLinks = [{ href: "/dashboard", label: "Dashboard" }, { href: "/upload", label: "Upload" }, { href: "/report", label: "Report" }];

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const inApp = appLinks.some((l) => pathname.startsWith(l.href));
  const links = inApp ? appLinks : publicLinks;

  return (
    <header className="sticky top-0 z-20 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm text-white">R</span>
          ResumeLens
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm ${pathname === l.href ? "font-semibold text-brand-700" : "text-slate-600 hover:text-ink"}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {inApp ? <Button href="/login" variant="ghost">Sign out</Button> : (<><Button href="/login" variant="ghost">Log in</Button><Button href="/register">Get started free</Button></>)}
        </div>
        <button className="rounded-lg border border-brand-200 px-3 py-1.5 text-sm md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="space-y-1 border-t border-brand-100 bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-brand-50">{l.label}</Link>
          ))}
          <Link href={inApp ? "/login" : "/register"} onClick={() => setOpen(false)} className="block rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white">
            {inApp ? "Sign out" : "Get started free"}
          </Link>
        </div>
      )}
    </header>
  );
}
