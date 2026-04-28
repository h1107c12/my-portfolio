import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "PR", id: "pr" },
  { name: "AE", id: "ae" },
  { name: "PS", id: "ps" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const checkLine = window.innerHeight * 0.35;
      let currentId = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.getBoundingClientRect().top;

        if (top <= checkLine) {
          currentId = item.id;
        }
      }

      setActiveId(currentId);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const moveToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 74;
    const targetY =
      section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setActiveId(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-cyan-500/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => moveToSection("home")}
          className="text-2xl font-semibold tracking-wide text-cyan-400 logo-neon"
        >
          Heon
        </button>

        <nav className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
          {navItems.map((item) => {
            const active = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => moveToSection(item.id)}
                className={`group relative transition-colors ${
                  active ? "text-cyan-300" : "hover:text-cyan-300"
                }`}
              >
                {item.name}
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-center bg-cyan-400/70 transition-transform duration-150 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>

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

      <div
        className={`overflow-hidden border-t border-cyan-500/10 bg-black/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => moveToSection(item.id)}
              className={`rounded-lg px-3 py-3 text-left text-sm transition ${
                activeId === item.id
                  ? "bg-cyan-400/10 text-cyan-300"
                  : "text-gray-200 hover:bg-cyan-400/10 hover:text-cyan-300"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}