import { useEffect, useMemo, useState } from "react";
import { Play } from "lucide-react";

type ProjectItem = {
  title: string;
  desc: string;
  tags: string[];
  time: string;
  youtubeId?: string;
  driveUrl?: string;
};

function getYouTubeId(input: string) {
  if (!input) return null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || null;
    }

    const v = url.searchParams.get("v");
    if (v) return v;

    const parts = url.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");

    if (embedIdx >= 0 && parts[embedIdx + 1]) {
      return parts[embedIdx + 1];
    }

    return null;
  } catch {
    return null;
  }
}

export default function PR() {
  const projectList: ProjectItem[] = [
    {
      title: "VEX 클랜컵",
      desc: "구단 클랜 홍보",
      tags: ["메인편집 / 서브편집"],
      time: "2:56",
      youtubeId: "lvD-m5AiY0s",
    },
    {
      title: "VEX 로스터 소개 영상",
      desc: "구단 로스터 소개",
      tags: ["메인편집 / 서브편집"],
      time: "3:26",
      youtubeId: "FVvfB32RsAM",
    },
    {
      title: "VEX 오븐마루 컨텐츠",
      desc: "스폰서 컨텐츠 영상",
      tags: ["메인편집 / 서브편집"],
      time: "16:01",
      youtubeId: "https://www.youtube.com/watch?v=TV_-0JGcNCY&t=400s",
    },
    {
      title: "VEX 오븐마루 컨텐츠 Karwn 하이라이트",
      desc: "컨텐츠 영상 하이라이트 숏폼",
      tags: ["메인편집 / 서브편집"],
      time: "1:17",
      youtubeId: "hHHpFhEkrPs",
    },
    {
      title: "VEX 오븐마루 컨텐츠 ROY 하이라이트",
      desc: "컨텐츠 영상 하이라이트 숏폼",
      tags: ["메인편집 / 서브편집"],
      time: "1:59",
      youtubeId: "QlUnEFLPbFI",
    },
    {
      title: "Vex 로스터 소개 하이라이트 숏폼",
      desc: "구단 로스터 소개",
      tags: ["메인편집 / 서브편집"],
      time: "16:01",
      youtubeId: "vo_cAE0P2ew",
    },
    {
      title: "개인 유튜브 '재뜩' 숏폼",
      desc: "배틀그라운드 콘텐츠",
      tags: ["메인편집 / 서브편집"],
      time: "0:55",
      youtubeId: "UWCkwuqF7n4",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const close = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const openProject = (project: ProjectItem) => {
    if (project.driveUrl) {
      setSelectedProject(project);
      setOpen(true);
      return;
    }

    const validId = getYouTubeId(project.youtubeId || "");
    if (!validId) return;

    setSelectedProject({
      ...project,
      youtubeId: validId,
    });
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
    if (!selectedProject) return null;

    if (selectedProject.driveUrl) {
      return selectedProject.driveUrl;
    }

    if (!selectedProject.youtubeId) return null;

    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      rel: "0",
      playsinline: "1",
      modestbranding: "1",
    });

    return `https://www.youtube.com/embed/${selectedProject.youtubeId}?${params.toString()}`;
  }, [selectedProject]);

  return (
    <section id="pr" className="py-32 text-center max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Adobe Premiere Pro
      </h2>

      <p className="text-gray-300 mb-12">프리미어 프로를 활용한 영상작업물</p>

      <div className="grid md:grid-cols-3 gap-10">
        {projectList.map((p, i) => {
          const youtubeId = p.youtubeId ? getYouTubeId(p.youtubeId) : null;
          const thumbSrc = youtubeId
            ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
            : "/images/ovenmaru-thumb.jpg";

          return (
            <button
              type="button"
              key={i}
              onClick={() => openProject(p)}
              className="bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden 
                         shadow-lg hover:shadow-cyan-400/30 transition duration-150 ease-out text-left
                         cursor-pointer group hover:-translate-y-1"
              aria-label={`${p.title} 영상 열기`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={thumbSrc}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-200 ease-out 
                             group-hover:scale-[1.04]"
                  onError={(e) => {
                    if (!youtubeId) return;
                    e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                  }}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-150 ease-out" />

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
                  {p.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 
                                 text-cyan-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}

                  <span className="px-3 py-1 bg-gray-800/40 text-gray-300 text-xs rounded-full flex items-center gap-1">
                    ⏱ {p.time}
                  </span>
                </div>

                <p className="text-gray-300 mt-1 text-sm">{p.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {open && embedSrc && selectedProject && (
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
                  title={selectedProject.title}
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