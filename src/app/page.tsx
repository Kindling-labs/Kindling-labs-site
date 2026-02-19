"use client";
import { useState, useEffect } from "react";

// ── KINDLING FLAME LOGO ──
const KindlingLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#1A1A1A" />
    {/* Three kindling sticks */}
    <line x1="18" y1="36" x2="22" y2="14" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="12" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="36" x2="26" y2="14" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Spark/flame at top */}
    <circle cx="24" cy="10" r="2.5" fill="#F59E0B" />
    <circle cx="24" cy="10" r="4.5" fill="#F59E0B" opacity="0.2" />
  </svg>
);

const KindlingLogoSmall = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#1A1A1A" />
    <line x1="18" y1="36" x2="22" y2="14" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="12" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="36" x2="26" y2="14" stroke="#E8DCC8" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="10" r="2.5" fill="#F59E0B" />
    <circle cx="24" cy="10" r="4.5" fill="#F59E0B" opacity="0.2" />
  </svg>
);

// ── PRODUCT CARD ──
const ProductCard = ({ name, tagline, status, color, icon, url }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#FAFAFA" : "white",
        border: "1px solid #ECECEC",
        borderRadius: 16,
        padding: "32px 28px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.02)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: color,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: `${color}10`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}>
          {icon}
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          fontWeight: 500,
          color: status === "Live" ? "#10B981" : status === "Building" ? color : "#94A3B8",
          background: status === "Live" ? "#ECFDF5" : status === "Building" ? `${color}10` : "#F8FAFC",
          padding: "4px 10px",
          borderRadius: 6,
          letterSpacing: 0.5,
        }}>
          {status === "Live" && "● "}{status}
        </span>
      </div>
      <h3 style={{
        fontFamily: "'Newsreader', serif",
        fontSize: 22,
        fontWeight: 600,
        color: "#1A1A1A",
        marginBottom: 6,
        letterSpacing: -0.3,
      }}>{name}</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        lineHeight: 1.6,
        color: "#6B7280",
        marginBottom: 16,
      }}>{tagline}</p>
      {url && (
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "#9CA3AF",
          borderBottom: "1px dashed #D1D5DB",
          paddingBottom: 1,
        }}>{url}</span>
      )}
    </div>
  );
};

