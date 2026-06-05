import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PostPage({ post }) {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1>{post.title}</h1>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
