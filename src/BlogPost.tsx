import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavBar from "./NavBar";
import { getPostBySlug, parseLocalDate } from "./posts";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <div>post not found</div>;

  return (
    <main>
      <NavBar current="blog" />
      <div className="blog-container">
        <div className="side-collum">
          <div className="day">
            {parseLocalDate(post.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </div>
          <div className="date">
            {parseLocalDate(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            })}
          </div>
          <div className="year">{parseLocalDate(post.date).getFullYear()}</div>
        </div>
        <div className="blog-main">
          <div
            className="title-line"
            style={{ padding: "0 7px", marginTop: -20 }}
          >
            <h1>{post.title}</h1>
            {post.subtitle && (
              <h2 style={{ fontSize: 18, marginTop: -15 }}>{post.subtitle}</h2>
            )}
          </div>
          <div className="blog-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogPost;
