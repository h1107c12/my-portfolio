import { useEffect, useMemo, useState } from "react";

type PSImage = {
  title: string;
  image: string;
};

type PSProject = {
  title: string;
  desc: string;
  tags: string[];
  cover: string;
  images: PSImage[];
};

function SmartImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      draggable={false}
      className={className}
    />
  );
}

export default function PS() {
  const psProjects: PSProject[] = useMemo(
    () => [
      {
        title: "브랜딩 디자인",
        desc: "팀 아이덴티티를 기반으로 한 브랜딩 및 비주얼 확장 디자인",
        tags: ["유니폼", "비주얼 디자인"],
        cover: "/images/ps/branding/cover.png",
        images: [
          { title: "VEX 유니폼 저지 앞", image: "/images/ps/branding/ps1.png" },
          { title: "VEX 유니폼 저지 뒤", image: "/images/ps/branding/ps2.png" },
          { title: "VEX 유니폼 앞", image: "/images/ps/branding/ps3.png" },
          { title: "VEX 유니폼 뒤", image: "/images/ps/branding/ps4.png" },
          {
            title: "VEX 로고 비주얼 스타일 확장 1",
            image: "/images/ps/branding/ps5.png",
          },
          {
            title: "VEX 로고 비주얼 스타일 확장 2",
            image: "/images/ps/branding/ps6.png",
          },
        ],
      },
      {
        title: "스폰서 & 협업 디자인",
        desc: "스폰서 협업 및 브랜드 노출을 위한 홍보 디자인",
        tags: ["스폰서 포스터", "콘텐츠"],
        cover: "/images/ps/sponsor/cover.png",
        images: [
          { title: "ADATA x VEX", image: "/images/ps/sponsor/ps1.png" },
          { title: "GIGABYTE BATTLE G x VEX", image: "/images/ps/sponsor/ps2.png" },
          { title: "BATTLE G x VEX", image: "/images/ps/sponsor/ps3.png" },
          { title: "GIGABYTE x VEX", image: "/images/ps/sponsor/ps4.png" },
          { title: "하루펫약선 x VEX", image: "/images/ps/sponsor/ps5.png" },
          { title: "PLAYMALL x VEX", image: "/images/ps/sponsor/ps6.png" },
          { title: "ENP GAMES x VEX", image: "/images/ps/sponsor/ps7.png" },
          { title: "vaxee x VEX", image: "/images/ps/sponsor/ps8.png" },
          { title: "twire.gg x VEX", image: "/images/ps/sponsor/ps9.png" },
        ],
      },
      {
        title: "콘텐츠 썸네일",
        desc: "클릭 유도를 위한 콘텐츠 썸네일 디자인",
        tags: ["유튜브 썸네일"],
        cover: "/images/ps/thumbnail/cover.png",
        images: [
          {
            title: "유튜브 썸네일 - 오븐마루 컨텐츠 1",
            image: "/images/ps/thumbnail/ps1.png",
          },
          {
            title: "유튜브 썸네일 - 오븐마루 컨텐츠 2",
            image: "/images/ps/thumbnail/ps2.png",
          },
          {
            title: "유튜브 썸네일 - VEX 공식창단홍보",
            image: "/images/ps/thumbnail/ps3.png",
          },
          {
            title: "유튜브 썸네일 - VEX 클랜컵 홍보",
            image: "/images/ps/thumbnail/ps4.png",
          },
        ],
      },
      {
        title: "SNS 마케팅 디자인",
        desc: "SNS 채널 운영을 위한 마케팅 이미지 디자인",
        tags: ["SNS", "비주얼"],
        cover: "/images/ps/SNS/cover.png",
        images: [
          { title: "WELCOME 2STEB4N", image: "/images/ps/SNS/ps1.png" },
          { title: "WELCOME ROY", image: "/images/ps/SNS/ps2.png" },
          { title: "WELCOME Nyeong", image: "/images/ps/SNS/ps3.png" },
          { title: "WELCOME Karwn", image: "/images/ps/SNS/ps4.png" },
          { title: "WELCOME Lure", image: "/images/ps/SNS/ps5.png" },
          { title: "WELCOME Forward", image: "/images/ps/SNS/ps6.png" },
          { title: "WELCOME Beom", image: "/images/ps/SNS/ps7.png" },
          { title: "유니폼 판매 홍보 포스터", image: "/images/ps/SNS/ps8.png" },
          { title: "VEX PWS 참가 홍보 포스터", image: "/images/ps/SNS/ps9.png" },
          { title: "VEX 스크림 참가 홍보 포스터", image: "/images/ps/SNS/ps10.png" },
        ],
      },
      {
        title: "모집 & 정보 전달 디자인",
        desc: "정보 전달 중심의 타이포그래피 기반 포스터 디자인",
        tags: ["타이포그래피", "디자인"],
        cover: "/images/ps/typo/cover.png",
        images: [
          {
            title: "VEX 강사진 채용 공고 포스터",
            image: "/images/ps/typo/ps1.png",
          },
          {
            title: "VEX 촬영PD 채용 공고 포스터",
            image: "/images/ps/typo/ps2.png",
          },
          {
            title: "VEX 영상편집자 & SNS 디자이너 채용 공고 포스터",
            image: "/images/ps/typo/ps3.png",
          },
          {
            title: "VEX 아카데미 홍보 포스터 1",
            image: "/images/ps/typo/ps4.png",
          },
          {
            title: "VEX 아카데미 홍보 포스터 2",
            image: "/images/ps/typo/ps5.png",
          },
        ],
      },
      {
        title: "배너 & 월페이퍼",
        desc: "스트리밍 및 개인 사용을 위한 배너 및 배경화면 디자인",
        tags: ["배너", "디자인"],
        cover: "/images/ps/banner/cover.png",
        images: [
          { title: "선수 개인 방송 배너 1", image: "/images/ps/banner/ps1.png" },
          { title: "선수 개인 방송 배너 2", image: "/images/ps/banner/ps2.png" },
          { title: "선수 개인 방송 배너 3", image: "/images/ps/banner/ps3.png" },
          { title: "선수 개인 바탕화면", image: "/images/ps/banner/ps4.png" },
        ],
      },
    ],
    [],
  );

  const [selectedProject, setSelectedProject] = useState<PSProject | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    const urls = psProjects.flatMap((project) => [
      project.cover,
      ...project.images.map((item) => item.image),
    ]);

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [psProjects]);

  const card =
    "mb-10 w-full break-inside-avoid overflow-hidden rounded-xl border border-cyan-400/20 bg-black/30 text-left shadow-lg transition duration-150 ease-out hover:-translate-y-1 hover:shadow-cyan-400/30";

  const imageClass =
    "block w-full max-h-[260px] object-contain mx-auto transition-transform duration-200 ease-out group-hover:scale-[1.03]";

  return (
    <section
      id="ps"
      className="scroll-mt-24 py-32 text-center max-w-7xl mx-auto px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Adobe Photoshop
      </h2>

      <p className="text-gray-300 mb-12">포토샵을 활용한 디자인 작업물</p>

      <div className="relative">
        <div
          className={`transition-all duration-300 ease-out ${
            selectedProject
              ? "pointer-events-none absolute inset-x-0 top-0 opacity-0 translate-y-4"
              : "relative opacity-100 translate-y-0"
          }`}
        >
          <div className="columns-1 md:columns-3 gap-10">
            {psProjects.map((project) => (
              <button
                type="button"
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={`${card} group cursor-pointer`}
              >
                <div className="relative flex w-full items-center justify-center overflow-hidden bg-black p-3">
                  <SmartImage
                    src={project.cover}
                    alt={project.title}
                    className={imageClass}
                  />

                  {project.images.length > 1 && (
                    <div
                      className="absolute bottom-3 right-3 rounded-full border border-cyan-400/30
                      bg-black/70 px-3 py-1 text-xs text-cyan-300 backdrop-blur-sm"
                    >
                      +{project.images.length}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold text-cyan-300 neon-text">
                    {project.title}
                  </h3>

                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-300">{project.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-out ${
            selectedProject
              ? "relative opacity-100 translate-y-0"
              : "pointer-events-none absolute inset-x-0 top-0 opacity-0 translate-y-4"
          }`}
        >
          {selectedProject && (
            <>
              <div className="mb-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-cyan-400/30 px-4 py-2 text-cyan-300 transition duration-150 hover:bg-cyan-400/10"
                >
                  ← 폴더 목록
                </button>

                <h3 className="text-2xl font-bold text-cyan-300 neon-text">
                  {selectedProject.title}
                </h3>

                <div className="w-[92px]" />
              </div>

              <div className="columns-1 md:columns-3 gap-10">
                {selectedProject.images.map((item) => (
                  <button
                    type="button"
                    key={item.image}
                    onClick={() => setSelectedImage(item.image)}
                    className={`${card} group cursor-pointer`}
                  >
                    <div className="flex w-full items-center justify-center bg-black p-3">
                      <SmartImage
                        src={item.image}
                        alt={item.title}
                        className={imageClass}
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-cyan-300">{item.title}</h4>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="포토샵 작업물"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}