const IconBtn = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className="w-14 h-14 rounded-xl border border-cyan-400/25 bg-cyan-400/5 flex items-center justify-center text-cyan-300
               hover:bg-cyan-400/10 hover:border-cyan-400/45 transition neon-border-soft"
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
  >
    {children}
  </a>
);

export default function Contact() {
  return (
    <section id="contact" className="pt-40 pb-32 mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-cyan-400 neon-text text-sm mb-3">Let&apos;s Create Together</p>
        <div className="mx-auto h-[2px] w-20 bg-cyan-400/70 neon-line mb-6" />

        <p className="text-gray-300 leading-relaxed">
          영상 편집 작업 문의를 환영합니다! <br />
          함께 멋진 콘텐츠를 만들어보아요!
        </p>

        {/* icons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <IconBtn href="mailto:hello@editor.com" label="Email">
            {/* mail */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M4.5 7.5h15v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m5.2 8.1 6.3 5a1 1 0 0 0 1.2 0l6.1-5"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity=".9"
              />
            </svg>
          </IconBtn>

          <IconBtn href="https://instagram.com" label="Instagram">
            {/* instagram */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M7.5 3.8h9A3.7 3.7 0 0 1 20.2 7.5v9a3.7 3.7 0 0 1-3.7 3.7h-9A3.7 3.7 0 0 1 3.8 16.5v-9A3.7 3.7 0 0 1 7.5 3.8Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </IconBtn>

          <IconBtn href="https://youtube.com" label="YouTube">
            {/* youtube */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M20 8.2a3 3 0 0 0-2.1-2.1C16.2 5.7 12 5.7 12 5.7s-4.2 0-5.9.4A3 3 0 0 0 4 8.2a31.6 31.6 0 0 0 0 7.6 3 3 0 0 0 2.1 2.1c1.7.4 5.9.4 5.9.4s4.2 0 5.9-.4A3 3 0 0 0 20 15.8a31.6 31.6 0 0 0 0-7.6Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M10.6 9.5v5l4.4-2.5-4.4-2.5Z"
                fill="currentColor"
              />
            </svg>
          </IconBtn>

          <IconBtn href="https://github.com" label="GitHub">
            {/* github */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6c.4.1.6-.2.6-.4v-1.4c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1a3.1 3.1 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.7 4 .3.2.6.8.6 1.6v2.3c0 .2.2.5.6.4A8.5 8.5 0 0 0 12 3.5Z"
                fill="currentColor"
                opacity=".9"
              />
            </svg>
          </IconBtn>

          <IconBtn href="https://linkedin.com" label="LinkedIn">
            {/* linkedin */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M6.5 9.5V19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M6.5 6.8h0"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M10.5 19v-5.4c0-1.6.9-2.6 2.3-2.6 1.4 0 2.2 1 2.2 2.6V19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M10.5 9.5V19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity=".75"
              />
            </svg>
          </IconBtn>
        </div>

        {/* CTA button */}
        <div className="mt-14">
          <a
            href="mailto:hello@editor.com"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-cyan-400 text-black font-semibold
                       hover:bg-cyan-300 transition shadow-[0_12px_45px_rgba(34,211,238,0.28)]"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path
                d="M4.5 7.5h15v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m5.2 8.1 6.3 5a1 1 0 0 0 1.2 0l6.1-5"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity=".9"
              />
            </svg>
            작업 문의하기
          </a>
        </div>

        <div className="mt-20 text-gray-400 text-sm">
          <p>이메일: hello@editor.com</p>
          <p className="mt-2">평일 10:00 - 18:00 답변드립니다</p>
        </div>
      </div>
    </section>
  );
}
