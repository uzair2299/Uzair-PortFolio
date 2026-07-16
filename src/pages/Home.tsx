import React, { useState, useEffect } from "react";
import { ProjectModal } from "../components/ProjectModal";
import { ContactForm } from "../components/ContactForm";
import { motion } from "framer-motion";
import {
  profileData,
  skillsData,
  experienceData,
  projectsData,
  achievementsData,
  educationData,
  Project
} from "../data/portfolioData";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  GraduationCap
} from "lucide-react";

export const Home: React.FC = () => {
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Projects filter state
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);



  // Typewriter effect state
  const words = ["Enterprise Full Stack Developer", "CTI & CRM Integration Engineer", "Angular & Spring Boot Architect"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Handle Typewriter effect loop
  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        // Add char
        setTypewriterText(fullWord.substring(0, typewriterText.length + 1));
        if (typewriterText === fullWord) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        // Remove char
        setTypewriterText(fullWord.substring(0, typewriterText.length - 1));
        if (typewriterText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentWordIdx, typingSpeed]);

  // Handle projects filtering
  useEffect(() => {
    if (projectFilter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((p) => p.category === projectFilter));
    }
  }, [projectFilter]);

  return (
    <>
      {/* 1. Hero Section */}
      {/* 1. Hero Section (Editorial Redesign) */}
      <section id="hero" style={{ position: "relative", backgroundColor: "var(--bg-editorial)", overflow: "hidden", maxWidth: "100%", padding: 0 }}>
        <div className="editorial-number">01</div>
        <div className="editorial-vertical-nav">UZAIR ANWAR — PORTFOLIO</div>
        
        <div className="editorial-grid">
          <div className="editorial-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="editorial-greeting">Hello.</h4>
              <h1 className="editorial-headline">
                UZAIR<br />ANWAR
              </h1>
              <div className="editorial-title">
                Senior Software Engineer
              </div>
              <p className="editorial-body">
                I build scalable backend systems, REST APIs, microservices, and enterprise applications using Java, Spring Boot, and modern cloud technologies. Passionate about clean architecture, performance, and creating reliable software solutions.
              </p>
              <div className="editorial-actions">
                <button 
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
                  className="btn-editorial-primary"
                >
                  View Projects
                </button>
                <a 
                  href={profileData.cvLink} 
                  className="btn-editorial-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          <div className="editorial-right">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src="/profile.png"
                alt="Uzair Anwar Portrait"
                className="editorial-portrait"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief overview of my professional experience, drive, and credentials.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px", alignItems: "center" }} className="about-grid">
          <div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "16px" }}>
              Engineering Scalable Enterprise Applications
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "16px" }}>
              I'm a Full Stack Software Engineer with deep expertise in designing and integrating enterprise platforms. My focus is bridging the gap between back-end infrastructure robustness (using Java and Spring Boot) and front-end reactivity (using Angular and React).
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
              My highlight work spans from implementing lightweight multi-tenant schema isolation routers to engineering secure, low-latency softphone widgets embedded inside global CRM solutions (SAP Cloud for Customer and Salesforce).
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }} className="about-keywords">
              {["Enterprise", "CTI Systems", "SaaS", "Microservices", "REST APIs", "SQL & NoSQL", "Docker"].map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Matrix Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="stats-grid">
            <div className="glass-card" style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent-primary)", marginBottom: "4px" }}>4+</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase" }}>Years Development</div>
            </div>
            <div className="glass-card" style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent-secondary)", marginBottom: "4px" }}>10+</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase" }}>Applications Shipped</div>
            </div>
            <div className="glass-card" style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent-tertiary)", marginBottom: "4px" }}>15+</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase" }}>SaaS Tenants Live</div>
            </div>
            <div className="glass-card" style={{ textAlign: "center", padding: "32px 20px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent-success)", marginBottom: "4px" }}>1000+</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase" }}>Active CRM Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section id="skills" style={{ background: "var(--bg-secondary)", borderRadius: "24px", padding: "80px 32px" }}>
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Organized stacks representing technologies I work with in production daily.</p>

        <div className="bento-grid">
          {skillsData.map((category) => {
            let bentoClass = "bento-small";
            let displayTitle = category.name.toUpperCase();
            let subtitle = "";

            switch(category.name) {
              case "Languages":
                bentoClass = "bento-large";
                displayTitle = "CORE LANGUAGES.";
                subtitle = "Building the foundation with type-safe precision and structured codebases.";
                break;
              case "Frameworks":
                bentoClass = "bento-wide";
                displayTitle = "ENTERPRISE STACK.";
                subtitle = "Robust backend & reactive frontend environments.";
                break;
              case "Databases":
                bentoClass = "bento-small";
                displayTitle = "DATA SYSTEMS.";
                subtitle = "Persistence at scale.";
                break;
              case "Messaging & Integration":
                bentoClass = "bento-small";
                displayTitle = "EVENT DRIVEN.";
                subtitle = "Decoupled async processing.";
                break;
              case "Tools & IDEs":
                bentoClass = "bento-wide";
                displayTitle = "DEV TOOLS.";
                subtitle = "Optimizing the daily development workflow.";
                break;
              case "Deployments & Cloud":
                bentoClass = "bento-wide";
                displayTitle = "CLOUD OPS.";
                subtitle = "Shipping software reliably.";
                break;
            }

            return (
              <div key={category.name} className={`bento-card ${bentoClass}`}>
                <div className="bento-content">
                  <h3 className="bento-title">{displayTitle}</h3>
                  <p className="bento-subtitle">{subtitle}</p>
                </div>
                
                <div className="bento-icons-container">
                  {category.skills.map((skill) => {
                    const isObj = typeof skill === "object";
                    const skillName = isObj ? skill.name : skill;
                    const skillIcon = isObj ? skill.icon : null;
                    return (
                      <div key={skillName} className="bento-icon-badge">
                        {skillIcon && <img src={skillIcon} alt={skillName} />}
                        <span>{skillName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Experience Section */}
      <section id="experience">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Chronological footprint of my technical roles and achievements.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px", position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Vertical Line Decoration */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "16px",
              width: "2px",
              background: "var(--border-glass)",
              zIndex: 1,
            }}
          />

          {experienceData.map((exp) => (
            <div key={exp.id} style={{ display: "flex", gap: "24px", position: "relative", zIndex: 2 }}>
              {/* Chronological Circle Indicator */}
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  border: "3px solid var(--accent-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-secondary)" }} />
              </div>

              {/* Work Details Card */}
              <div className="glass-card" style={{ flexGrow: 1, padding: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 800 }}>{exp.role}</h3>
                    <div style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.95rem" }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }} className="exp-meta">
                    <span className="badge badge-accent" style={{ fontSize: "0.8rem", padding: "4px 12px" }}>
                      {exp.period}
                    </span>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul style={{ paddingLeft: "16px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.95rem", marginBottom: "20px" }}>
                  {exp.highlights.map((point, index) => (
                    <li key={index} style={{ lineHeight: "1.5" }}>{point}</li>
                  ))}
                </ul>

                <hr style={{ border: "none", borderTop: "1px solid var(--border-glass)", marginBottom: "16px" }} />

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: "0.75rem", background: "var(--bg-tertiary)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Deep dive into enterprise applications, custom CTI integrations, and cloud SaaS products.</p>

        {/* Filter Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: "all", label: "All Work" },
            { id: "enterprise", label: "Enterprise Apps" },
            { id: "cti", label: "CTI & Webex" },
            { id: "saas", label: "SaaS Platforms" },
            { id: "fullstack", label: "Full Stack" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setProjectFilter(btn.id)}
              className="badge"
              style={{
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: "0.85rem",
                fontWeight: 600,
                backgroundColor: projectFilter === btn.id ? "var(--accent-primary)" : "var(--bg-tertiary)",
                color: projectFilter === btn.id ? "#ffffff" : "var(--text-secondary)",
                borderColor: projectFilter === btn.id ? "var(--accent-primary)" : "var(--border-glass)",
                transition: "all var(--transition-fast)",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid-3" style={{ gap: "24px" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                padding: "24px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "var(--accent-primary)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {project.subtitle}
                </span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px" }}>{project.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "20px" }}>
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="badge" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary"
                  style={{
                    width: "100%",
                    fontSize: "0.85rem",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Read Architecture <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Tech Stack icons list */}
      <section style={{ background: "var(--bg-secondary)", borderRadius: "24px", padding: "60px 24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            opacity: 0.65,
          }}
          className="tech-logos-list"
        >
          {["Angular", "React", "Spring Boot", "Java", "TypeScript", "PostgreSQL", "Docker", "Git", "Kubernetes", "SAP C4C", "Webex"].map((iconName) => (
            <div
              key={iconName}
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "default",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-primary)";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "inherit";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Cpu size={16} /> {iconName}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Achievements Matrix Section */}
      <section id="achievements">
        <h2 className="section-title">Core Achievements</h2>
        <p className="section-subtitle">A summary of enterprise-level key performance milestones.</p>

        <div className="grid-2">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "20px 24px",
              }}
            >
              <span style={{ color: "var(--accent-success)", flexShrink: 0, marginTop: "4px" }}>
                <CheckCircle size={20} />
              </span>
              <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and qualifications.</p>
        <div className="timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-dot">
                <GraduationCap size={14} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <span className="timeline-date">{edu.period}</span>
                </div>
                <p className="timeline-subtitle">{edu.institution}</p>
                <div className="timeline-result">
                  <CheckCircle size={14} />
                  <span>{edu.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* 11. Contact Form Section */}
      <section id="contact" style={{ paddingBottom: "120px" }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a query or project opportunity? Fill in the secure form below.</p>
        <ContactForm />
      </section>

      {/* Project details overlays */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Extra Responsive Styling for Home Sections */}
      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 2.25rem !important;
          }
          .exp-meta {
            text-align: left !important;
            margin-top: 4px;
          }
        }
      `}</style>
    </>
  );
};
