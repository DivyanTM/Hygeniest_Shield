import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                <circle cx="24" cy="24" r="10" stroke="#C9A227" strokeWidth="2" />
                <circle cx="24" cy="24" r="20" stroke="#C9A227" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="24" cy="24" r="3" fill="#C9A227" />
                <line x1="24" y1="4" x2="24" y2="14" stroke="#C9A227" strokeWidth="1.5" />
                <line x1="24" y1="34" x2="24" y2="44" stroke="#C9A227" strokeWidth="1.5" />
                <line x1="4" y1="24" x2="14" y2="24" stroke="#C9A227" strokeWidth="1.5" />
                <line x1="34" y1="24" x2="44" y2="24" stroke="#C9A227" strokeWidth="1.5" />
            </svg>
        ),
        label: "10+ Years",
        desc: "Deep industry expertise",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                <rect x="8" y="20" width="32" height="20" rx="2" stroke="#C9A227" strokeWidth="2" />
                <path d="M16 20V14a8 8 0 0116 0v6" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="30" r="3" fill="#C9A227" />
                <line x1="24" y1="33" x2="24" y2="36" stroke="#C9A227" strokeWidth="2" />
            </svg>
        ),
        label: "Quality First",
        desc: "Zero compromise standards",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                <path d="M8 36 L20 24 L28 32 L40 12" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="12" r="3" fill="#C9A227" />
                <path d="M34 12h6v6" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        label: "Growth Focus",
        desc: "Results that scale",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
                <path d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z" stroke="#C9A227" strokeWidth="2" />
                <path d="M24 8 L24 40M10 16 L38 32M38 16 L10 32" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 3" />
                <circle cx="24" cy="24" r="4" fill="#C9A227" fillOpacity="0.3" stroke="#C9A227" strokeWidth="1.5" />
            </svg>
        ),
        label: "End-to-End",
        desc: "Consult to production",
    },
];

