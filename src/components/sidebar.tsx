"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "文章", href: "/blog" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 w-[200px] h-screen flex-col justify-between p-12 border-r border-border-subtle z-10">
        <div>
          <Link
            href="/"
            className="block font-display text-[20px] font-normal tracking-[0.02em] mb-12 hover:text-accent transition-colors"
          >
            Zhang · Jc
          </Link>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[11px] font-normal tracking-[0.15em] uppercase py-2 transition-colors ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive(item.href) && (
                  <span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-3 bg-accent rounded-[2px]" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-[10px] text-muted tracking-[0.1em]">
          Built with Next.js
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-background/95 backdrop-blur">
        <Link
          href="/"
          className="font-display text-[18px] font-normal tracking-[0.02em]"
        >
          Zhang · Jc
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="打开菜单"
          className="text-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed top-[52px] left-0 right-0 z-40 bg-background border-b border-border-subtle px-6 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
