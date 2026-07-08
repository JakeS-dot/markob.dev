import { useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavBar from "./NavBar";
import { posts, parseLocalDate } from "./posts";

const POSTS_PER_PAGE = 10;

function formatDay(dateStr: string) {
  return parseLocalDate(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function formatDate(dateStr: string) {
  return parseLocalDate(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
}

function formatYear(dateStr: string) {
  return parseLocalDate(dateStr).getFullYear();
}

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const rawPage = parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isNaN(rawPage)
    ? 1
    : Math.min(Math.max(rawPage, 1), totalPages);

  const currentPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return posts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  const goToPage = (nextPage: number) => {
    const clamped = Math.min(Math.max(nextPage, 1), totalPages);
    setSearchParams(clamped === 1 ? {} : { page: String(clamped) });
  };

  const goNext = () => goToPage(page + 1);
  const goPrev = () => goToPage(page - 1);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (e.target as HTMLElement)?.isContentEditable
      )
        return;

      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [page, totalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <main>
      <NavBar current="blog" />

      {currentPosts.map((post) => (
        <div className="blog-container" key={post.slug}>
          <div
            className="blog-entry"
            style={{ display: "flex", marginBottom: 60 }}
          >
            <div className="side-collum">
              <div className="day">{formatDay(post.date)}</div>
              <div className="date">{formatDate(post.date)}</div>
              <div className="year">{formatYear(post.date)}</div>
            </div>

            <div className="blog-main">
              <div
                className="title-line"
                style={{ padding: "0 7px", marginTop: -20 }}
              >
                <h1>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h1>
                {post.subtitle && (
                  <h2 style={{ fontSize: 18, marginTop: -15 }}>
                    {post.subtitle}
                  </h2>
                )}
              </div>

              <div className="blog-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <button
            onClick={goPrev}
            disabled={page === 1}
            aria-label="Previous page"
          >
            ←
          </button>

          <span>
            page {page} of {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}

export default Blog;