// Precision engineering SVG illustration
function EngineeringIllustration() {
    const svgRef = useRef(null);

    useEffect(() => {
        const el = svgRef.current;
        if (!el) return;

        // Rotating gears
        gsap.to(".gear-outer", {
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center",
        });
        gsap.to(".gear-inner", {
            rotation: -360,
            duration: 10,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center",
        });
        gsap.to(".gear-small", {
            rotation: 360,
            duration: 6,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center",
        });

        // Scanning line
        gsap.to(".scan-line", {
            y: 120,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Pulsing center dot
        gsap.to(".center-pulse", {
            scale: 1.6,
            opacity: 0.2,
            duration: 1.4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            transformOrigin: "center center",
        });

        // Data path draw
        gsap.fromTo(".data-path",
            { strokeDashoffset: 300 },
            {
                strokeDashoffset: 0,
                duration: 3,
                repeat: -1,
                ease: "none",
            }
        );

        // Floating particles
        gsap.to(".particle", {
            y: "random(-12, 12)",
            x: "random(-8, 8)",
            opacity: "random(0.3, 1)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.3,
        });
    }, []);

    return (
        <div ref={svgRef} className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full max-w-[420px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background grid */}
                {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`h${i}`} x1="20" y1={40 + i * 40} x2="380" y2={40 + i * 40}
                        stroke="#E5E0D8" strokeWidth="0.8" />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`v${i}`} x1={40 + i * 40} y1="20" x2={40 + i * 40} y2="380"
                        stroke="#E5E0D8" strokeWidth="0.8" />
                ))}

                {/* Data path */}
                <path className="data-path" d="M40 320 Q100 200 160 240 Q220 280 280 160 Q320 80 360 100"
                    stroke="#C9A227" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />

                {/* Outer gear */}
                <g className="gear-outer" style={{ transformOrigin: "200px 200px" }}>
                    <circle cx="200" cy="200" r="88" stroke="#C9A227" strokeWidth="2" strokeDasharray="8 4" opacity="0.4" />
                    {Array.from({ length: 16 }).map((_, i) => {
                        const a = (i / 16) * Math.PI * 2;
                        const r1 = 84, r2 = 96;
                        return (
                            <rect key={i}
                                x={200 + Math.cos(a) * r1 - 3}
                                y={200 + Math.sin(a) * r1 - 6}
                                width="6" height="12"
                                fill="#C9A227" opacity="0.35"
                                transform={`rotate(${(i / 16) * 360}, ${200 + Math.cos(a) * ((r1 + r2) / 2)}, ${200 + Math.sin(a) * ((r1 + r2) / 2)})`}
                            />
                        );
                    })}
                </g>

                {/* Inner gear */}
                <g className="gear-inner" style={{ transformOrigin: "200px 200px" }}>
                    <circle cx="200" cy="200" r="56" stroke="#C9A227" strokeWidth="1.5" opacity="0.6" />
                    {Array.from({ length: 10 }).map((_, i) => {
                        const a = (i / 10) * Math.PI * 2;
                        const r1 = 52, r2 = 62;
                        return (
                            <rect key={i}
                                x={200 + Math.cos(a) * r1 - 2.5}
                                y={200 + Math.sin(a) * r1 - 5}
                                width="5" height="10"
                                fill="#C9A227" opacity="0.55"
                                transform={`rotate(${(i / 10) * 360}, ${200 + Math.cos(a) * ((r1 + r2) / 2)}, ${200 + Math.sin(a) * ((r1 + r2) / 2)})`}
                            />
                        );
                    })}
                </g>

                {/* Small gear — top right */}
                <g className="gear-small" style={{ transformOrigin: "310px 100px" }}>
                    <circle cx="310" cy="100" r="28" stroke="#C9A227" strokeWidth="1.5" opacity="0.5" />
                    {Array.from({ length: 8 }).map((_, i) => {
                        const a = (i / 8) * Math.PI * 2;
                        const r1 = 25, r2 = 32;
                        return (
                            <rect key={i}
                                x={310 + Math.cos(a) * r1 - 2}
                                y={100 + Math.sin(a) * r1 - 4}
                                width="4" height="8"
                                fill="#C9A227" opacity="0.4"
                                transform={`rotate(${(i / 8) * 360}, ${310 + Math.cos(a) * ((r1 + r2) / 2)}, ${100 + Math.sin(a) * ((r1 + r2) / 2)})`}
                            />
                        );
                    })}
                    <circle cx="310" cy="100" r="8" fill="#FBF8F3" stroke="#C9A227" strokeWidth="1.5" />
                    <circle cx="310" cy="100" r="3" fill="#C9A227" />
                </g>

                {/* Center hub */}
                <circle className="center-pulse" cx="200" cy="200" r="32" fill="#C9A227" opacity="0.08" />
                <circle cx="200" cy="200" r="22" fill="#FBF8F3" stroke="#C9A227" strokeWidth="2" />
                <circle cx="200" cy="200" r="10" fill="#C9A227" opacity="0.8" />
                <circle cx="200" cy="200" r="4" fill="#FBF8F3" />

                {/* Cross-hair lines */}
                <line x1="200" y1="110" x2="200" y2="144" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="200" y1="256" x2="200" y2="290" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="110" y1="200" x2="144" y2="200" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="256" y1="200" x2="290" y2="200" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />

                {/* Scan line */}
                <line className="scan-line" x1="112" y1="140" x2="288" y2="140"
                    stroke="#C9A227" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 2" />

                {/* Measurement brackets */}
                <path d="M60 60 L60 80 L80 80" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M340 340 L340 320 L320 320" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M60 340 L60 320 L80 320" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <path d="M340 60 L340 80 L320 80" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

                {/* Floating particles */}
                <circle className="particle" cx="80" cy="140" r="3" fill="#C9A227" opacity="0.5" />
                <circle className="particle" cx="340" cy="240" r="2" fill="#C9A227" opacity="0.4" />
                <circle className="particle" cx="120" cy="320" r="3" fill="#C9A227" opacity="0.6" />
                <circle className="particle" cx="350" cy="160" r="2" fill="#C9A227" opacity="0.35" />
                <circle className="particle" cx="60" cy="220" r="2.5" fill="#C9A227" opacity="0.45" />

                {/* Label tags */}
                <rect x="30" y="55" width="72" height="18" rx="2" fill="#C9A227" opacity="0.1" stroke="#C9A227" strokeWidth="0.8" opacity="0.3" />
                <text x="66" y="68" textAnchor="middle" fontSize="8" fill="#9a7a20" fontFamily="monospace" letterSpacing="1">ZYTONIK</text>

                <rect x="280" y="55" width="88" height="18" rx="2" fill="#C9A227" opacity="0.1" stroke="#C9A227" strokeWidth="0.8" opacity="0.3" />
                <text x="324" y="68" textAnchor="middle" fontSize="8" fill="#9a7a20" fontFamily="monospace" letterSpacing="1">PRECISION</text>
            </svg>
        </div>
    );
}

