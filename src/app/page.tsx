import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { getProjects, getBlogPosts } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SceneLabel } from "@/components/scene-label";

export default function Home() {
  const projects = getProjects();
  const posts = getBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background text-foreground overflow-hidden pt-[140px] pb-[100px] lg:pt-[180px] lg:pb-[140px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 35%, rgba(188,155,106,0.08), transparent 55%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 relative">
          <SceneLabel reel="01" scene="001" />

          <div className="flex flex-col gap-10 max-w-[600px]">
            <h1 className="font-display font-normal leading-[0.92] tracking-[-0.02em] text-[72px] sm:text-[96px] lg:text-[128px]">
              Personal
              <span className="block italic text-accent font-normal">Web.</span>
            </h1>

            <div className="pt-6 mt-2 border-t border-border-subtle max-w-[460px] font-mono text-[11px] leading-[2] tracking-[0.25em] uppercase text-muted">
              开发者 · 创作者
            </div>

            <p className="font-display text-[20px] sm:text-[24px] lg:text-[28px] italic leading-[1.5] text-foreground/82 max-w-[520px]">
              用代码做有趣的事。
            </p>

            <div className="flex items-center gap-8 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-foreground transition-colors duration-300"
              >
                查看作品
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                向下浏览
                <ArrowDown size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="bg-foreground text-dark-text py-[140px] lg:py-[180px]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10 mb-20 lg:mb-24">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                  Selected Works
                </div>
                <h2 className="font-display font-normal text-[40px] lg:text-[64px] leading-[1.05] tracking-[-0.015em]">
                  代表
                  <span className="italic text-accent">作品。</span>
                </h2>
              </div>
              <p className="font-light text-[15px] leading-[1.8] text-dark-text/70 max-w-[380px]">
                精选项目展示，每个都是一次有趣的实践。
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-[auto_1fr] lg:grid-cols-[80px_1fr_180px_auto] gap-6 lg:gap-10 items-start lg:items-center py-10 lg:py-12 border-t border-dark-text/[0.18] last:border-b hover:pl-3 lg:hover:pl-6 transition-[padding] duration-500"
                >
                  <div className="font-mono text-[11px] tracking-[0.15em] text-accent pt-1 lg:pt-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display font-normal text-[28px] lg:text-[42px] leading-[1.1] tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[14px] lg:text-[15px] font-light leading-[1.7] text-dark-text/70 max-w-[520px]">
                      {project.description}
                    </p>
                  </div>
                  <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-accent leading-[1.8]">
                    <div>
                      {project.date.slice(0, 4)} ·{" "}
                      {project.type === "demo" ? "Demo" : "Link"}
                    </div>
                  </div>
                  <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-accent group-hover:text-dark-text transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-surface-warm text-dark-text py-[140px] lg:py-[160px]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10 mb-20">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                  Recent Writing
                </div>
                <h2 className="font-display font-normal text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.015em]">
                  最近
                  <span className="italic text-accent">文章。</span>
                </h2>
              </div>
              <p className="font-light text-[15px] leading-[1.8] text-dark-text/70 max-w-[380px]">
                持续输出的技术笔记和思考。
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {posts.map((post) => (
              <Reveal key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-[auto_1fr] lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-10 items-start lg:items-center py-8 lg:py-10 border-t border-dark-text/[0.15] last:border-b hover:pl-3 transition-[padding] duration-500"
                >
                  <div className="font-mono text-[11px] tracking-[0.15em] text-accent pt-1 lg:pt-0">
                    {post.date}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-normal text-[22px] lg:text-[28px] leading-[1.15] tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[14px] font-light leading-[1.7] text-dark-text/60 max-w-[520px]">
                      {post.summary}
                    </p>
                  </div>
                  <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-accent group-hover:text-dark-text transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-accent hover:text-dark-text transition-colors group"
              >
                查看全部文章
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
