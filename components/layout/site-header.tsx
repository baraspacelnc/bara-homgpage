"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { SiteLogo } from "@/components/layout/site-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 최상단에서는 배경을 비워 히어로 그라데이션이 그대로 이어지게 하고,
  // 스크롤을 내리면 본문과 겹치므로 불투명 배경으로 전환한다.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴가 열린 상태에서는 항상 불투명해야 항목이 읽힌다
  const solid = scrolled || open;

  // "/" 는 정확히 일치할 때만, 나머지는 하위 경로까지 활성 처리
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        solid
          ? "border-border/70 bg-background/85 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="바라스페이스 홈">
          <SiteLogo priority className="h-6 sm:h-7" />
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => {
            return item.outLink ? (
              <a
                target="_blank"
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "t-ui -my-2 py-2.5 transition-colors hover:text-brand-ink",
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  // 브랜드 원색은 흰 배경에서 2.16:1 이라 글씨로 못 쓴다.
                  // py 로 탭 타깃 높이를 확보한다(글자 높이만으로는 23px)
                  "t-ui -my-2 py-2.5 transition-colors hover:text-brand-ink",
                  isActive(item.href)
                    ? "font-semibold text-brand-ink"
                    : "font-medium text-foreground/80",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-md text-foreground/80 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background md:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2 lg:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "t-ui block py-3.5 transition-colors",
                    isActive(item.href)
                      ? "font-semibold text-brand-ink"
                      : "font-medium text-foreground/80",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
