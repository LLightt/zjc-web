import Link from "next/link";
import { getProjects } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export default function ProjectsPage() {
  const projects = getProjects();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="px-10 md:px-20 py-20 md:py-24">
      <Reveal>
        <div className="mb-16 md:mb-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
            All Projects
          </div>
          <h1 className="font-display font-light text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.015em]">
            全部
            <em className="italic text-accent">作品</em>
          </h1>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
        {featured && (
          <Reveal>
            <Link
              href={`/projects/${featured.slug}`}
              className="group relative overflow-hidden bg-surface border border-border-subtle rounded-[2px] p-10 md:p-14 flex flex-col justify-end min-h-[280px] md:min-h-[500px] hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-display text-[120px] absolute top-6 right-8 text-border-subtle leading-none">
                01
              </span>
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                {featured.type === "demo" ? "Demo" : "Link"}
              </div>
              <div className="font-display text-[28px] md:text-[40px] font-normal mb-3 tracking-[-0.01em]">
                {featured.title}
              </div>
              <div className="text-[14px] text-muted leading-[1.7] max-w-[380px]">
                {featured.description}
              </div>
              <div className="text-[10px] text-muted tracking-[0.1em] mt-5">
                {featured.date}
              </div>
            </Link>
          </Reveal>
        )}

        <div className="flex flex-col gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group bg-surface border border-border-subtle rounded-[2px] p-10 flex flex-col justify-end min-h-[200px] hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                  {project.type === "demo" ? "Demo" : "Link"}
                </div>
                <div className="font-display text-[24px] font-normal mb-3 tracking-[-0.01em]">
                  {project.title}
                </div>
                <div className="text-[14px] text-muted leading-[1.7]">
                  {project.description}
                </div>
                <div className="text-[10px] text-muted tracking-[0.1em] mt-5">
                  {project.date}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
