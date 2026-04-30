import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = ["Home", "About", "Services", "Contact"];
const SERVICE_LINKS = ["Precision", "Sheet Metal", "Automation Components", "Additive Manufacturing"];
const PHONES = ["+65 89014965"];
const EMAIL = "sales@hygenists.com";
const ADDRESS = "48 Toh Guan East Road #08-100 Enterprises Hup,Singapore";

const PhoneIcon = () => (
    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h3.5l1.5 4-2 1.5a11 11 0 005.5 5.5L13 12l4 1.5V17a1 1 0 01-1 1C6 18 2 12 2 4a1 1 0 011-1z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 flex-shrink-0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 7l8 5 8-5" />
    </svg>
);

const PinIcon = () => (
    <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
        <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 14 10" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 5h12M8 1l4 4-4 4" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

export default function Footer() {
    const footerRef = useRef(null);
    const topBarRef = useRef(null);
    const logoRef = useRef(null);
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);
    const bottomRef = useRef(null);
    const linkRefs = useRef([]);
    const serviceRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Top gold bar sweep
            gsap.from(topBarRef.current, {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.2,
                ease: "expo.inOut",
                scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
            });

            // Logo
            gsap.from(logoRef.current, {
                y: 24, opacity: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
                delay: 0.2,
            });

            // Columns stagger
            [col1Ref, col2Ref, col3Ref].forEach((ref, i) => {
                gsap.from(ref.current, {
                    y: 30, opacity: 0, duration: 0.7, ease: "power3.out",
                    scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
                    delay: 0.3 + i * 0.12,
                });
            });

            // Bottom bar
            gsap.from(bottomRef.current, {
                y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: bottomRef.current, start: "top 98%" },
            });

        }, footerRef);

        // Nav link hovers
        linkRefs.current.forEach((el) => {
            if (!el) return;
            const arrow = el.querySelector(".link-arrow");
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { x: 4, color: "#C9A227", duration: 0.25, ease: "power2.out" });
                gsap.to(arrow, { x: 3, opacity: 1, duration: 0.25, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { x: 0, color: "rgba(255,255,255,0.5)", duration: 0.25 });
                gsap.to(arrow, { x: 0, opacity: 0, duration: 0.25 });
            });
        });

        serviceRefs.current.forEach((el) => {
            if (!el) return;
            const arrow = el.querySelector(".link-arrow");
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { x: 4, color: "#C9A227", duration: 0.25, ease: "power2.out" });
                gsap.to(arrow, { x: 3, opacity: 1, duration: 0.25, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { x: 0, color: "rgba(255,255,255,0.5)", duration: 0.25 });
                gsap.to(arrow, { x: 0, opacity: 0, duration: 0.25 });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="relative bg-[#0a0a0a] overflow-hidden"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />



            {/* ── MAIN CONTENT ── */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* ── COL 0: Brand ── */}
                    <div ref={logoRef} className="lg:col-span-1 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div
                                className="w-11 h-11 bg-[#C9A227] flex items-center justify-center font-black text-[15px] text-black flex-shrink-0"
                                style={{ fontFamily: "'Rajdhani', sans-serif", clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}
                            >
                                HS
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-white font-bold text-[14px] tracking-[0.1em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                    Hygenists Shield
                                </span>
                                <span className="text-white/35 text-[9px] tracking-[0.2em] uppercase font-light">
                                    Pte Ltd.
                                </span>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-white/40 text-[12px] leading-relaxed font-light max-w-[220px]">
                            Advanced hygiene protection solutions for businesses in Singapore.
                        </p>

                        {/* Social */}
                        <div className="space-y-3">
                            <p className="text-[9px] font-semibold tracking-[0.28em] uppercase text-white/25">
                                Find us on
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.facebook.com/hygenists"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-9 h-9 border border-white/10 text-white/40 transition-none"
                                    style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}
                                    onMouseEnter={e => gsap.to(e.currentTarget, { backgroundColor: "#1877F2", borderColor: "#1877F2", color: "#fff", duration: 0.25 })}
                                    onMouseLeave={e => gsap.to(e.currentTarget, { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", duration: 0.25 })}
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/hygenists/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-9 h-9 border border-white/10 text-white/40 transition-none"
                                    style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}
                                    onMouseEnter={e => gsap.to(e.currentTarget, { backgroundColor: "#0A66C2", borderColor: "#0A66C2", color: "#fff", duration: 0.25 })}
                                    onMouseLeave={e => gsap.to(e.currentTarget, { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", duration: 0.25 })}
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── COL 1: Navigate ── */}
                    <div ref={col1Ref} className="space-y-6">
                        <div>
                            <h4
                                className="text-white font-bold text-[12px] tracking-[0.22em] uppercase mb-1"
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                Navigate
                            </h4>
                            <div className="w-8 h-[2px] bg-[#C9A227]" />
                        </div>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link, i) => (
                                <li key={link}>
                                    <a
                                        href={link === "Home" ? "/" : link.toLowerCase().replace(" ", "-")}
                                        ref={el => linkRefs.current[i] = el}
                                        className="inline-flex items-center gap-2 text-white/50 text-[12px] tracking-wide cursor-pointer select-none transition-none"
                                    >
                                        <span className="link-arrow opacity-0 text-[#C9A227]"><ArrowIcon /></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── COL 2: Services ── */}
                    <div ref={col2Ref} className="space-y-6">
                        <div>
                            <h4
                                className="text-white font-bold text-[12px] tracking-[0.22em] uppercase mb-1"
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                Services
                            </h4>
                            <div className="w-8 h-[2px] bg-[#C9A227]" />
                        </div>
                        <ul className="space-y-3">
                            {SERVICE_LINKS.map((link, i) => (
                                <li key={link}>
                                    <a
                                        href="#services"
                                        ref={el => serviceRefs.current[i] = el}
                                        className="inline-flex items-center gap-2 text-white/50 text-[12px] tracking-wide cursor-pointer select-none transition-none"
                                    >
                                        <span className="link-arrow opacity-0 text-[#C9A227]"><ArrowIcon /></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── COL 3: Contact ── */}
                    <div ref={col3Ref} className="space-y-6">
                        <div>
                            <h4
                                className="text-white font-bold text-[12px] tracking-[0.22em] uppercase mb-1"
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                Contact Information
                            </h4>
                            <div className="w-8 h-[2px] bg-[#C9A227]" />
                        </div>

                        <div className="space-y-5">
                            {/* Phones */}
                            <div className="space-y-2">
                                <p className="text-[9px] font-semibold tracking-[0.24em] uppercase text-white/25 mb-2">
                                    Customer Care
                                </p>
                                {PHONES.map((ph) => (
                                    <a
                                        key={ph}
                                        href={`tel:${ph.replace(/\s/g, "")}`}
                                        className="flex items-center gap-2.5 text-white/50 text-[12px] tracking-wide group transition-none"
                                        onMouseEnter={e => gsap.to(e.currentTarget, { color: "#C9A227", x: 3, duration: 0.2 })}
                                        onMouseLeave={e => gsap.to(e.currentTarget, { color: "rgba(255,255,255,0.5)", x: 0, duration: 0.2 })}
                                    >
                                        <span className="text-[#C9A227]"><PhoneIcon /></span>
                                        {ph}
                                    </a>
                                ))}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <p className="text-[9px] font-semibold tracking-[0.24em] uppercase text-white/25">
                                    Email Address
                                </p>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="flex items-center gap-2.5 text-white/50 text-[12px] tracking-wide transition-none"
                                    onMouseEnter={e => gsap.to(e.currentTarget, { color: "#C9A227", x: 3, duration: 0.2 })}
                                    onMouseLeave={e => gsap.to(e.currentTarget, { color: "rgba(255,255,255,0.5)", x: 0, duration: 0.2 })}
                                >
                                    <span className="text-[#C9A227]"><MailIcon /></span>
                                    {EMAIL}
                                </a>
                            </div>

                            {/* Address */}
                            <div className="space-y-2">
                                <p className="text-[9px] font-semibold tracking-[0.24em] uppercase text-white/25">
                                    Address
                                </p>
                                <div className="flex items-start gap-2.5 text-white/50 text-[12px] leading-relaxed">
                                    <span className="text-[#C9A227] mt-0.5"><PinIcon /></span>
                                    <span>{ADDRESS}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div
                ref={bottomRef}
                className="relative border-t border-white/[0.06]"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[10px] text-white/25 tracking-wider">
                        © Copyright 2026{" "}
                        <span className="text-white/40 font-semibold">Hygenists Shield Pte Ltd.</span>{" "}
                        All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {["Privacy Policy", "Terms of Use"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-[10px] text-white/25 tracking-wider transition-none"
                                onMouseEnter={e => gsap.to(e.currentTarget, { color: "#C9A227", duration: 0.2 })}
                                onMouseLeave={e => gsap.to(e.currentTarget, { color: "rgba(255,255,255,0.25)", duration: 0.2 })}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}