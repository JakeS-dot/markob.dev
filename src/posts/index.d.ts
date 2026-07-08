export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  content: string;
}

export const posts: Post[];
export function getPostBySlug(slug: string): Post | undefined;
