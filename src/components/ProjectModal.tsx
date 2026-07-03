import React, { useState } from "react";
import { X, Check, Copy, Code, Server, Award } from "lucide-react";
import { Project } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            maxWidth: "800px",
            maxHeight: "85vh",
            overflowY: "auto",
            padding: "32px",
            position: "relative",
            zIndex: 1001,
            outline: "none",
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

          {/* Heading */}
          <div style={{ marginBottom: "24px" }}>
            <span className="badge badge-accent" style={{ marginBottom: "12px", textTransform: "uppercase" }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "4px" }} className="gradient-text">
              {project.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)", marginBottom: "24px" }} />

          {/* Body Content Layout */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Description */}
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>Overview</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: "1.6" }}>
                {project.description}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.15)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--accent-success)",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Award size={16} /> Key Metrics & Impact
                </h4>
                <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", fontSize: "0.92rem", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {project.metrics.map((metric, index) => (
                    <li key={index}>{metric}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Layout Columns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="modal-columns">
              {/* Features */}
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                  Key Features
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(16, 185, 129, 0.1)",
                          borderRadius: "50%",
                          padding: "2px",
                          display: "inline-flex",
                          color: "var(--accent-success)",
                        }}
                      >
                        <Check size={12} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture details */}
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Server size={16} /> Architecture
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.architectureDetails.map((arch, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--accent-primary)",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack tags */}
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px" }}>Tech Stack</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge badge-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Snippet representation */}
            {project.codeSnippet && (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    <Code size={16} /> Integration Concept
                  </h4>
                  <button
                    onClick={() => handleCopyCode(project.codeSnippet!.code)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {copied ? (
                      <>
                        <Check size={12} color="#10b981" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <pre>
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                    {project.codeSnippet.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};
