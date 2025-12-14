// src/components/Showreel.tsx
import { Play } from "lucide-react";

export default function Showreel() {
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
          <p className="text-sm md:text-base text-gray-300">
            My Best Works 2024
          </p>
        </div>

        {/* 비디오 썸네일 카드 */}
        <div className="relative group cursor-pointer">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyan-400/40 bg-black/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?auto=format&fit=crop&w=1400&q=80"
              alt="Showreel 2024"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
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
              <h3 className="text-xl md:text-2xl text-white mb-2">
                Showreel 2024
              </h3>
              <p className="text-sm md:text-base text-white/80">
                2분 30초의 대표 작업물 하이라이트
              </p>
            </div>
          </div>
        </div>

        {/* 하단 설명 */}
        <div className="mt-6 text-center text-xs md:text-sm text-gray-400">
          Click to watch
        </div>
      </div>
    </section>
  );
}