// ── MAIN PAGE ──
export default function KindlingLabs() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FFFFFF",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #FEF3C7; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 42px !important; }
          .section-padding { padding: 60px 20px !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 32px",
        background: scrollY > 50 ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid #F3F4F6" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <KindlingLogoSmall />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: -0.3,
            }}>Kindling Labs</span>
          </div>
          <a href="mailto:hello@kindlinglabs.co.uk" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13,
            color: "#6B7280",
            textDecoration: "none",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: 1,
          }}>hello@kindlinglabs.co.uk</a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{
        paddingTop: 160,
        paddingBottom: 120,
        paddingLeft: 32,
        paddingRight: 32,
        position: "relative",
      }}>
        {/* Subtle grain texture overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          animation: "fadeUp 0.8s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <KindlingLogo size={56} />
          </div>

          <h1 className="hero-title" style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 56,
            fontWeight: 500,
            color: "#1A1A1A",
            lineHeight: 1.15,
            letterSpacing: -1.5,
            marginBottom: 24,
          }}>
            We build tools that help
            <br />
            <span style={{ fontStyle: "italic", color: "#92400E" }}>people learn things.</span>
          </h1>

          <p style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: "#6B7280",
            maxWidth: 520,
            marginBottom: 40,
          }}>
            Kindling Labs is a small, independent studio creating learning tools grounded in cognitive science. Spaced repetition, retrieval practice, and daily micro-sessions — because the research says little and often beats cramming every time.
          </p>

          <div style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            paddingTop: 8,
          }}>
            <div style={{
              width: 48,
              height: 1,
              background: "#E5E7EB",
            }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "#9CA3AF",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}>Based in the UK · Est. 2026</span>
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ═══ */}
      <section className="section-padding" style={{
        padding: "80px 32px",
        borderTop: "1px solid #F3F4F6",
        borderBottom: "1px solid #F3F4F6",
        background: "#FAFAFA",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ maxWidth: 600, marginBottom: 56 }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#9CA3AF",
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "block",
              marginBottom: 16,
            }}>Our approach</span>
            <h2 style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 32,
              fontWeight: 500,
              color: "#1A1A1A",
              lineHeight: 1.3,
              letterSpacing: -0.5,
            }}>
              Three questions a day.<br />
              That's the whole idea.
            </h2>
          </div>

          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {[
              {
                num: "01",
                title: "Tiny daily doses",
                text: "Nobody wants to sit down for an hour of practice. Three questions take five minutes — before dinner, on the bus, while the pasta boils. Consistency beats intensity. Every time.",
              },
              {
                num: "02",
                title: "Adapted to you",
                text: "Every answer feeds an adaptive engine built on spaced repetition. It learns what you know, what you've forgotten, and what to ask you next. Tomorrow's questions are shaped by today's answers.",
              },
              {
                num: "03",
                title: "Human-checked, AI-powered",
                text: "AI generates unlimited practice material. A qualified teacher or subject expert reviews every question before it goes live. The scale of technology with the quality control of a real person.",
              },
            ].map((item, i) => (
              <div key={i}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#D1D5DB",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: 12,
                }}>{item.num}</span>
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: 10,
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#6B7280",
                }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section className="section-padding" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#9CA3AF",
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "block",
              marginBottom: 16,
            }}>Products</span>
            <h2 style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 32,
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: -0.5,
            }}>What we're building</h2>
          </div>

          <div className="product-grid">
            <ProductCard
              name="SATs Ready"
              tagline="Daily adaptive practice for Year 5 & 6 children preparing for KS2 SATs. Spaced repetition picks the right questions at the right time. Voice-guided explanations help when they're stuck. A parent dashboard tracks progress — and Challenge Your Grownup mode lets kids test the adults. Built by a primary school teacher."
              status="Building"
              color="#6C3FC5"
              icon="📝"
              url="satsready.com"
            />
            <ProductCard
              name="Theory Ready"
              tagline="UK driving theory test preparation that adapts to your weak spots. Daily practice questions, hazard perception training, and mock tests that mirror the real exam. Pass first time."
              status="2026"
              color="#0EA5E9"
              icon="🚗"
            />
            <ProductCard
              name="Trade Ready"
              tagline="Professional qualification prep for electricians, plumbers, and gas engineers. Daily practice for City & Guilds, NVQ, and AM2 exams — reviewed by qualified tradespeople. Stop paying hundreds for classroom revision courses."
              status="2027"
              color="#10B981"
              icon="⚡"
            />
          </div>

          <div style={{
            marginTop: 32,
            padding: "24px 28px",
            background: "#FFFBEB",
            borderRadius: 12,
            border: "1px solid #FDE68A",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#FEF3C7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              flexShrink: 0,
            }}>💡</div>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#92400E",
            }}>
              <strong>The pattern:</strong> every product uses the same engine — adaptive question selection powered by spaced repetition, content generated by AI and reviewed by qualified humans, daily micro-sessions grounded in cognitive science. One platform, many subjects.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ THE SCIENCE + PRINCIPLES ═══ */}
      <section className="section-padding" style={{
        padding: "80px 32px",
        borderTop: "1px solid #F3F4F6",
        background: "#FAFAFA",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "#9CA3AF",
                letterSpacing: 2,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16,
              }}>The science</span>
              <h2 style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 28,
                fontWeight: 500,
                color: "#1A1A1A",
                lineHeight: 1.35,
                letterSpacing: -0.3,
                marginBottom: 20,
              }}>
                Built on research,<br />
                not guesswork.
              </h2>
              <p style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#6B7280",
                marginBottom: 16,
              }}>
                Most practice apps are digitised worksheets — the same questions on a screen instead of paper. We build differently. Every product decision is grounded in peer-reviewed cognitive science.
              </p>
              <p style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "#6B7280",
              }}>
                Our adaptive engine uses spaced repetition to schedule topics at scientifically optimised intervals. When you get something wrong, it comes back at the moment your brain is about to forget — which is precisely when practising again has the biggest impact on long-term memory.
              </p>
            </div>
            <div>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "#9CA3AF",
                letterSpacing: 2,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16,
              }}>Principles</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { title: "Spaced repetition over cramming", text: "Practice at increasing intervals builds long-term memory. Research shows it improves retention by 50–100% compared to massed practice." },
                  { title: "Retrieval practice over re-reading", text: "Actively recalling an answer — even getting it wrong — strengthens memory far more than passively reviewing material. Every question is a retrieval event." },
                  { title: "Low stress, high retention", text: "Cortisol impairs memory formation. Short, calm, five-minute sessions produce better outcomes than long, pressured ones." },
                  { title: "Every question human-reviewed", text: "AI generates at scale. A qualified teacher or subject expert checks every question for accuracy, clarity, and appropriateness before it goes live." },
                  { title: "Privacy by design", text: "We collect the minimum data needed to make the product work. No real names, no school names, no locations. Less data means less risk." },
                  { title: "Priced fairly, built lean", text: "No venture funding means no pressure to overcharge. Less than a coffee a week — because effective learning tools should be accessible to every family." },
                ].map((p, i) => (
                  <div key={i}>
                    <h4 style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#1A1A1A",
                      marginBottom: 4,
                    }}>{p.title}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7280" }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="section-padding" style={{
        padding: "80px 32px",
        borderTop: "1px solid #F3F4F6",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#9CA3AF",
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 16,
          }}>About us</span>
          <h2 style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 28,
            fontWeight: 500,
            color: "#1A1A1A",
            lineHeight: 1.35,
            letterSpacing: -0.3,
            marginBottom: 20,
          }}>
            A teacher and a builder.
          </h2>
          <p style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#6B7280",
            marginBottom: 16,
          }}>
            We're a two-person team — a qualified primary school teacher and a software developer. When our daughter was born, Mum stepped away from the classroom to be at home. But you don't stop being a teacher when you leave the school gates.
          </p>
          <p style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#6B7280",
            marginBottom: 16,
          }}>
            Watching how our daughter learned — through play, through curiosity, through little moments repeated every day — she started thinking about all those children she'd taught. The ones who came in stressed for SATs revision. The parents who desperately wanted to help but didn't know how.
          </p>
          <p style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#6B7280",
          }}>
            There had to be a better way than stressed forty-five-minute practice papers. She brings the teaching expertise and reviews every question. He builds the technology. Together we're making the tools we wish had existed for every family she taught.
          </p>
        </div>
      </section>

      {/* ═══ NEWSLETTER / CONTACT ═══ */}
      <section className="section-padding" style={{
        padding: "80px 32px",
        borderTop: "1px solid #F3F4F6",
        background: "#FAFAFA",
      }}>
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Newsreader', serif",
            fontSize: 28,
            fontWeight: 500,
            color: "#1A1A1A",
            letterSpacing: -0.3,
            marginBottom: 12,
          }}>Stay in the loop</h2>
          <p style={{
            fontSize: 15,
            color: "#6B7280",
            lineHeight: 1.65,
            marginBottom: 28,
          }}>
            We'll email you when SATs Ready launches. No spam — just a single message when it's live.
          </p>

          {!submitted ? (
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: "1px solid #E5E7EB",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "#1A1A1A",
                  outline: "none",
                  background: "#FAFAFA",
                  transition: "border 0.2s ease",
                }}
                onFocus={e => e.target.style.borderColor = "#F59E0B"}
                onBlur={e => e.target.style.borderColor = "#E5E7EB"}
              />
              <button
                onClick={() => email && setSubmitted(true)}
                style={{
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: "none",
                  background: "#1A1A1A",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => e.target.style.background = "#374151"}
                onMouseLeave={e => e.target.style.background = "#1A1A1A"}
              >
                Notify me
              </button>
            </div>
          ) : (
            <div style={{
              padding: "16px 24px",
              background: "#ECFDF5",
              border: "1px solid #A7F3D0",
              borderRadius: 10,
              color: "#065F46",
              fontSize: 15,
              fontWeight: 600,
              animation: "fadeUp 0.3s ease",
            }}>
              ✓ You're on the list. We'll be in touch.
            </div>
          )}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        borderTop: "1px solid #F3F4F6",
        padding: "32px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <KindlingLogoSmall />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#9CA3AF",
            }}>Kindling Labs Ltd</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: "#D1D5DB",
          }}>
            © 2026 · London, UK
          </div>
        </div>
      </footer>
    </div>
  );
}
