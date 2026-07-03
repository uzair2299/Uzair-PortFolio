import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { profileData } from "../data/portfolioData";

export const ContactForm: React.FC = () => {
  return (
    <div style={{ maxWidth: "650px", margin: "0 auto" }}>
      <div
        className="glass-panel"
        style={{
          padding: "48px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Title & Introduction */}
        <div>
          <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "12px" }} className="gradient-text">
            Let's Connect
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", maxWidth: "500px", margin: "0 auto" }}>
            Have an enterprise project to build, a CTI integration challenge, or an engineering opportunity? Reach out directly via any of the channels below.
          </p>
        </div>

        {/* Channels List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
            maxWidth: "450px",
          }}
        >
          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-glass)",
              borderRadius: "12px",
              padding: "16px 20px",
              textAlign: "left",
            }}
          >
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
                flexShrink: 0,
              }}
            >
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Email</div>
              <a href={`mailto:${profileData.email}`} style={{ fontSize: "1rem", fontWeight: 600 }} className="contact-link">
                {profileData.email}
              </a>
            </div>
          </div>

          {/* WhatsApp / Phone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-glass)",
              borderRadius: "12px",
              padding: "16px 20px",
              textAlign: "left",
            }}
          >
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
                flexShrink: 0,
              }}
            >
              <Phone size={20} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>WhatsApp / Mobile</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                <a href={profileData.whatsapp} target="_blank" rel="noreferrer" style={{ fontSize: "0.98rem", fontWeight: 600 }} className="contact-link">
                  {profileData.phone1} (WhatsApp)
                </a>
                <span style={{ color: "var(--border-glass)" }}>|</span>
                <a href={`tel:${profileData.phone2.replace(/\s+/g, "")}`} style={{ fontSize: "0.95rem", fontWeight: 600 }} className="contact-link">
                  {profileData.phone2} (Mobile)
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-glass)",
              borderRadius: "12px",
              padding: "16px 20px",
              textAlign: "left",
            }}
          >
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
                flexShrink: 0,
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Location</div>
              <span style={{ fontSize: "0.98rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {profileData.location}
              </span>
            </div>
          </div>
        </div>

        {/* Social Accounts */}
        <div style={{ width: "100%", borderTop: "1px solid var(--border-glass)", paddingTop: "28px" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600, marginBottom: "16px" }}>
            Professional Network
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-glass)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--transition-fast)",
              }}
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
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
      `}</style>
    </div>
  );
};
