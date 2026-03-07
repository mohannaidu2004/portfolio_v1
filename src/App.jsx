import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Phone, Mail, Link as LinkIcon, MapPin, Trophy, ChevronDown,
  Code2, Database, Globe, Wrench, Briefcase, GraduationCap,
  Award, MessageSquare, Menu, X, ChevronLeft, ChevronRight
} from 'lucide-react'

// ── Image Imports ──────────────────────────────────────────
import avatarImg from './assets/images/avatar.png'
import reactIcon from './assets/images/react-icon.png'
import pythonIcon from './assets/images/python-icon.png'
import azureIcon from './assets/images/azure-icon.png'
import sqlIcon from './assets/images/sql-icon.png'
import heroOrb1 from './assets/images/orb-blue.png'
import threyaMockup from './assets/images/threya-mockup.png?format=webp&quality=78&w=960'
import departMockup from './assets/images/depart-mockup.png?format=webp&quality=78&w=960'
import n8nMockup from './assets/images/n8n-mockup.png?format=webp&quality=78&w=960'
import dashMockup from './assets/images/dash-mockup.png?format=webp&quality=78&w=960'
import nighatechLogo from './assets/images/nighatech-logo.png'
import perfectLogo from './assets/images/perfect-logo.png'
import nriLogo from './assets/images/nri-logo.png'
import srCollegeLogo from './assets/images/sr-college-logo.png'
import balaVignanLogo from './assets/images/bala-vignan-logo.png'
import aboutIllustration from './assets/images/about-illustration.png'
import skillsIllustration from './assets/images/skills-illustration.png'
import achievementIllustration from './assets/images/achievement-illustration.png'
import contactIllustration from './assets/images/contact-illustration.png'
import linkedinIcon from './assets/images/linkedin-icon.png'
import githubIcon from './assets/images/github-icon.png'
import hackerrankIcon from './assets/images/hackerrank-icon.png'
import gmailIcon from './assets/images/gmail-icon.png'

// ── Styles ─────────────────────────────────────────────────
const glass = {
  background: 'rgba(255,255,255,0.55)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.7)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
}

const glassHover = {
  ...glass,
  boxShadow: '0 12px 40px rgba(91,141,238,0.15)',
  transform: 'translateY(-6px)',
}

const glassNav = {
  background: 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.7)',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
}

// ── Reusable Components ───────────────────────────────────
function FallbackImg({ src, alt, className, style, wrapClass }) {
  const [err, setErr] = useState(false)
  return (
    <div className={wrapClass || ''} style={{ overflow: 'hidden' }}>
      {err ? (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ ...glass, background: 'rgba(91,141,238,0.12)' }}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={className || 'w-full h-full object-contain'}
          style={style}
          onError={() => setErr(true)}
        />
      )}
    </div>
  )
}

function SkillPill({ label }) {
  return (
    <span
      className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-medium text-slate-700 rounded-full"
      style={{ background: 'rgba(91,141,238,0.10)', border: '1px solid rgba(91,141,238,0.18)' }}
    >
      {label}
    </span>
  )
}

function GlassCard({ children, className = '', style = {}, hover = true }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`transition-all duration-300 ${className}`}
      style={{
        ...(hovered && hover ? glassHover : glass),
        ...(!hovered || !hover ? glass : {}),
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  )
}