export default function AskUs() {
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const headingRef = useRef(null);
    const lineRef = useRef(null);
    const parasRef = useRef([]);
    const pillarsRef = useRef([]);
    const ctaRef = useRef(null);
    const imgPanelRef = useRef(null);
    const counterRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── ENTRANCE: badge
            gsap.from(badgeRef.current, {
                y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
            });

            // ── ENTRANCE: heading word-by-word
            const words = headingRef.current?.querySelectorAll(".word");
            if (words) {
                gsap.from(words, {
                    y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out",
                    scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
                    delay: 0.1,
                });
            }

            // ── ENTRANCE: gold line expand
            gsap.from(lineRef.current, {
                scaleX: 0, duration: 1, ease: "power4.inOut", transformOrigin: "left",
                scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
                delay: 0.3,
            });

            // ── ENTRANCE: paragraphs slide in
            parasRef.current.forEach((el, i) => {
                if (!el) return;
                gsap.from(el, {
                    x: -30, opacity: 0, duration: 0.75, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                    delay: i * 0.15,
                });
            });

            // ── ENTRANCE: image panel
            gsap.from(imgPanelRef.current, {
                x: 60, opacity: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: imgPanelRef.current, start: "top 78%" },
            });

            // ── ENTRANCE: pillar cards stagger
            gsap.from(pillarsRef.current, {
                y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)",
                scrollTrigger: { trigger: pillarsRef.current[0], start: "top 88%" },
            });

            // ── ENTRANCE: CTA
            gsap.from(ctaRef.current, {
                y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: ctaRef.current, start: "top 92%" },
                delay: 0.2,
            });

            // ── COUNTER animation
            counterRefs.current.forEach((el) => {
                if (!el) return;
                const target = parseInt(el.dataset.target, 10);
                gsap.from({ val: 0 }, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                    onUpdate() { el.textContent = Math.round(this.targets()[0].val) + "+"; },
                });
            });

        }, sectionRef);

        // ── PILLAR CARD hovers
        pillarsRef.current.forEach((card) => {
            if (!card) return;
            const icon = card.querySelector(".pillar-icon");
            const label = card.querySelector(".pillar-label");
            const bar = card.querySelector(".pillar-bar");

            card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -6, boxShadow: "0 20px 48px rgba(201,162,39,0.18)", duration: 0.35, ease: "power2.out" });
                gsap.to(icon, { scale: 1.15, rotation: 8, duration: 0.4, ease: "back.out(2)" });
                gsap.to(label, { color: "#C9A227", duration: 0.25 });
                gsap.to(bar, { scaleX: 1, duration: 0.4, ease: "power2.out" });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", duration: 0.35, ease: "power2.out" });
                gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: "power2.out" });
                gsap.to(label, { color: "#1a1a1a", duration: 0.25 });
                gsap.to(bar, { scaleX: 0, duration: 0.3 });
            });
        });

        // ── CTA hover
        const ctaEl = ctaRef.current;
        if (ctaEl) {
            ctaEl.addEventListener("mouseenter", () => {
                gsap.to(ctaEl, { scale: 1.04, duration: 0.3, ease: "back.out(2)" });
            });
            ctaEl.addEventListener("mouseleave", () => {
                gsap.to(ctaEl, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        }

        return () => ctx.revert();
    }, []);

    const paragraphs = [
        "With over 10 years of experience, our team possesses extensive knowledge and expertise to help you design, implement, and select the most efficient tools for your processes. We ensure that every decision is made with your goals in mind, allowing you to focus on what truly matters—driving growth, innovation, and success.",
        "Our goal is to be your trusted and preferred solutions provider. We prioritize your needs and work alongside you, from the initial consultation through to the final production phase. Whether it's optimizing processes, reducing costs, or enhancing productivity, we're here to deliver exceptional outcomes tailored to your unique requirements.",
        "At the heart of our approach is a commitment to quality, reliability, and personalized service. We don't just complete projects—we help you thrive in an ever-evolving market. Schedule a consultation with us today and tap into our deep expertise to ensure your project's success.",
    ];

    const headingWords = ["ASK", "US", "—", "WE'VE", "GOT", "ANSWERS"];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#fff] overflow-hidden py-24 lg:py-32"
        >
            {/* Subtle dot-grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle, #d4c8b0 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Gold left border accent */}
            <div className="absolute left-0 top-24 bottom-24 w-[3px] bg-gradient-to-b from-transparent via-[#C9A227] to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16">
                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#9a7a20] font-mono">
                            Expert Consultation
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        ref={headingRef}
                        className="flex flex-wrap gap-x-4 gap-y-1 mb-6"
                    >
                        {headingWords.map((w, i) => (
                            <span
                                key={i}
                                className={`word block font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none
                  ${w === "ANSWERS" ? "text-[#C9A227]" : w === "—" ? "text-[#C9A227]/40" : "text-[#111]"}
                `}
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                {w}
                            </span>
                        ))}
                    </h2>

                    {/* Expanding gold line */}
                    <div
                        ref={lineRef}
                        className="h-[2px] w-24 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/20 origin-left"
                    />
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                    {/* LEFT — Text content */}
                    <div className="space-y-6">
                        {paragraphs.map((p, i) => (
                            <p
                                key={i}
                                ref={(el) => (parasRef.current[i] = el)}
                                className="text-[15px] leading-[1.9] text-[#444] font-light"
                                style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                                {i === 0 && (
                                    <span className="font-semibold text-[#111] not-italic">
                                        With over{" "}
                                        <span
                                            ref={(el) => (counterRefs.current[0] = el)}
                                            data-target="10"
                                            className="text-[#C9A227] font-black text-xl"
                                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                        >
                                            10+
                                        </span>{" "}
                                        years of experience,{" "}
                                    </span>
                                )}
                                {i === 0
                                    ? "our team possesses extensive knowledge and expertise to help you design, implement, and select the most efficient tools for your processes. We ensure that every decision is made with your goals in mind, allowing you to focus on what truly matters—driving growth, innovation, and success."
                                    : p}
                            </p>
                        ))}

                        {/* CTA */}
                        <div ref={ctaRef} className="pt-6 flex items-center gap-5">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#111] text-white font-bold text-[11px] tracking-[0.2em] uppercase cursor-pointer select-none"
                                style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                                }}
                            >
                                Schedule a Consultation
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <span className="text-[11px] tracking-widest text-[#999] uppercase font-mono">Free · No Obligation</span>
                        </div>
                    </div>

                    {/* RIGHT — Illustration + pillar cards */}
                    <div className="space-y-8">

                        {/* Engineering illustration panel */}
                        <div
                            ref={imgPanelRef}
                            className="relative bg-white border border-[#E5E0D8] rounded-sm overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
                            style={{ aspectRatio: "4/3" }}
                        >
                            {/* Top bar */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E0D8] bg-[#FDFAF5]">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                </div>
                                <span className="text-[10px] font-mono text-[#bbb] tracking-widest">PRECISION-ENGINEERING-SIM.exe</span>
                                <span className="text-[10px] font-mono text-[#C9A227] tracking-wider">● LIVE</span>
                            </div>

                            {/* Illustration */}
                            <div className="p-4 h-[calc(100%-44px)]">
                                <EngineeringIllustration />
                            </div>

                            {/* Floating stat badges */}
                            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border border-[#E5E0D8] rounded-sm px-3 py-2 shadow-md">
                                <div className="text-[10px] font-mono text-[#999] tracking-wider mb-0.5">PROJECTS</div>
                                <div className="text-xl font-black text-[#111]" style={{ fontFamily: "'Rajdhani',sans-serif" }}>500+</div>
                            </div>
                            <div className="absolute top-16 right-5 bg-[#C9A227] rounded-sm px-3 py-2 shadow-md">
                                <div className="text-[10px] font-mono text-black/60 tracking-wider mb-0.5">CLIENTS</div>
                                <div className="text-xl font-black text-black" style={{ fontFamily: "'Rajdhani',sans-serif" }}>200+</div>
                            </div>
                        </div>

                        {/* Pillar cards */}
                        <div className="grid grid-cols-2 gap-3">
                            {PILLARS.map((p, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (pillarsRef.current[i] = el)}
                                    className="relative bg-white border border-[#E5E0D8] rounded-sm px-5 py-5 cursor-default overflow-hidden"
                                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                                >
                                    {/* Bottom accent bar */}
                                    <div
                                        className="pillar-bar absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227] origin-left"
                                        style={{ transform: "scaleX(0)" }}
                                    />
                                    <div className="pillar-icon mb-3">{p.icon}</div>
                                    <div
                                        className="pillar-label text-[13px] font-bold tracking-wide text-[#1a1a1a] mb-0.5"
                                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                    >
                                        {p.label}
                                    </div>
                                    <div className="text-[11px] text-[#888] font-light tracking-wide">
                                        {p.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom gold rule */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
        </section>
    );
}