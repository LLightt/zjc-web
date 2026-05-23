import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <section className="px-10 md:px-20 min-h-screen flex items-center">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center max-w-[1100px]">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              AI Native Creator
            </div>
            <h1 className="font-display font-light text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.03em] mb-8">
              Zhang
              <em className="text-accent italic"> · </em>
              Jc
            </h1>
            <p className="text-[15px] text-muted leading-[1.8] max-w-[360px] mb-6">
              一个喜欢折腾的开发者。对 AI、前端和创意编程感兴趣，尝试构建一些有趣的小工具和实验项目。
            </p>
            <a
              href="https://github.com/LLightt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border-subtle text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-accent hover:text-accent transition-all duration-300 rounded-[2px]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              GitHub
            </a>
          </div>
          <div className="aspect-[4/5] bg-surface border border-border-subtle rounded-[2px] flex items-center justify-center">
            <span className="text-[11px] tracking-[0.15em] uppercase text-muted">
              Photo
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
