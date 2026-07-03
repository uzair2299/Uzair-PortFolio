import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { profileData } from "./data/portfolioData";

// Scroll anchor helper translating route paths to section scroll positions
const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      "/about": "about",
      "/skills": "skills",
      "/experience": "experience",
      "/projects": "projects",
      "/blog": "blog",
      "/contact": "contact",
    };

    const sectionId = sectionMap[pathname];
    if (sectionId) {
      // Small timeout to let elements render on initial page load
      const timer = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else if (pathname === "/") {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-glass)",
        padding: "48px 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <button
          onClick={handleScrollToTop}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontWeight: 800,
            fontSize: "1.2rem",
            letterSpacing: "-0.5px",
          }}
        >
          <span className="gradient-text">{profileData.name}</span>
        </button>

        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "500px" }}>
          Specialized in building robust enterprise full-stack solutions, custom softphone connectors, and secure multi-tenant SaaS products.
        </p>

        <div style={{ display: "flex", gap: "20px", margin: "8px 0" }}>
          <a href={profileData.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }} className="footer-link">
            LinkedIn
          </a>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)", width: "100%", maxWidth: "400px" }} />

        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>&copy; {new Date().getFullYear()} {profileData.name}. Built with React</span>
          <span>&bull;</span>
          <span>Hosted on Vercel</span>
        </div>
      </div>

      <style>{`
        .footer-link {
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--accent-primary) !important;
        }
      `}</style>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
