"use client";
import { scrollToSection } from "@/lib/utils";

export default function Button({
  content,
  className,
}: Readonly<{
  content: React.ReactNode;
  className: string;
}>) {
  return (
    <button onClick={() => scrollToSection("booking")} className={className}>
      {content}
    </button>
  );
}
