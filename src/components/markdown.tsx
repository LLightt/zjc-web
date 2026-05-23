import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:font-display prose-headings:tracking-[-0.01em] prose-headings:text-foreground
        prose-h1:text-[36px] prose-h2:text-[28px] prose-h3:text-[22px]
        prose-p:font-light prose-p:leading-[1.8] prose-p:text-foreground/80
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-li:text-foreground/80 prose-li:font-light
        prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-surface prose-pre:border prose-pre:border-border-subtle"
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
