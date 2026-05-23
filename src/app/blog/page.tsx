import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SceneLabel } from "@/components/scene-label";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="bg-surface-warm text-dark-text pt-[140px] pb-[160px] lg:pt-[180px] lg:pb-[200px]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        <SceneLabel reel="03" scene="001" />

        <Reveal>
          <div className="mb-20 lg:mb-24">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              All Articles
            </div>
            <h1 className="font-display font-normal text-[40px] lg:text-[64px] leading-[1.05] tracking-[-0.015em]">
              全部
              <span className="italic text-accent">文章。</span>
            </h1>
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
      </div>
    </section>
  );
}
