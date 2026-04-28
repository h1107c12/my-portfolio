const tools = [
  { label: "PR", href: "#pr", name: "Premiere Pro" },
  { label: "AE", href: "#ae", name: "After Effects" },
  { label: "PS", href: "#ps", name: "Photoshop" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mb-10">
        <span
          className="inline-flex items-center rounded-full border border-cyan-400/60
                    bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-300
                    badge-neon tracking-wide"
        >
          Content Creator &amp; Video Editor
        </span>
      </div>

      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold neon-text text-cyan-300 leading-tight">
        Heon
      </h1>

      <p className="relative z-10 mt-6 text-gray-300 max-w-2xl mx-auto">
        영상 제작을 기반으로 브랜드와 콘텐츠를 만드는 크리에이터
      </p>

      <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-5">
        {tools.map((tool) => (
          <a
            key={tool.label}
            href={tool.href}
            aria-label={`${tool.name} 섹션으로 이동`}
            className="group w-24 h-24 rounded-2xl border border-cyan-400/35
                       bg-black/50 flex flex-col items-center justify-center
                       hover:border-cyan-300 hover:bg-cyan-400/10
                       hover:-translate-y-2 transition duration-150 ease-out
                       shadow-[0_0_14px_rgba(34,211,238,0.12)]
                       hover:shadow-[0_0_22px_rgba(34,211,238,0.32)]"
          >
            <span className="text-3xl font-black text-cyan-300 neon-text leading-none">
              {tool.label}
            </span>
            <span className="mt-2 text-[11px] text-gray-400 group-hover:text-cyan-200 transition duration-150">
              {tool.name}
            </span>
          </a>
        ))}
      </div>

      <div className="relative z-10 mt-10 flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition duration-150 shadow-[0_0_16px_rgba(34,211,238,0.12)]"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}