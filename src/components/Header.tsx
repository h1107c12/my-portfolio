import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-cyan-500/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* 로고 */}
        <a
          href="#home"
          className="text-2xl font-semibold tracking-wide text-cyan-400 logo-neon"
          onClick={() => setMenuOpen(false)}
        >
          Heon
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative transition-colors hover:text-cyan-300"
            >
              {item}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 bg-cyan-400/70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-400/30 text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={`overflow-hidden border-t border-cyan-500/10 bg-black/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-lg px-3 py-3 text-sm text-gray-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}