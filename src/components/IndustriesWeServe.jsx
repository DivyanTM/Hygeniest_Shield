import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
    {
        id: "healthcare",
        name: "Healthcare",
        tag: "Medical Precision",
        number: "01",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80",
        accent: "#4FC3F7",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        bullets: [
            "Fixtures for manufacturing medical parts",
            "Customized medical equipment parts",
            "Special steel mold inserts for plastic medical parts",
            "316 Grade Stainless steel",
        ],
        pattern: "M 0 20 Q 10 0 20 20 Q 30 40 40 20",
    },
    {
        id: "automotive",
        name: "Automotive",
        tag: "Complex Geometry",
        number: "02",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
        accent: "#FFB74D",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <path d="M6 26l4-12h20l4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="4" y="24" width="32" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="11" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="29" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 20h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
        bullets: [
            "Jigs and fixtures for parts with complex geometry",
            "High-tolerance component machining",
            "Custom tooling and assembly aids",
        ],
        pattern: "M 0 10 L 10 30 L 20 10 L 30 30 L 40 10",
    },
    {
        id: "technology",
        name: "Technology",
        tag: "Smart Automation",
        number: "03",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
        accent: "#81C784",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <rect x="4" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 32v4M26 32v4M10 36h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="21" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="20" cy="21" r="2" fill="currentColor" />
            </svg>
        ),
        bullets: [
            "Precision engineering for automated factory systems",
            "Solutions to increase productivity",
            "Minimize human intervention with smart components",
        ],
        pattern: "M 0 20 L 8 8 L 16 20 L 24 8 L 32 20 L 40 8",
    },
];

