import { useEffect, useState } from "react";

const tools = [
  { label: "PR", id: "pr", name: "Premiere Pro" },
  { label: "AE", id: "ae", name: "After Effects" },
  { label: "PS", id: "ps", name: "Photoshop" },
];

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showResumeGuide, setShowResumeGuide] = useState(false);

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
  };

  const openResume = () => {
    setIsResumeOpen(true);
    setShowResumeGuide(true);
  };

  const closeResume = () => {
    setIsResumeOpen(false);
    setShowResumeGuide(false);
  };

  useEffect(() => {
    if (!showResumeGuide) return;

    const timer = setTimeout(() => {
      setShowResumeGuide(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [showResumeGuide]);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />
        </div>

        <div className="relative z-10 mb-10">
          <span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-300 badge-neon tracking-wide">
            Content Creator &amp; Video Editor
          </span>
        </div>

        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold neon-text text-cyan-300 leading-tight">
          Heon
        </h1>

        <p className="relative z-10 mt-6 text-gray-300 max-w-[320px] md:max-w-2xl mx-auto break-keep md:break-normal leading-relaxed">
          영상 제작을 기반으로 브랜드와 콘텐츠를 만드는 크리에이터
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-5">
          {tools.map((tool) => (
            <button
              key={tool.label}
              type="button"
              onClick={() => moveToSection(tool.id)}
              aria-label={`${tool.name} 섹션으로 이동`}
              className="group w-24 h-24 rounded-2xl border border-cyan-400/35 bg-black/50 flex flex-col items-center justify-center hover:border-cyan-300 hover:bg-cyan-400/10 hover:-translate-y-2 transition duration-150 ease-out shadow-[0_0_14px_rgba(34,211,238,0.12)] hover:shadow-[0_0_22px_rgba(34,211,238,0.32)]"
            >
              <span className="text-3xl font-black text-cyan-300 neon-text leading-none">
                {tool.label}
              </span>
              <span className="mt-2 text-[11px] text-gray-400 group-hover:text-cyan-200 transition duration-150">
                {tool.name}
              </span>
            </button>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={openResume}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition duration-150 shadow-[0_0_16px_rgba(34,211,238,0.12)]"
          >
            이력서 열람
          </button>

          <button
            type="button"
            onClick={() => moveToSection("contact")}
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition duration-150 shadow-[0_0_16px_rgba(34,211,238,0.12)]"
          >
            Contact Me
          </button>
        </div>
      </section>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={closeResume}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-cyan-400/40 bg-black/90 p-4 shadow-[0_0_40px_rgba(34,211,238,0.25)] animate-resumeOpen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Resume Preview</p>
                <h2 className="text-xl font-bold text-white">이력서 열람</h2>
              </div>

              <button
                type="button"
                onClick={closeResume}
                className="w-9 h-9 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
              >
                ×
              </button>
            </div>

            <div className="relative rounded-xl bg-white">
              <div className="max-h-[72vh] overflow-y-auto rounded-xl">
                <img
                  src="/images/resume.png"
                  alt="이력서"
                  className={`w-full transition duration-700 ${
                    showResumeGuide ? "brightness-[0.35]" : "brightness-100"
                  }`}
                />
              </div>

              <div
                className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center transition duration-700 ${
                  showResumeGuide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-cyan-300/90 bg-black/85 px-10 py-6 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.55)] backdrop-blur-md">
                  <span className="block text-lg md:text-2xl font-black tracking-[0.32em] neon-text">
                    VIEW MORE
                  </span>

                  <div className="mx-auto mt-5 h-12 w-7 rounded-full border-2 border-cyan-300/80 flex justify-center shadow-[0_0_18px_rgba(34,211,238,0.45)]">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-200 animate-scrollDot shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
  <a
    href="/images/resume.png"
    download="최재헌_이력서.png"
    className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
  >
    이력서 다운로드
  </a>
</div>
          </div>
        </div>
      )}
    </>
  );
}