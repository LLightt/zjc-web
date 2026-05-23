import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="px-10 md:px-20 py-20 md:py-24">
      <Reveal>
        <div className="mb-16 md:mb-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
            All Articles
          </div>
          <h1 className="font-display font-light text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.015em]">
            全部
            <em className="italic text-accent">文章</em>
          </h1>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {posts.map((post) => (
          <Reveal key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_auto] items-baseline gap-6 md:gap-10 py-7 border-b border-border-subtle hover:pl-3 transition-[padding] duration-300"
            >
              <span className="text-[11px] tracking-[0.15em] text-muted">
                {post.date}
              </span>
              <span className="font-display text-[22px] md:text-[24px] font-normal tracking-[-0.01em] group-hover:text-accent transition-colors">
                {post.title}
              </span>
              <span className="hidden md:block text-[18px] text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
