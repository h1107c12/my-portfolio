// src/components/Showreel.tsx
import { useEffect, useMemo, useState } from "react";
import { Play, X } from "lucide-react";

export default function Showreel() {
  const [open, setOpen] = useState(false);

  // ✅ 여기만 바꿔라 (유튜브 영상 ID)
  const YOUTUBE_ID = "YOUR_YOUTUBE_VIDEO_ID";

  const posterSrc =
    "https://images.unsplash.com/photo-1575320854760-bfffc3550640?auto=format&fit=crop&w=1400&q=80";

  const close = () => setOpen(false);

  // ESC로 닫기
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // 유튜브 임베드 URL (autoplay/mute는 정책 이슈 줄이려고 넣음)
  const embedSrc = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      rel: "0",
      playsinline: "1",
      modestbranding: "1",
    });
    return `https://www.youtube.com/embed/${YOUTUBE_ID}?${params.toString()}`;
  }, [YOUTUBE_ID]);

  return (
    <section
      id="reel"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#02060a]"
    >
      <div className="max-w-5xl mx-auto">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 neon-text mb-3">
            Showreel
          </h2>
          <div className="w-20 h-[2px] bg-cyan-400/60 mx-auto mb-5" />
          <p className="text-sm md:text-base text-gray-300">My Best Works 2025</p>
        </div>

        {/* 비디오 썸네일 카드 */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative group w-full text-left cursor-pointer"
          aria-label="Open showreel video"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyan-400/40 bg-black/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]">
            <img
              src={posterSrc}
              alt="Showreel 2025"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
            />

            {/* 어두운 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

            {/* 플레이 버튼 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-cyan-400/90 flex items-center justify-center group-hover:bg-cyan-400 neon-border transition-all duration-300 group-hover:scale-110">
                <Play
                  className="w-10 h-10 md:w-14 md:h-14 text-black ml-1"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* 제목/설명 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl text-white mb-2">Showreel 2025</h3>
              <p className="text-sm md:text-base text-white/80">
                2분 30초의 대표 작업물 하이라이트
              </p>
            </div>
          </div>
        </button>

        <div className="mt-6 text-center text-xs md:text-sm text-gray-400">
          Click to watch
        </div>
      </div>

      {/* 모달 */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // 배경 클릭 시 닫기 (플레이어 영역 클릭은 제외)
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-black shadow-[0_0_60px_rgba(0,255,255,0.18)]">
              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 border border-cyan-400/30 hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)] transition"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-cyan-200" />
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={embedSrc}
                  title="Showreel 2025"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs md:text-sm text-gray-400">
              ESC로 닫기 / 배경 클릭으로 닫기
            </p>
          </div>
        </div>
      )}
    </section>
  );
}