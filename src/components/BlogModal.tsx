import React from "react";
import { X, Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

interface BlogModalProps {
  blog: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  if (!blog) return null;

  // Custom parser to translate markdown-like text to styled JSX
  const parseMarkdown = (text: string) => {
    const blocks = text.split("\n\n");
    return blocks.map((block, index) => {
      // Headers
      if (block.startsWith("### ")) {
        return (
          <h4
            key={index}
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              marginTop: "24px",
              marginBottom: "12px",
              color: "var(--text-primary)",
            }}
          >
            {block.replace("### ", "")}
          </h4>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h3
            key={index}
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginTop: "28px",
              marginBottom: "14px",
              color: "var(--text-primary)",
            }}
          >
            {block.replace("## ", "")}
          </h3>
        );
      }

      // Code blocks
      if (block.startsWith("```")) {
        const lines = block.split("\n");
        const language = lines[0].replace("```", "").trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <div key={index} style={{ margin: "20px 0" }}>
            <div
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-glass)",
                borderBottom: "none",
                padding: "8px 16px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
              }}
            >
              {language || "code"}
            </div>
            <pre
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                marginTop: 0,
              }}
            >
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      // Ordered and Unordered Lists
      if (block.startsWith("1. ") || block.startsWith("- ") || block.startsWith("* ")) {
        const lines = block.split("\n");
        const isOrdered = block.startsWith("1. ");
        const listItems = lines.map((line, i) => {
          const content = line.replace(/^\d+\.\s+/, "").replace(/^[-*]\s+/, "");
          // Handle inline backticks in list items
          return <li key={i}>{parseInlineCode(content)}</li>;
        });

        const listStyle = {
          paddingLeft: "24px",
          marginBottom: "16px",
          display: "flex",
          flexDirection: "column" as const,
          gap: "8px",
          color: "var(--text-secondary)",
          fontSize: "0.98rem",
        };

        return isOrdered ? (
          <ol key={index} style={listStyle}>
            {listItems}
          </ol>
        ) : (
          <ul key={index} style={listStyle}>
            {listItems}
          </ul>
        );
      }

      // Default paragraph (with support for inline code tags)
      return (
        <p
          key={index}
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: "1.7",
            marginBottom: "16px",
          }}
        >
          {parseInlineCode(block)}
        </p>
      );
    });
  };

  // Utility to parse inline backticks like `const a = 1`
  const parseInlineCode = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, i) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-glass)",
              padding: "2px 6px",
              borderRadius: "4px",
              fontSize: "0.9em",
              color: "var(--accent-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(3, 4, 8, 0.8)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-panel"
          style={{
            width: "100%",
            maxWidth: "760px",
            maxHeight: "85vh",
            overflowY: "auto",
            padding: "36px",
            position: "relative",
            zIndex: 1001,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Trigger */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-glass)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
              transition: "all var(--transition-fast)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          >
            <X size={18} />
          </button>

          {/* Article Info Header */}
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "2.1rem", fontWeight: 800, marginBottom: "14px", lineHeight: "1.25" }}>
              {blog.title}
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} />
                {blog.date}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={14} />
                {blog.readTime}
              </span>
              <div style={{ display: "flex", gap: "6px" }}>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "rgba(99, 102, 241, 0.08)",
                      border: "1px solid rgba(99, 102, 241, 0.15)",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      fontSize: "0.75rem",
                      color: "var(--accent-primary)",
                    }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)", marginBottom: "28px" }} />

          {/* Rendered content */}
          <div className="blog-content-body" style={{ color: "var(--text-secondary)" }}>
            {parseMarkdown(blog.content)}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
