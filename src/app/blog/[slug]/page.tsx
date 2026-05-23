import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Markdown } from "@/components/markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <section className="bg-background text-foreground pt-[140px] pb-[160px] lg:pt-[180px] lg:pb-[200px]">
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-20">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft size={12} />
            返回文章列表
          </Link>
        </Reveal>

        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
            {post.date}
          </div>
          <h1 className="font-display font-normal text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6">
            {post.title}
          </h1>
          <p className="text-[18px] lg:text-[20px] font-light leading-[1.8] text-muted max-w-[600px] mb-10">
            {post.summary}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border-t border-border-subtle pt-12 mt-12">
            <Markdown content={post.content} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
