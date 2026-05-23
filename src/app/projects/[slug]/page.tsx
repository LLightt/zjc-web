import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Markdown } from "@/components/markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <section className="px-10 md:px-20 py-20 md:py-24">
      <div className="max-w-[900px]">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft size={12} />
            返回项目列表
          </Link>
        </Reveal>

        <Reveal>
          <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
            {project.date.slice(0, 4)} ·{" "}
            {project.type === "demo" ? "Demo" : "Link"}
          </div>
          <h1 className="font-display font-light text-[40px] md:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6">
            {project.title}
          </h1>
          <p className="text-[18px] md:text-[20px] font-light leading-[1.8] text-muted max-w-[600px] mb-10">
            {project.description}
          </p>
        </Reveal>

        {project.externalUrl && (
          <Reveal delay={0.1}>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-background text-[11px] tracking-[0.2em] uppercase hover:bg-foreground transition-colors duration-300 mb-16"
            >
              访问项目
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="border-t border-border-subtle pt-12 mt-12">
            <Markdown content={project.content} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
