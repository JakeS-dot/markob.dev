// src/posts/index.ts
export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  content: string;
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatter, content] = match;
  const data: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  });

  return { data, content: content.trim() };
}

// Parses a "YYYY-MM-DD" string as local time instead of UTC,
// so toLocaleDateString doesn't roll the date back a day in timezones behind UTC.
export function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

const modules = import.meta.glob("./*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = path.replace("./", "").replace(".md", "");
    return {
      slug,
      title: data.title ?? slug,
      subtitle: data.subtitle,
      date: data.date ?? new Date().toISOString().slice(0, 10),
      content,
    };
  })
  .sort(
    (a, b) =>
      parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime(),
  );

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
