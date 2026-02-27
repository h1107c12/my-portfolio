export default function Header() {
  const navItems = ["Home", "About", "Reel", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-b border-cyan-500/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* 좌측 로고 */}
        <a
          href="#home"
          className="text-2xl font-semibold text-cyan-400 logo-neon tracking-wide"
        >
          Heon
        </a>

        {/* 우측 메뉴 */}
        <nav className="flex gap-8 text-sm text-gray-200">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition-colors hover:text-cyan-300"
            >
              {item}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 bg-cyan-400/70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
