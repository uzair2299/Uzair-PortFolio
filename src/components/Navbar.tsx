import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { profileData } from "../data/portfolioData";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Progress and Active Section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Identify active section
      const sections = ["hero", "about", "skills", "experience", "projects", "blog", "contact"];
      const scrollPos = window.scrollY + 200; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Toggler initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Let the page render and then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      {/* Top Scroll Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className="glass-panel"
        style={{
          position: "fixed",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1120px",
          zIndex: 900,
          borderRadius: "12px",
          padding: "12px 24px",
          transition: "all var(--transition-normal)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("hero")}
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              letterSpacing: "-0.5px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "var(--gradient-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "900",
                fontSize: "1rem",
              }}
            >
              UA
            </span>
            <span className="gradient-text">{profileData.name}</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: activeSection === link.id && location.pathname === "/" ? "var(--accent-primary)" : "var(--text-secondary)",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  transition: "all var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeSection === link.id && location.pathname === "/" ? "var(--accent-primary)" : "var(--text-secondary)")
                }
              >
                {link.label}
              </button>
            ))}

            <span style={{ width: "1px", height: "16px", background: "var(--border-glass)" }} />

            {/* Resume CTA */}
            <a
              href={profileData.cvLink}
              className="btn btn-secondary"
              style={{
                padding: "6px 12px",
                fontSize: "0.85rem",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <FileText size={14} />
              Resume
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-glass)",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-glass)")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile menu trigger */}
          <div style={{ display: "none" }} className="mobile-controls">
            <button
              onClick={toggleTheme}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                marginRight: "12px",
              }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div
            className="glass-panel"
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              width: "100%",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: activeSection === link.id && location.pathname === "/" ? "var(--accent-primary)" : "var(--text-secondary)",
                  textAlign: "left",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  width: "100%",
                }}
              >
                {link.label}
              </button>
            ))}
            <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)" }} />
            <a
              href={profileData.cvLink}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "0.95rem",
                borderRadius: "6px",
              }}
            >
              <FileText size={16} />
              Download Resume
            </a>
          </div>
        )}
      </header>

      {/* CSS adjustments to handle hide/show classes between mobile and desktop */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-controls {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};
