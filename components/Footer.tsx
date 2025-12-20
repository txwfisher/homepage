"use client";

import config from "@/config/site.config";

const currentYear = new Date().getFullYear();
const startYear = config.startYear;
const copyrightText =
  currentYear > startYear ? `${startYear} – ${currentYear}` : `${startYear}`;

export default function Footer() {
  return (
    <footer className="animate-fade-in-up grid grid-flow-col place-content-center gap-x-3">
      <time dateTime={currentYear.toString()}>&copy; {copyrightText}</time>
      <span className="text-author font-bold">{config.author}</span>
    </footer>
  );
}