function IndustryCard({ industry, index }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const overlayRef = useRef(null);
    const numRef = useRef(null);
    const tagRef = useRef(null);
    const nameRef = useRef(null);
    const bulletsRef = useRef([]);
    const patternRef = useRef(null);
    const accentRef = useRef(null);
    const iconRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    // Scroll entrance
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 60, opacity: 0, duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                },
                delay: index * 0.15,
            });

            gsap.from(numRef.current, {
                x: -30, opacity: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: cardRef.current, start: "top 82%" },
                delay: index * 0.15 + 0.2,
            });

            gsap.from(patternRef.current, {
                opacity: 0, duration: 1,
                scrollTrigger: { trigger: cardRef.current, start: "top 82%" },
                delay: index * 0.15 + 0.3,
            });

            gsap.from(bulletsRef.current.filter(Boolean), {
                x: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: cardRef.current, start: "top 80%" },
                delay: index * 0.15 + 0.4,
            });
        }, cardRef);

        return () => ctx.revert();
    }, [index]);

    // Hover
    const onEnter = () => {
        setHovered(true);
        gsap.to(imgRef.current, { scale: 1.08, duration: 0.7, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 0.55, duration: 0.4 });
        gsap.to(accentRef.current, { scaleX: 1, duration: 0.5, ease: "power3.out" });
        gsap.to(iconRef.current, { scale: 1.15, rotation: 10, duration: 0.4, ease: "back.out(2)" });
        gsap.to(bulletsRef.current.filter(Boolean), {
            x: 6, duration: 0.35, stagger: 0.04, ease: "power2.out",
        });
    };

    const onLeave = () => {
        setHovered(false);
        gsap.to(imgRef.current, { scale: 1, duration: 0.7, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 0.72, duration: 0.4 });
        gsap.to(accentRef.current, { scaleX: 0, duration: 0.4, ease: "power2.in" });
        gsap.to(iconRef.current, { scale: 1, rotation: 0, duration: 0.4 });
        gsap.to(bulletsRef.current.filter(Boolean), {
            x: 0, duration: 0.3, ease: "power2.out",
        });
    };

    return (
        <div
            ref={cardRef}
            className="relative overflow-hidden rounded-sm cursor-default"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <div
                    ref={imgRef}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url('${industry.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        willChange: "transform",
                    }}
                />
                {/* Dark overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.75) 100%)",
                        opacity: 0.72,
                    }}
                />

                {/* SVG pattern overlay */}
                <svg
                    ref={patternRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 220"
                    preserveAspectRatio="none"
                    opacity="0.07"
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <path
                            key={i}
                            d={industry.pattern}
                            stroke={industry.accent}
                            strokeWidth="1"
                            fill="none"
                            transform={`translate(${(i % 4) * 100 - 20}, ${Math.floor(i / 4) * 74 - 20})`}
                        />
                    ))}
                </svg>

                {/* Number */}
                <div
                    ref={numRef}
                    className="absolute top-4 left-5 font-black text-white/[0.07] leading-none select-none"
                    style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: "96px",
                        lineHeight: 1,
                    }}
                >
                    {industry.number}
                </div>

                {/* Tag badge */}
                <div
                    ref={tagRef}
                    className="absolute top-4 right-4 px-3 py-1 text-[9px] font-semibold tracking-[0.22em] uppercase"
                    style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        background: `${industry.accent}22`,
                        border: `1px solid ${industry.accent}55`,
                        color: industry.accent,
                    }}
                >
                    {industry.tag}
                </div>

                {/* Icon circle */}
                <div
                    ref={iconRef}
                    className="absolute bottom-4 left-5 flex items-center justify-center w-12 h-12 rounded-sm"
                    style={{
                        background: `${industry.accent}18`,
                        border: `1px solid ${industry.accent}40`,
                        color: industry.accent,
                    }}
                >
                    {industry.icon}
                </div>

                {/* Bottom accent bar */}
                <div
                    ref={accentRef}
                    className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                    style={{
                        background: `linear-gradient(to right, ${industry.accent}, ${industry.accent}50)`,
                        transform: "scaleX(0)",
                    }}
                />
            </div>

            {/* Content area */}
            <div
                className="relative px-6 py-6"
                style={{ background: "linear-gradient(to bottom, #111111, #0d0d0d)" }}
            >
                {/* Subtle grid bg */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(${industry.accent}33 1px, transparent 1px), linear-gradient(90deg, ${industry.accent}33 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Industry name */}
                <div
                    ref={nameRef}
                    className="relative flex items-center gap-3 mb-5"
                >
                    <h3
                        className="font-black text-white text-2xl uppercase tracking-tight"
                        style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            transition: "color 0.3s",
                            color: hovered ? industry.accent : "#fff",
                        }}
                    >
                        {industry.name}
                    </h3>
                    <div
                        className="flex-1 h-[1px]"
                        style={{ background: `linear-gradient(to right, ${industry.accent}40, transparent)` }}
                    />
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                    {industry.bullets.map((b, i) => (
                        <li
                            key={i}
                            ref={el => bulletsRef.current[i] = el}
                            className="flex items-start gap-3"
                        >
                            <span
                                className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                                style={{ background: industry.accent }}
                            />
                            <span className="text-[13px] text-white/55 font-light leading-snug">
                                {b}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Learn more link */}
                <div
                    className="flex items-center gap-2 mt-5 text-[11px] font-semibold tracking-[0.18em] uppercase cursor-pointer select-none"
                    style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        color: hovered ? industry.accent : "rgba(255,255,255,0.25)",
                        transition: "color 0.3s",
                    }}
                >
                    <span>Learn More</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default function IndustriesWeServe() {
    const sectionRef = useRef(null);
    const topLineRef = useRef(null);
    const badgeRef = useRef(null);
    const headRef = useRef(null);
    const paraRef = useRef(null);
    const dividerRef = useRef(null);
    const bgShapeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // BG shape drift
            gsap.to(bgShapeRef.current, {
                rotation: 360,
                duration: 80,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center",
            });

            // Top line sweep
            gsap.from(topLineRef.current, {
                scaleX: 0, transformOrigin: "left", duration: 1.2, ease: "expo.inOut",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });

            // Badge
            gsap.from(badgeRef.current, {
                y: 20, opacity: 0, duration: 0.65, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
                delay: 0.1,
            });

            // Heading words
            const words = headRef.current?.querySelectorAll(".hw");
            if (words) {
                gsap.from(words, {
                    y: 56, opacity: 0, skewY: 3, duration: 0.8, stagger: 0.08,
                    ease: "power4.out",
                    scrollTrigger: { trigger: headRef.current, start: "top 82%" },
                    delay: 0.2,
                });
            }

            // Divider
            gsap.from(dividerRef.current, {
                scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power3.inOut",
                scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
            });

            // Paragraph
            gsap.from(paraRef.current, {
                y: 18, opacity: 0, duration: 0.65, ease: "power3.out",
                scrollTrigger: { trigger: paraRef.current, start: "top 90%" },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const headWords = ["Industries", "We", "Serve"];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0a0a0a] overflow-hidden py-24 lg:py-32"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
            {/* ── BG DECORATION ── */}
            {/* Radial glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

            {/* Slow-rotating bg shape */}
            <div ref={bgShapeRef} className="absolute right-[12%] top-[15%] pointer-events-none opacity-[0.035]">
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
                    <polygon points="160,10 300,80 300,240 160,310 20,240 20,80"
                        stroke="#C9A227" strokeWidth="1" />
                    <polygon points="160,40 270,100 270,220 160,280 50,220 50,100"
                        stroke="#C9A227" strokeWidth="1" strokeDasharray="4 6" />
                    <polygon points="160,80 230,120 230,200 160,240 90,200 90,120"
                        stroke="#C9A227" strokeWidth="1" />
                    <circle cx="160" cy="160" r="40" stroke="#C9A227" strokeWidth="1" />
                </svg>
            </div>

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Top gold rule */}
            <div
                ref={topLineRef}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left"
                style={{ background: "linear-gradient(to right, #C9A227, rgba(201,162,39,0.2), transparent)" }}
            />

            {/* Left accent border */}
            <div className="absolute left-0 top-24 bottom-24 w-[3px]"
                style={{ background: "linear-gradient(to bottom, transparent, #C9A227, transparent)" }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-14">

                {/* ── HEADER ── */}
                <div className="mb-16">

                    {/* Badge */}
                    {/* <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-sm"
                        style={{
                            background: "rgba(201,162,39,0.08)",
                            border: "1px solid rgba(201,162,39,0.25)",
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                        <span
                            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C9A227]"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                        >
                            Our Expertise
                        </span>
                    </div> */}

                    {/* Heading */}
                    <h2 ref={headRef} className="flex flex-wrap gap-x-4 gap-y-1 mb-6 leading-[0.9] overflow-hidden">
                        {headWords.map((w, i) => (
                            <span
                                key={i}
                                className={`hw inline-block font-black text-[clamp(44px,7vw,96px)] tracking-tight uppercase
                  ${i === headWords.length - 1 ? "text-[#C9A227]" : "text-white"}`}
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                {w}
                            </span>
                        ))}
                    </h2>

                    {/* Divider */}
                    <div
                        ref={dividerRef}
                        className="flex items-center gap-2 mb-6 origin-left"
                    >
                        <div className="h-[2px] w-14 bg-[#C9A227]" />
                        <div className="h-[2px] w-8 bg-[#C9A227]/30" />
                        <div className="h-[2px] w-3 bg-[#C9A227]/15" />
                    </div>

                    {/* Sub-text */}
                    <p
                        ref={paraRef}
                        className="text-white/40 text-[14px] font-light leading-relaxed max-w-xl"
                    >
                        From medical-grade precision to automotive complexity and intelligent automation —
                        we engineer solutions across the industries that matter most.
                    </p>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {INDUSTRIES.map((industry, i) => (
                        <IndustryCard key={industry.id} industry={industry} index={i} />
                    ))}
                </div>

                {/* ── BOTTOM STRIP ── */}
                <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-white/25 text-[11px] tracking-[0.18em] uppercase font-light"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Serving Singapore & Beyond
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-7 py-3 text-black font-bold text-[11px] tracking-[0.2em] uppercase"
                        style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            background: "#C9A227",
                            clipPath: "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,9px 100%,0 calc(100% - 9px))",
                        }}
                        onMouseEnter={e => gsap.to(e.currentTarget, { background: "#fff", duration: 0.25 })}
                        onMouseLeave={e => gsap.to(e.currentTarget, { background: "#C9A227", duration: 0.25 })}
                    >
                        Discuss Your Project
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

            </div>

            {/* Bottom rule */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,162,39,0.3), transparent)" }} />
        </section>
    );
}