// ── Main App ──────────────────────────────────────────────
export default function App() {
  const containerRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Inject fonts + keyframe animations + responsive helpers
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

      html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      * { -webkit-tap-highlight-color: transparent; }
      body { overflow-x: hidden; }
      .snap-section { will-change: opacity; transform: translateZ(0); }
      .section-animate { will-change: opacity; transform: translateZ(0); }

      @keyframes float {
        0%, 100% { transform: translateY(0px) translateZ(0); }
        50% { transform: translateY(-20px) translateZ(0); }
      }
      @keyframes floatSm {
        0%, 100% { transform: translateY(0px) translateZ(0); }
        50% { transform: translateY(-10px) translateZ(0); }
      }
      @keyframes bobAvatar {
        0%, 100% { transform: translateY(0px) translateZ(0); }
        50% { transform: translateY(-12px) translateZ(0); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px) translateZ(0); }
        to { opacity: 1; transform: translateY(0) translateZ(0); }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(91,141,238,0.4); }
        50% { box-shadow: 0 0 20px 8px rgba(91,141,238,0.2); }
      }
      @keyframes orbFloat1 {
        0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
        50% { transform: translateY(-30px) translateX(15px) translateZ(0); }
      }
      @keyframes orbFloat2 {
        0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
        50% { transform: translateY(25px) translateX(-20px) translateZ(0); }
      }
      @keyframes orbFloat3 {
        0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
        50% { transform: translateY(-18px) translateX(-12px) translateZ(0); }
      }
      @keyframes orbFloat4 {
        0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
        50% { transform: translateY(22px) translateX(18px) translateZ(0); }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(100%) translateZ(0); }
        to { opacity: 1; transform: translateX(0) translateZ(0); }
      }
      @keyframes rotateIcons {
        0% { transform: rotate(0deg) translateZ(0); }
        100% { transform: rotate(360deg) translateZ(0); }
      }
      @keyframes counterRotateIcons {
        0% { transform: rotate(0deg) translateZ(0); }
        100% { transform: rotate(-360deg) translateZ(0); }
      }
      @keyframes scrollBand {
        0% { transform: translateX(0) translateZ(0); }
        100% { transform: translateX(-50%) translateZ(0); }
      }
      @keyframes signalRing {
        0% { transform: translate(-50%,-50%) scale(0.6); opacity: 0.9; }
        70% { opacity: 0.25; }
        100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-28px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes floatImg {
        0%, 100% { transform: translateY(0px) scale(1.08); }
        50%       { transform: translateY(-10px) scale(1.08); }
      }
      .signal-ring { animation: signalRing 2s ease-out infinite; pointer-events: none; }
      .fade-in-up { animation: fadeInUp 0.8s ease-out both; }
      .nav-link { position: relative; }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -2px; left: 50%; width: 0; height: 2px;
        background: #1e293b;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      .nav-link:hover::after { width: 80%; }
      .cta-btn:hover { animation: pulseGlow 2s infinite; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-thumb { background: rgba(91,141,238,0.3); border-radius: 3px; }

      /* On mobile, disable scroll snap so content flows naturally */
      @media (max-width: 767px) {
        .snap-container { scroll-snap-type: none !important; }
        .snap-section { scroll-snap-align: none !important; min-height: auto !important; }
      }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])

  // IntersectionObserver for fade-in
  useEffect(() => {
    const sections = document.querySelectorAll('.section-animate')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('fade-in-up')
        })
      },
      { threshold: 0.08 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ]

  // ── RENDER ────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className="snap-container"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        background: 'linear-gradient(135deg, #d8e3f5, #e5eaf5, #dde8f8)',
      }}
    >
      {/* ── Floating Orbs (fixed, responsive sizes) ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <div
          className="absolute rounded-full"
          style={{
            width: 'min(340px, 55vw)', height: 'min(340px, 55vw)', top: '8%', left: '5%',
            background: 'radial-gradient(circle, rgba(91,141,238,0.25), transparent 70%)',
            filter: 'blur(60px)', animation: 'orbFloat1 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 'min(280px, 45vw)', height: 'min(280px, 45vw)', top: '55%', right: '8%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)',
            filter: 'blur(50px)', animation: 'orbFloat2 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 'min(220px, 38vw)', height: 'min(220px, 38vw)', bottom: '15%', left: '30%',
            background: 'radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)',
            filter: 'blur(45px)', animation: 'orbFloat3 9s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full hidden sm:block"
          style={{
            width: 200, height: 200, top: '30%', left: '60%',
            background: 'radial-gradient(circle, rgba(244,114,182,0.18), transparent 70%)',
            filter: 'blur(40px)', animation: 'orbFloat4 11s ease-in-out infinite',
          }}
        />
      </div>

      {/* ── Sticky Nav ──────────────────────────────── */}
      <nav
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 sm:px-4 py-2"
        style={{ ...glassNav, maxWidth: 920, width: '94%' }}
      >
        {/* Logo */}
        <div
          className="flex-shrink-0 bg-slate-900 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          AMR
        </div>

        {/* Desktop Links */}
        <div className="flex-1 hidden md:flex items-center justify-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-link text-xs font-medium text-slate-700 px-2.5 py-1 hover:text-slate-900 cursor-pointer"
              style={{ fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none' }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop Resume */}
        <a
          href="#"
          className="hidden md:block flex-shrink-0 bg-slate-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-slate-800 transition-colors"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto p-1.5 rounded-lg hover:bg-white/40 transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none' }}
        >
          {menuOpen ? <X size={20} className="text-slate-800" /> : <Menu size={20} className="text-slate-800" />}
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ──────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute top-16 right-3 w-56 flex flex-col gap-1 p-4"
            style={{
              ...glass,
              background: 'rgba(255,255,255,0.88)',
              borderRadius: 16,
              animation: 'slideIn 0.25s ease-out both',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-sm font-medium text-slate-700 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                style={{ fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none' }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="#"
              className="mt-2 text-center bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-slate-800 transition-colors no-underline"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Resume
            </a>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════ */}
      <section
        id="about"
        className="snap-section section-animate relative flex flex-col md:flex-row items-center justify-center px-5 sm:px-8 md:px-16 gap-4 sm:gap-6 md:gap-8 pt-20 sm:pt-24 pb-8"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Avatar */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-[380px] min-h-[360px] sm:min-h-0 sm:max-w-sm md:max-w-none">
          {/* Soft orbs behind avatar */}
          <div className="absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full" style={{ background: 'rgba(91,141,238,0.10)', filter: 'blur(40px)', top: '10%', left: '15%', zIndex: -1 }} />
          <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full" style={{ background: 'rgba(168,85,247,0.08)', filter: 'blur(30px)', bottom: '10%', right: '20%', zIndex: -1 }} />

          {/* Rotating tech icons container */}
          <div className="absolute w-full h-full" style={{ animation: 'rotateIcons 20s linear infinite' }}>
            {/* Floating tech icons — visible on all screen sizes */}
            <div className="absolute" style={{ top: '8%', left: '8%', animation: 'float 4s ease-in-out infinite, counterRotateIcons 20s linear infinite' }}>
              <FallbackImg src={pythonIcon} alt="Python" wrapClass="w-20 h-20 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-40 lg:h-40" />
            </div>
            <div className="absolute" style={{ top: '8%', right: '8%', animation: 'float 5s ease-in-out infinite 0.5s, counterRotateIcons 20s linear infinite' }}>
              <FallbackImg src={azureIcon} alt="Azure" wrapClass="w-20 h-20 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-40 lg:h-40" />
            </div>
            <div className="absolute" style={{ bottom: '8%', right: '8%', animation: 'float 4.5s ease-in-out infinite 1s, counterRotateIcons 20s linear infinite' }}>
              <FallbackImg src={sqlIcon} alt="SQL" wrapClass="w-20 h-20 sm:w-10 sm:h-10 md:w-13 md:h-13 lg:w-40 lg:h-40" />
            </div>
            <div className="absolute" style={{ bottom: '8%', left: '8%', animation: 'float 4s ease-in-out infinite, counterRotateIcons 20s linear infinite' }}>
              <FallbackImg src={reactIcon} alt="React" wrapClass="w-20 h-20 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-40 lg:h-40" />
            </div>
          </div>

          {/* Avatar */}
          <div style={{ animation: 'bobAvatar 3s ease-in-out infinite' }}>
            <FallbackImg
              src={avatarImg}
              alt="Mohan Rao Appikatla avatar"
              wrapClass="w-56 h-56 sm:w-48 sm:h-48 md:w-48 md:h-48 lg:w-90 lg:h-150 rounded-full"
              style={{ objectFit: 'contain' }}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-2.5 sm:gap-3 md:gap-4 max-w-xl text-center md:text-left">
          <span
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-slate-600"
            style={glass}
          >
            <span aria-hidden="true" style={{ position: 'relative', display: 'inline-block', width: 14, height: 14, flexShrink: 0 }}>
              <span
                style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #34D399, #059669)',
                  boxShadow: '0 0 14px rgba(16,185,129,0.36)',
                  display: 'block',
                }}
              />
              <span
                className="signal-ring"
                style={{
                  position: 'absolute', left: '50%', top: '50%', width: 10, height: 10, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(52,211,153,0.28), rgba(16,185,129,0.08))',
                  border: '1px solid rgba(52,211,153,0.28)',
                  transform: 'translate(-50%,-50%)'
                }}
              />
            </span>
            <span className="leading-none">Azure Data Engineer | Python Developer</span>
          </span>

          <h1
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            MOHAN RAO<br/>APPIKATLA
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-md px-2 sm:px-0"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Motivated data solutions engineer leveraging strong Python, SQL, ETL,
            and cloud services (Azure) for efficient, scalable pipelines and
            advanced analytics. Committed to clean, maintainable code.
          </p>

          <button
            onClick={() => scrollTo('projects')}
            className="cta-btn mt-1 sm:mt-2 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            SEE MY WORK
          </button>

          {/* Scroll indicator — desktop only */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-50"
            style={{ animation: 'float 2s ease-in-out infinite' }}>
            <span className="text-xs text-slate-500">Scroll</span>
            <ChevronDown size={18} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Reliable •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 2 — ABOUT ME
      ════════════════════════════════════════════════ */}
      <section
        id="work"
        className="snap-section section-animate relative flex flex-col md:flex-row items-center justify-center px-5 sm:px-8 md:px-16 gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Text */}
        <div className="flex flex-col justify-center gap-2.5 sm:gap-3 md:gap-4 max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            My Story
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            ABOUT ME
          </h2>
          <p className="text-sm sm:text-base font-medium text-blue-600"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Passionate about building scalable data solutions
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            My professional passion lies in growing and analyzing data, automating
            pipelines, and driving professional transitions through clean,
            maintainable engineering.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            I thrive on building end-to-end solutions — from cloud data pipelines
            to ML integrations — always focused on measurable impact and technical
            excellence.
          </p>
        </div>

        {/* Right — Illustration + Stats */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 w-full mx-auto md:ml-auto">
          <div style={{ animation: 'float 6s ease-in-out infinite' }}>
            <FallbackImg
              src={aboutIllustration}
              alt="About illustration"
              wrapClass="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-100 lg:h-100"
            />
          </div>
          <GlassCard className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 w-full max-w-xs sm:max-w-sm" hover={false}>
            {[
              { num: '3+', label: 'Internships' },
              { num: '10+', label: 'Projects' },
              { num: '2', label: 'Patents' },
              { num: '2+', label: 'Research Papers' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {s.num}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </GlassCard>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Efficient •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 3 — SKILLS & EXPERTISE
      ════════════════════════════════════════════════ */}
      <section
        id="skills"
        className="snap-section section-animate relative flex flex-col md:flex-row items-start md:items-center justify-start px-4 sm:px-6 md:px-10 gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Illustration */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:flex-1 md:max-w-xs mb-4 md:mb-0">
          <FallbackImg src={skillsIllustration} alt="Skills illustration" wrapClass="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72" />
        </div>

        {/* Right — Title + Skills Grid */}
        <div className="flex-1 w-full flex flex-col gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              SKILLS &amp; EXPERTISE
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full pb-4 sm:pb-8">
          {/* Col 1 — Data Engineering */}
          <GlassCard className="p-3.5 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
              <Database size={16} className="text-blue-500 sm:w-[18px] sm:h-[18px]" />
              <span className="font-bold text-xs sm:text-sm text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
                Data Engineering
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Azure Data Factory', 'Databricks', 'ADLS Gen2', 'Synapse',
                'SQL Server', 'Spark', 'ETL/ELT', 'Data Modeling', 'Data Warehousing'].map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </GlassCard>

          {/* Col 2 — Programming */}
          <GlassCard className="p-3.5 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
              <Code2 size={16} className="text-blue-500 sm:w-[18px] sm:h-[18px]" />
              <span className="font-bold text-xs sm:text-sm text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
                Programming
              </span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-600">Experienced:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['C++', 'Python', 'SQL', 'R'].map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 sm:mt-1">Beginner:</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <SkillPill label="Java" />
            </div>
          </GlassCard>

          {/* Col 3 — Web Development */}
          <GlassCard className="p-3.5 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
              <Globe size={16} className="text-blue-500 sm:w-[18px] sm:h-[18px]" />
              <span className="font-bold text-xs sm:text-sm text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
                Web Development
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['HTML', 'CSS', 'React.js', 'Django', 'Flask', 'Git & GitHub'].map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </GlassCard>

          {/* Col 4 — Other */}
          <GlassCard className="p-3.5 sm:p-4 md:p-5 flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
              <Wrench size={16} className="text-blue-500 sm:w-[18px] sm:h-[18px]" />
              <span className="font-bold text-xs sm:text-sm text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>
                Other
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['SQL Advanced', 'PostgreSQL', 'Power BI', 'n8n', 'AI Tools', 'Prompting', 'ChatGPT'].map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </GlassCard>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Performant •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 4 — FEATURED PROJECTS (Swipe Cards)
      ════════════════════════════════════════════════ */}
      <SwipeProjects containerRef={containerRef} />

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Secure •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 5 — EXPERIENCE & EDUCATION
      ════════════════════════════════════════════════ */}
      <section
        id="education"
        className="snap-section section-animate relative flex flex-col md:flex-row items-stretch justify-center px-4 sm:px-6 md:px-12 gap-4 sm:gap-5 md:gap-6 py-16 sm:py-20"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Experience */}
        <GlassCard className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5 md:gap-6" hover={false}>
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Professional Journey
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              EXPERIENCE
            </h2>
          </div>

          {/* Entry 1 */}
          <div className="flex items-start gap-3 sm:gap-4">
            <FallbackImg src={nighatechLogo} alt="NighaTech logo" wrapClass="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex-shrink-0 overflow-hidden" />
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">NighaTech Global Pvt. Ltd.</h3>
              <p className="text-[10px] sm:text-[11px] md:text-xs text-blue-600 font-medium">AI &amp; IoT Intern, June–August 2025, Onsite</p>
              <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500 mt-1 leading-relaxed">
                Worked on integrating AI models with IoT systems and deploying
                cloud-based AI and data engineering solutions using Microsoft Azure.
              </p>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="flex items-start gap-3 sm:gap-4">
            <FallbackImg src={perfectLogo} alt="Perfect & Complete Solutions logo" wrapClass="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex-shrink-0 overflow-hidden" />
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800">Perfect and Complete Solutions Inc</h3>
              <p className="text-[10px] sm:text-[11px] md:text-xs text-blue-600 font-medium">Azure Cloud Data Engineer &amp; Backend Developer (FastAPI), Nov 2025–April 2026, Onsite</p>
              <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500 mt-1 leading-relaxed">
                Worked as an Azure Cloud Data Engineer and Backend Developer using FastAPI. Built and maintained scalable cloud data pipelines, authored RESTful APIs, and deployed solutions on Microsoft Azure.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Right — Education */}
        <GlassCard className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 md:gap-5" hover={false}>
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Educational Path
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              EDUCATION
            </h2>
          </div>

          {[
            { logo: nriLogo, name: 'NRI Institute of Technology', detail: 'B.Tech AI & ML, 8.0 CGPA, 2022–Present' },
            { logo: srCollegeLogo, name: 'SR Junior College', detail: 'Intermediate, 75%, 2020–2022' },
            { logo: balaVignanLogo, name: 'Bala Vignan Public Schools', detail: '10th Grade, 98%, 2020' },
          ].map((ed) => (
            <div key={ed.name} className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl" style={{ background: 'rgba(91,141,238,0.05)' }}>
              <FallbackImg src={ed.logo} alt={ed.name + ' logo'} wrapClass="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex-shrink-0 overflow-hidden" />
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800">{ed.name}</h3>
                <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500">{ed.detail}</p>
              </div>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Interactive •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 6 — ACHIEVEMENTS
      ════════════════════════════════════════════════ */}
      <section
        id="achievements"
        className="snap-section section-animate relative flex flex-col md:flex-row items-stretch justify-center px-4 sm:px-6 md:px-12 gap-4 sm:gap-5 md:gap-6 py-16 sm:py-20"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Trophy list */}
        <GlassCard className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 md:gap-5" hover={false}>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
            Certificates &amp; Achievements
          </span>
          <FallbackImg src={achievementIllustration} alt="Achievement illustration" wrapClass="w-16 h-16 sm:w-20 sm:h-20 md:w-100 md:h-100 mx-auto" />

          {[
            { text: 'Research Papers Published: "Sentiment Analysis using BERT..." — IT Indore, 16th National Conference & "Data Pipeline Optimization with Cloud Services"' },
            { text: 'Patent Holder: "AI-Driven Automated Triage System..."' },
            { text: 'Selected as Google Arcade Facilitator' },
            { text: 'Participated in Hackathons & Tech Meetups' },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
              <Trophy size={15} className="text-amber-500 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {a.text}
              </p>
            </div>
          ))}
        </GlassCard>

        {/* Right — Stat cards */}
        <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {[
            { num: '2', label: 'Patents', color: 'rgba(91,141,238,0.12)', glow: 'rgba(91,141,238,0.25)' },
            { num: '2+', label: 'Research Papers', color: 'rgba(168,85,247,0.12)', glow: 'rgba(168,85,247,0.25)' },
            { num: '4+', label: 'Hackathons', color: 'rgba(45,212,191,0.12)', glow: 'rgba(45,212,191,0.25)' },
            { num: '1', label: 'Google Facilitator', color: 'rgba(251,146,60,0.14)', glow: 'rgba(251,146,60,0.25)' },
          ].map((s) => (
            <StatGlowCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SCROLLING BAND
      ════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-900 py-1 overflow-hidden" style={{ position: 'relative', transform: 'skewY(-2deg)' }}>
        <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'scrollBand 40s linear infinite', display: 'inline-flex' }}>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Scalable •</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SECTION 7 — CONTACT
      ════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="snap-section section-animate relative flex flex-col md:flex-row items-stretch justify-center px-4 sm:px-6 md:px-12 gap-4 sm:gap-5 md:gap-6 py-16 sm:py-20"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
      >
        {/* Left — Contact info */}
        <GlassCard className="flex-1 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 md:gap-5" hover={false}>
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Get In Touch
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-1"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              CONTACT
            </h2>
          </div>

          <div style={{ animation: 'float 5s ease-in-out infinite 0.3s' }}>
            <FallbackImg src={contactIllustration} alt="Contact illustration" wrapClass="w-32 h-32 sm:w-40 sm:h-40 md:w-100 md:h-100 mx-auto" />
          </div>

          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
            {[
              { icon: <Phone size={14} className="sm:w-4 sm:h-4" />, text: '+91 9701231548' },
              { icon: <Mail size={14} className="sm:w-4 sm:h-4" />, text: 'mohanraoappikatla@gmail.com' },
              { icon: <LinkIcon size={14} className="sm:w-4 sm:h-4" />, text: 'Portfolio' },
              { icon: <MapPin size={14} className="sm:w-4 sm:h-4" />, text: 'Vijayawada, Andhra Pradesh, India' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                <div className="text-blue-500 flex-shrink-0">{c.icon}</div>
                <span className="text-[11px] sm:text-xs md:text-sm text-slate-600 break-all sm:break-normal" style={{ fontFamily: 'DM Sans, sans-serif' }}>{c.text}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Right — Social cards */}
        <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {[
            {
              icon: linkedinIcon,
              label: 'LinkedIn',
              value: 'mohan-rao-appikatla',
              href: 'https://www.linkedin.com/in/mohan-rao-appikatla-198375269',
              bg: 'rgba(10,102,194,0.08)',
              glow: 'rgba(10,102,194,0.2)',
            },
            {
              icon: githubIcon,
              label: 'GitHub',
              value: 'mohannaidu2004',
              href: 'https://github.com/mohannaidu2004',
              bg: 'rgba(36,41,47,0.08)',
              glow: 'rgba(36,41,47,0.18)',
            },
            {
              icon: hackerrankIcon,
              label: 'HackerRank',
              value: '@mohannaidu2004',
              href: 'https://www.hackerrank.com/mohannaidu2004',
              bg: 'rgba(0,168,59,0.08)',
              glow: 'rgba(0,168,59,0.2)',
            },
            {
              icon: gmailIcon,
              label: 'Gmail',
              value: 'mohanraoappikatla@gmail.com',
              href: 'mailto:mohanraoappikatla@gmail.com',
              bg: 'rgba(234,67,53,0.08)',
              glow: 'rgba(234,67,53,0.2)',
            },
          ].map((s) => (
            <SocialCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="py-6 sm:py-8 text-center">
        <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          &copy; {new Date().getFullYear()} Mohan Rao Appikatla. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

// ── Sub-Components ───────────────────────────────────────

// Project data lives outside component — static, never recreated
const PROJECTS = [
  {
    img: threyaMockup,
    title: 'Threya Sindhoor',
    subtitle: 'Client Requested Project',
    desc: 'Built a complete web application for a traditional sindhoor brand with modern UI, product showcase, and seamless shopping experience.',
    tags: ['React', 'FastAPI'],
    link: 'https://github.com/mohannaidu2004/Threya.git',
    accentColor: '#87ceeb',
    accentEnd: '#4a90d9',
    cardBg: '#ffffff',
    cardBgSolid: '#ffffff',
  },
  {
    img: departMockup,
    title: 'Department Portal',
    subtitle: 'AI & ML Dept — NRI Institute of Technology',
    desc: 'Contributed to building the official AI & ML department portal with student profiles, faculty info, events, and department resources.',
    tags: ['Bootstrap', 'Django'],
    link: 'https://github.com/mohannaidu2004/Department_web.git',
    accentColor: '#87ceeb',
    accentEnd: '#4a90d9',
    cardBg: '#ffffff',
    cardBgSolid: '#ffffff',
  },
  {
    img: n8nMockup,
    title: 'n8n Automations',
    subtitle: 'Self Interest — Workflow Automation',
    desc: 'Automated daily tasks and workflows using n8n to make daily and work life easier with connected integrations.',
    tags: ['n8n', 'Automation'],
    link: 'https://github.com/mohannaidu2004/Smart-Job-Referral-Mail-Automation----n8n.git',
    accentColor: '#87ceeb',
    accentEnd: '#4a90d9',
    cardBg: '#ffffff',
    cardBgSolid: '#ffffff',
  },
  {
    img: dashMockup,
    title: 'SQL Dashboards',
    subtitle: 'Skill Development — Data Analytics',
    desc: 'Built interactive SQL dashboards to improve skills on SQL and database-related technologies using PostgreSQL.',
    tags: ['PostgreSQL', 'SQL'],
    link: '#',
    accentColor: '#87ceeb',
    accentEnd: '#4a90d9',
    cardBg: '#ffffff',
    cardBgSolid: '#ffffff',
  },
]

function SwipeProjects({ containerRef }) {
  const sectionRef = useRef(null)
  const cardStackRef = useRef(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const transitioningRef = useRef(false)
  const inViewRef = useRef(false)
  const touchStartY = useRef(0)

  const go = useCallback((idx) => {
    if (transitioningRef.current) return
    if (idx < 0 || idx >= PROJECTS.length) return
    transitioningRef.current = true
    activeIndexRef.current = idx
    setActiveIndex(idx)
    setTimeout(() => { transitioningRef.current = false }, 700)
  }, [])

  // Track section visibility
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        if (!entry.isIntersecting) {
          activeIndexRef.current = 0
          setActiveIndex(0)
        }
      },
      { threshold: 0.6 }
    )
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  // Desktop: wheel event to cycle cards
  useEffect(() => {
    const container = containerRef?.current
    if (!container) return
    const onWheel = (e) => {
      if (!inViewRef.current || transitioningRef.current) return
      const idx = activeIndexRef.current
      if (e.deltaY > 0 && idx < PROJECTS.length - 1) {
        e.preventDefault()
        go(idx + 1)
      } else if (e.deltaY < 0 && idx > 0) {
        e.preventDefault()
        go(idx - 1)
      }
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [containerRef, go])

  // Mobile: touch swipe on card stack
  useEffect(() => {
    const el = cardStackRef.current
    if (!el) return
    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY }
    const onTouchMove = (e) => {
      if (transitioningRef.current) return
      const deltaY = touchStartY.current - e.touches[0].clientY
      const idx = activeIndexRef.current
      if ((deltaY > 30 && idx < PROJECTS.length - 1) || (deltaY < -30 && idx > 0)) {
        e.preventDefault()
      }
    }
    const onTouchEnd = (e) => {
      if (transitioningRef.current) return
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const idx = activeIndexRef.current
      if (deltaY > 50 && idx < PROJECTS.length - 1) go(idx + 1)
      else if (deltaY < -50 && idx > 0) go(idx - 1)
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [go])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="snap-section section-animate relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 gap-4 sm:gap-5 py-14"
      style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 text-center"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        FEATURED PROJECTS
      </h2>

      {/* Card Stack */}
      <div
        ref={cardStackRef}
        className="relative w-full"
        style={{ height: 'clamp(380px, 65vh, 580px)', maxWidth: 'calc(100vw - 32px)', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {PROJECTS.map((proj, i) => {
          const state = i < activeIndex ? 'swiped' : i === activeIndex ? 'active' : 'upcoming'
          const offset = i - activeIndex

          return (
            <div
              key={proj.title}
              className="absolute inset-0"
              style={{
                transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms ease',
                zIndex: state === 'active' ? 20 : state === 'swiped' ? 5 : Math.max(1, 15 - offset),
                transform:
                  state === 'swiped'
                    ? 'translateX(-115%) rotate(-10deg) scale(0.88)'
                    : state === 'active'
                    ? 'translateX(0) rotate(0deg) scale(1)'
                    : `translateY(${Math.min(offset, 3) * 16}px) scale(${1 - Math.min(offset, 3) * 0.04})`,
                opacity: state === 'swiped' ? 0 : state === 'active' ? 1 : Math.max(0, 1 - offset * 0.35),
                pointerEvents: state === 'active' ? 'auto' : 'none',
              }}
            >
              {/* Card shell */}
              <div
                className="w-full h-full flex items-stretch overflow-hidden"
                style={{
                  borderRadius: 24,
                  background: '#ffffff',
                  border: '1px solid rgba(15,23,42,0.04)',
                  boxShadow: state === 'active'
                    ? '0 28px 70px rgba(2,6,23,0.08), 0 8px 28px rgba(2,6,23,0.06)'
                    : '0 8px 24px rgba(2,6,23,0.04)',
                }}
              >
                {/* ── LEFT: Text ───────────────────────────── */}
                <div
                  className="w-full md:w-auto flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-8 lg:p-10 relative overflow-hidden"
                  style={{ flex: state === 'active' ? '0 0 100% md:54%' : '0 0 54%', minWidth: 0 }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-12 bottom-12 w-1.5 rounded-r-full"
                    style={{ background: `linear-gradient(to bottom, ${proj.accentColor}, ${proj.accentEnd})` }}
                  />

                  {/* Watermark project number */}
                  <span
                    className="absolute select-none pointer-events-none leading-none"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(72px, 10vw, 110px)',
                      opacity: 0.055,
                      right: 20,
                      bottom: -8,
                      color: proj.accentColor,
                    }}
                  >
                    0{i + 1}
                  </span>

                  {/* Content — re-keyed so entrance animation fires on every card change */}
                  <div
                    key={`content-${activeIndex}`}
                    style={{ animation: state === 'active' ? 'slideInLeft 0.5s ease-out both' : 'none' }}
                  >
                    <p
                      className="text-[9px] sm:text-xs md:text-[11px] font-bold uppercase tracking-widest mb-1 sm:mb-2"
                      style={{ color: proj.accentColor, fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {proj.subtitle}
                    </p>
                    <h3
                      className="text-base sm:text-lg md:text-2xl lg:text-[1.75rem] font-extrabold text-slate-900 mb-1 sm:mb-2 leading-tight"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-relaxed mb-2 sm:mb-3 md:mb-4"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-5">
                      {proj.tags.map((t, ti) => (
                        <span
                          key={t}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[10px] md:text-xs font-semibold rounded-full"
                          style={{
                            background: `${proj.accentColor}18`,
                            color: proj.accentColor,
                            border: `1px solid ${proj.accentColor}30`,
                            animation: state === 'active' ? `fadeInUp 0.5s ease-out ${0.15 + ti * 0.08}s both` : 'none',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[9px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full no-underline transition-all duration-200 hover:scale-105 w-fit"
                      style={{
                        background: proj.accentColor,
                        color: '#fff',
                        fontFamily: 'DM Sans, sans-serif',
                        boxShadow: `0 4px 16px ${proj.accentColor}45`,
                        animation: state === 'active' ? 'fadeInUp 0.5s ease-out 0.3s both' : 'none',
                      }}
                    >
                      <LinkIcon size={11} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">View Project</span>
                      <span className="sm:hidden">Link</span>
                    </a>
                  </div>
                </div>

                {/* ── RIGHT: Mockup — no padding, touches right border ── */}
                <div
                  className="hidden md:block relative overflow-hidden"
                  style={{ flex: '0 0 46%' }}
                >
                  {/* Soft gradient blend on the left edge of the image panel */}
                  <div
                    className="absolute inset-y-0 left-0 z-10 pointer-events-none"
                    style={{ width: 80, background: `linear-gradient(to right, ${proj.cardBgSolid}, transparent)` }}
                  />
                  <img
                    src={proj.img}
                    alt={proj.title}
                    loading="eager"
                    decoding="async"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '110%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'right center',
                      filter: 'drop-shadow(-6px 4px 20px rgba(0,0,0,0.12))',
                      animation: state === 'active' ? 'floatImg 5s ease-in-out infinite' : 'none',
                    }}
                  />
                </div>

                {/* Mobile: clear mockup image display on right side */}
                <div className="md:hidden absolute top-0 right-0 w-2/5 sm:w-1/3 h-full overflow-hidden pointer-events-none" style={{ opacity: state === 'active' ? 0.35 : 0.2 }}>
                  <img
                    src={proj.img}
                    alt=""
                    aria-hidden
                    loading="eager"
                    decoding="async"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain', 
                      objectPosition: 'right center',
                      filter: 'none',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation: prev/dots/next */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4">
        <button
          onClick={() => go(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all duration-200 disabled:opacity-30 hover:scale-110 cursor-pointer disabled:cursor-not-allowed"
          style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(2,6,23,0.08)' }}
          aria-label="Previous project"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeIndex ? 20 : 6,
                height: 6,
                background: i === activeIndex ? PROJECTS[activeIndex].accentColor : 'rgba(91,141,238,0.30)',
                border: 'none',
                padding: 0,
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => go(activeIndex + 1)}
          disabled={activeIndex === PROJECTS.length - 1}
          className="p-1.5 sm:p-2 md:p-2.5 rounded-full transition-all duration-200 disabled:opacity-30 hover:scale-110 cursor-pointer disabled:cursor-not-allowed"
          style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(2,6,23,0.08)' }}
          aria-label="Next project"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      <p
        className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 text-center px-4"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        Scroll or use arrows &middot; {activeIndex + 1} / {PROJECTS.length}
      </p>
    </section>
  )
}

function StatGlowCard({ num, label, color, glow }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2 p-3 sm:p-4 md:p-6 transition-all duration-300"
      style={{
        ...glass,
        background: color,
        ...(hovered && { boxShadow: `0 12px 36px ${glow}`, transform: 'translateY(-6px)' }),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900" style={{ fontFamily: 'Syne, sans-serif' }}>
        {num}
      </div>
      <div className="text-[9px] sm:text-[10px] md:text-xs font-medium text-slate-600 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {label}
      </div>
    </div>
  )
}

function SocialCard({ icon, label, value, href, bg, glow }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 p-3 sm:p-4 md:p-5 transition-all duration-300 no-underline"
      style={{
        ...glass,
        background: bg,
        borderRadius: 20,
        ...(hovered && { boxShadow: `0 12px 36px ${glow}`, transform: 'translateY(-6px)' }),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FallbackImg src={icon} alt={label} wrapClass="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      <div className="text-center min-w-0 w-full">
        <div className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-800" style={{ fontFamily: 'Syne, sans-serif' }}>{label}</div>
        <div className="text-[9px] sm:text-[10px] md:text-[11px] text-slate-500 mt-0.5 break-all leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>{value}</div>
      </div>
    </a>
  )
}
