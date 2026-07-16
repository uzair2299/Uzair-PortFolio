import React, { useState, useEffect } from "react";
import { Background } from "../components/Background";
import { ProjectModal } from "../components/ProjectModal";
import { BlogModal } from "../components/BlogModal";
import { ContactForm } from "../components/ContactForm";
import { motion } from "framer-motion";
import {
  profileData,
  skillsData,
  experienceData,
  projectsData,
  blogData,
  achievementsData,
  educationData,
  Project,
  BlogPost
} from "../data/portfolioData";
import {
  ArrowRight,
  Code,
  Layers,
  Database,
  Cloud,
  Settings,
  Sparkles,
  Download,
  PhoneCall,
  Calendar,
  CheckCircle,
  Cpu
} from "lucide-react";

export const Home: React.FC = () => {
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

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



  // Skill category icons resolver
  const getSkillCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Frontend":
        return <Code size={20} className="skill-cat-icon" style={{ color: "var(--accent-primary)" }} />;
      case "Backend":
        return <Layers size={20} className="skill-cat-icon" style={{ color: "var(--accent-secondary)" }} />;
      case "Database":
        return <Database size={20} className="skill-cat-icon" style={{ color: "var(--accent-tertiary)" }} />;
      case "Cloud & DevOps":
        return <Cloud size={20} className="skill-cat-icon" style={{ color: "var(--accent-success)" }} />;
      default:
        return <Settings size={20} className="skill-cat-icon" style={{ color: "var(--accent-primary)" }} />;
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "140px",
          position: "relative",
        }}
      >
        <Background />

        {/* Floating Code Mockup Background (Abstract Art) */}
        <div className="hero-code-decoration animate-float" style={{ display: "none" }}>
          <code>class SoftwareEngineer &#123; const skills = ["Angular", "Spring Boot"]; &#125;</code>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 10, maxWidth: "800px" }}
        >
          {/* Profile Photo Container */}
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              margin: "0 auto 24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                background: "var(--gradient-accent)",
                zIndex: 1,
                opacity: 0.8,
                filter: "blur(2px)",
              }}
              className="animate-pulse-slow"
            />
            <img
              src="/profile.png"
              alt="Uzair Anwar"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid var(--bg-primary)",
                zIndex: 2,
                boxShadow: "var(--shadow-lg)",
              }}
            />
          </div>

          <span
            className="badge badge-accent"
            style={{
              padding: "6px 16px",
              fontSize: "0.85rem",
              marginBottom: "24px",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Sparkles size={14} /> Open to Global Roles & Remote
          </span>

          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: 900,
              lineHeight: "1.05",
              letterSpacing: "-2px",
              marginBottom: "16px",
            }}
          >
            Hi, I'm <span className="gradient-text">{profileData.name}</span>
          </h1>

          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              minHeight: "44px",
              marginBottom: "24px",
              color: "var(--text-primary)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>I'm a </span>
            <span style={{ borderRight: "3px solid var(--accent-primary)", paddingRight: "4px" }} className="typewriter">
              {typewriterText}
            </span>
          </div>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto 36px",
              lineHeight: "1.6",
            }}
          >
            {profileData.tagline}
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-primary">
              View Work <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-secondary">
              Contact Me <PhoneCall size={16} />
            </button>
            <a href={profileData.cvLink} className="btn btn-secondary" style={{ borderStyle: "dashed" }}>
              Download CV <Download size={16} />
            </a>
          </div>
        </motion.div>
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

        <div className="grid-3" style={{ gap: "20px" }}>
          {skillsData.map((category) => (
            <div key={category.name} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "16px", background: "var(--bg-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getSkillCategoryIcon(category.name)}
                </span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{category.name}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                {category.skills.map((skill) => {
                  const isObj = typeof skill === "object";
                  const skillName = isObj ? skill.name : skill;
                  const skillIcon = isObj ? skill.icon : null;

                  return (
                    <span
                      key={skillName}
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-glass)",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        transition: "all var(--transition-fast)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-primary)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-glass)";
                        e.currentTarget.style.transform = "none";
                      }}
                    >
                      {skillIcon && <img src={skillIcon} alt={skillName} style={{ width: 16, height: 16 }} />}
                      <span>{skillName}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
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
        <div className="grid-3" style={{ gap: "24px" }}>
          {educationData.map((edu) => (
            <div key={edu.id} className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px" }}>{edu.degree}</h3>
                <p style={{ color: "var(--accent-primary)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "16px" }}>{edu.institution}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-glass)", paddingTop: "16px" }}>
                <span className="badge" style={{ fontSize: "0.8rem", background: "var(--bg-tertiary)" }}>{edu.period}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>{edu.result}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* 10. Blog Grid Section */}
      <section id="blog">
        <h2 className="section-title">Technical Blog</h2>
        <p className="section-subtitle">Articles on system design patterns, performance strategies, and API security guidelines.</p>

        <div className="grid-3" style={{ gap: "24px" }}>
          {blogData.map((post) => (
            <div
              key={post.id}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "12px", lineHeight: "1.3" }}>
                  {post.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "20px" }}>
                  {post.summary}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedBlog(post)}
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
                  Read Article <ArrowRight size={14} />
                </button>
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

      {/* Project details and Blog popups overlays */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />

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
