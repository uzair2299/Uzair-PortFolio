import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { profileData } from "../data/portfolioData";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
}

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  // Confetti Animation loop
  useEffect(() => {
    if (confetti.length === 0) return;

    let animationFrameId: number;

    const updateConfetti = () => {
      setConfetti((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed,
            y: p.y + Math.sin(p.angle) * p.speed + 1.2, // gravity
            speed: p.speed * 0.98, // air friction
            rotation: p.rotation + p.rotSpeed,
          }))
          .filter((p) => p.y < window.innerHeight && p.speed > 0.1) // drop pieces out of view
      );
      animationFrameId = requestAnimationFrame(updateConfetti);
    };

    animationFrameId = requestAnimationFrame(updateConfetti);
    return () => cancelAnimationFrame(animationFrameId);
  }, [confetti]);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const spawnConfetti = () => {
    const colors = ["#6366f1", "#06b6d4", "#8b5cf6", "#10b981", "#fbbf24", "#ef4444"];
    const pieces: ConfettiPiece[] = [];
    
    // Spawn 80 pieces centered around the success card checkmark
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: Math.random() + i,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setConfetti(pieces);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate Server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      spawnConfetti();
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Dynamic Floating Confetti Layer */}
      {confetti.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            pointerEvents: "none",
            borderRadius: p.id % 2 === 0 ? "50%" : "2px",
            zIndex: 1100,
          }}
        />
      ))}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px" }} className="contact-grid">
        {/* Contact Info Sidebar */}
        <div className="glass-panel" style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "12px" }}>Let's Connect</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "32px", fontSize: "0.95rem" }}>
              Have an enterprise project to build, a CTI integration challenge, or an opportunity to discuss? Send me a message, and I'll get back to you within 24 hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Email</div>
                  <a href={`mailto:${profileData.email}`} style={{ fontSize: "0.95rem", fontWeight: 500 }} className="contact-link">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(6, 182, 212, 0.08)",
                    border: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-secondary)",
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>WhatsApp / Mobile</div>
                  <a href={profileData.whatsapp} style={{ fontSize: "0.95rem", fontWeight: 500 }} className="contact-link">
                    +92 300 0000000
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(139, 92, 246, 0.08)",
                    border: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-tertiary)",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Location</div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text-primary)" }}>
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>Social Handles</div>
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-glass)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-glass)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Form Area */}
        <div className="glass-panel" style={{ padding: "36px" }}>
          {submitted ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "24px 0",
              }}
            >
              <div style={{ color: "var(--accent-success)", marginBottom: "20px" }}>
                <CheckCircle2 size={64} strokeWidth={1.5} />
              </div>
              <h4 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "8px" }}>Message Dispatched!</h4>
              <p style={{ color: "var(--text-secondary)", maxWidth: "400px", fontSize: "0.95rem", marginBottom: "24px" }}>
                Thank you for reaching out. The simulated enterprise gateway has queued your transmission successfully. I'll connect with you shortly!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-secondary"
                style={{ padding: "10px 20px", fontSize: "0.9rem" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="name" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: `1px solid ${errors.name ? "rgba(239, 68, 68, 0.4)" : "var(--border-glass)"}`,
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color var(--transition-fast)",
                    }}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span style={{ fontSize: "0.75rem", color: "#f87171", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="email" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>Email Address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: `1px solid ${errors.email ? "rgba(239, 68, 68, 0.4)" : "var(--border-glass)"}`,
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color var(--transition-fast)",
                    }}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span style={{ fontSize: "0.75rem", color: "#f87171", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="subject" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: `1px solid ${errors.subject ? "rgba(239, 68, 68, 0.4)" : "var(--border-glass)"}`,
                    background: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color var(--transition-fast)",
                  }}
                  placeholder="Enterprise project integration..."
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="message" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>Message Body</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: `1px solid ${errors.message ? "rgba(239, 68, 68, 0.4)" : "var(--border-glass)"}`,
                    background: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                    transition: "border-color var(--transition-fast)",
                  }}
                  placeholder="Tell me about your application requirements..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span style={{ fontSize: "0.75rem", color: "#f87171", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "1rem",
                  marginTop: "8px",
                  position: "relative",
                  overflow: "hidden",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner" />
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-link {
          transition: color var(--transition-fast);
        }
        .contact-link:hover {
          color: var(--accent-primary);
        }
        .social-icon:hover {
          border-color: var(--accent-primary) !important;
          color: var(--accent-primary) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        /* Loading Spinner */
        .spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};
