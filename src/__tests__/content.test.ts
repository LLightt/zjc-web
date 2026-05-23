import { describe, it, expect } from "vitest";
import { getProjects, getProject, getBlogPosts, getBlogPost } from "@/lib/content";

describe("getProjects", () => {
  it("returns projects sorted by date descending", () => {
    const projects = getProjects();

    expect(projects.length).toBeGreaterThanOrEqual(2);
    for (let i = 1; i < projects.length; i++) {
      expect(projects[i - 1].date >= projects[i].date).toBe(true);
    }
  });

  it("includes known projects with correct types", () => {
    const projects = getProjects();
    const slugs = projects.map((p) => p.slug);

    expect(slugs).toContain("ai-chat");
    expect(slugs).toContain("image-gen");
    expect(getProject("ai-chat")!.type).toBe("demo");
    expect(getProject("image-gen")!.type).toBe("link");
  });
});

describe("getProject", () => {
  it("returns the project matching the given slug", () => {
    const project = getProject("ai-chat");

    expect(project).not.toBeNull();
    expect(project!.title).toBe("AI 聊天助手");
    expect(project!.type).toBe("demo");
  });

  it("returns null for a non-existent slug", () => {
    const project = getProject("does-not-exist");

    expect(project).toBeNull();
  });
});

describe("getBlogPosts", () => {
  it("returns blog posts sorted by date descending", () => {
    const posts = getBlogPosts();

    expect(posts.length).toBeGreaterThanOrEqual(2);
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });
});

describe("getBlogPost", () => {
  it("returns the blog post matching the given slug", () => {
    const post = getBlogPost("hello-world");

    expect(post).not.toBeNull();
    expect(post!.title).toBe("Hello World");
  });

  it("returns null for a non-existent slug", () => {
    const post = getBlogPost("nope");

    expect(post).toBeNull();
  });
});
