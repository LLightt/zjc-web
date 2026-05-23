import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SceneLabel } from "@/components/scene-label";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="bg-background text-foreground pt-[140px] pb-[160px] lg:pt-[180px] lg:pb-[200px]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        <SceneLabel reel="02" scene="001" />

        <Reveal>
          <div className="mb-20 lg:mb-24">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
              All Projects
            </div>
            <h1 className="font-display font-normal text-[40px] lg:text-[64px] leading-[1.05] tracking-[-0.015em]">
              全部
              <span className="italic text-accent">作品。</span>
            </h1>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-[auto_1fr] lg:grid-cols-[80px_1fr_180px_auto] gap-6 lg:gap-10 items-start lg:items-center py-10 lg:py-12 border-t border-border-subtle last:border-b hover:pl-3 lg:hover:pl-6 transition-[padding] duration-500"
              >
                <div className="font-mono text-[11px] tracking-[0.15em] text-accent pt-1 lg:pt-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-normal text-[28px] lg:text-[42px] leading-[1.1] tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] font-light leading-[1.7] text-muted max-w-[520px]">
                    {project.description}
                  </p>
                </div>
                <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-accent leading-[1.8]">
                  <div>
                    {project.date.slice(0, 4)} ·{" "}
                    {project.type === "demo" ? "Demo" : "Link"}
                  </div>
                </div>
                <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-accent group-hover:text-foreground transition-colors">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
