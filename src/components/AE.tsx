import { useEffect, useMemo, useState } from "react";
import { Play, Clock } from "lucide-react";

type MotionItem = {
  title: string;
  desc: string;
  tags: string[];
  time: string;
  url: string;
};

function getYoutubeId(url: string) {
  if (!url) return null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;

  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.split("/").filter(Boolean)[0] || null;
    }

    const v = u.searchParams.get("v");
    if (v) return v;

    const parts = u.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");

    if (embedIdx >= 0 && parts[embedIdx + 1]) {
      return parts[embedIdx + 1];
    }

    return null;
  } catch {
    return null;
  }
}

const motionVideos: MotionItem[] = [
  {
    title: "Motion Graphic Reel",
    desc: "모션그래픽 타이포 작업을 통한 간단한 인트로 제작",
    tags: ["모션그래픽", "타이포", "트랜지션"],
    time: "0:09",
    url: "https://youtu.be/RSpmSNbh8zI",
  },
  {
    title: "VEX 로스터 소개영상 인트로",
    desc: "모션그래픽을 활용하여 만든 간단한 구단 인트로",
    tags: ["모션그래픽", "애니메이션"],
    time: "0:06",
    url: "8A1hQZsKxiA",
  },
  {
    title: "VEX 프로게임단 공식 창단",
    desc: "구단 홍보 영상",
    tags: ["모션그래픽", "타이포"],
    time: "0:48",
    url: "BlB5Ns1i-UE",
  },
  {
    title: "Simple Animation",
    desc: "모션그래픽을 활용하여 만든 간단한 방송대기화면",
    tags: ["모션그래픽", "애니메이션"],
    time: "0:20",
    url: "https://youtu.be/RcnSADNDSSk",
  },
];

export default function AE() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<MotionItem | null>(null);

  const close = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const openVideo = (video: MotionItem) => {
    const validId = getYoutubeId(video.url);
    if (!validId) return;

    setSelectedVideo(video);
    setOpen(true);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const embedSrc = useMemo(() => {
    if (!selectedVideo) return null;

    const videoId = getYoutubeId(selectedVideo.url);
    if (!videoId) return null;

    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      rel: "0",
      playsinline: "1",
      modestbranding: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [selectedVideo]);

  return (
    <section id="ae" className="py-32 text-center max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Adobe After Effects
      </h2>

      <p className="text-gray-300 mb-12">애프터 이펙트를 활용한 영상작업물</p>

      <div className="grid md:grid-cols-3 gap-10">
        {motionVideos.map((item, index) => {
          const videoId = getYoutubeId(item.url);
          const thumbSrc = videoId
            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            : "";

          return (
            <button
              type="button"
              key={index}
              onClick={() => openVideo(item)}
              className="bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden 
                         shadow-lg hover:shadow-cyan-400/30 transition duration-150 ease-out text-left
                         cursor-pointer group hover:-translate-y-1"
              aria-label={`${item.title} 영상 열기`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {videoId && (
                  <img
                    src={thumbSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-200 ease-out 
                               group-hover:scale-[1.04]"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-black/0 transition duration-150 ease-out" />

                <div
                  className="absolute inset-0 flex items-center justify-center
                             opacity-0 group-hover:opacity-100
                             transition-all duration-150 ease-out"
                >
                  <div
                    className="w-14 h-14 rounded-full bg-cyan-400/90
                               shadow-[0_0_14px_rgba(34,211,238,0.65)]
                               flex items-center justify-center
                               transition duration-150 ease-out"
                  >
                    <Play
                      className="w-7 h-7 text-black ml-[2px]"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-cyan-300 neon-text mb-1">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 
                                 text-cyan-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}

                  <span className="px-3 py-1 bg-gray-800/40 text-gray-300 text-xs rounded-full flex items-center gap-1">
                    <Clock size={12} />
                    {item.time}
                  </span>
                </div>

                <p className="text-gray-300 mt-1 text-sm">{item.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {open && embedSrc && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-black shadow-[0_0_45px_rgba(0,255,255,0.16)]">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={embedSrc}
                  title={selectedVideo.title}
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