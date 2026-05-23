import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Project {
  title: string;
  slug: string;
  description: string;
  type: "demo" | "link";
  date: string;
  externalUrl?: string;
  content: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
}

function readMdxFiles(dir: string) {
  const fullPath = path.join(CONTENT_DIR, dir);
  const files = fs.readdirSync(fullPath).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(fullPath, file), "utf-8");
    const { data, content } = matter(raw);
    return { data, content };
  });
}

export function getProject(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getProjects(): Project[] {
  const items = readMdxFiles("projects");
  return items
    .map(({ data, content }) => ({
      title: data.title as string,
      slug: data.slug as string,
      description: data.description as string,
      type: data.type as "demo" | "link",
      date: data.date as string,
      externalUrl: data.externalUrl as string | undefined,
      content,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPosts(): BlogPost[] {
  const items = readMdxFiles("blog");
  return items
    .map(({ data, content }) => ({
      title: data.title as string,
      slug: data.slug as string,
      date: data.date as string,
      summary: data.summary as string,
      content,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
