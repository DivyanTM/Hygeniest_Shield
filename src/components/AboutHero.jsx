import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const IMAGES = {
    default: "https://images.unsplash.com/photo-1676935753519-a8dcb3ed5fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluYXJ5fGVufDB8fDB8fHww",
    about: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    services: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    contact: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    blogs: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
    precision: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=80",
};

function getImage(title = "") {
    const key = title.toLowerCase().split(" ")[0];
    return IMAGES[key] || IMAGES.default;
}

export default function AboutHero({ title = "Page Title", subtitle = "" }) {
    const rootRef = useRef(null);
    const bgRef = useRef(null);
    const overlayRef = useRef(null);
    const shapesRef = useRef([]);
    const lineTopRef = useRef(null);
    const lineBotRef = useRef(null);
    const eyebrowRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const breadRef = useRef(null);
    const scanRef = useRef(null);
    const cornerRefs = useRef([]);

    const words = title.toUpperCase().split(" ");

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // ── BG zoom in
            tl.from(bgRef.current, {
                scale: 1.12, duration: 1.8, ease: "power2.out",
            }, 0);

            // ── Overlay fade
            tl.from(overlayRef.current, {
                opacity: 0, duration: 1, ease: "none",
            }, 0);

            // ── Top / bottom border lines expand
            tl.from([lineTopRef.current, lineBotRef.current], {
                scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "expo.inOut", stagger: 0.1,
            }, 0.2);

            // ── Corner accents pop in
            tl.from(cornerRefs.current.filter(Boolean), {
                scale: 0, opacity: 0, duration: 0.6, stagger: 0.07, ease: "back.out(2)",
            }, 0.5);

            // ── Floating shapes
            shapesRef.current.forEach((el, i) => {
                if (!el) return;
                tl.from(el, {
                    scale: 0, opacity: 0, rotation: -30 + i * 12,
                    duration: 0.8, ease: "back.out(1.6)",
                }, 0.4 + i * 0.08);
            });

            // ── Eyebrow
            tl.from(eyebrowRef.current, {
                y: 20, opacity: 0, duration: 0.6,
            }, 0.65);

            // ── Title words stagger up
            const wordEls = titleRef.current?.querySelectorAll(".tw");
            if (wordEls) {
                tl.from(wordEls, {
                    y: 70, opacity: 0, skewY: 4, duration: 0.85,
                    stagger: 0.1, ease: "power4.out",
                }, 0.75);
            }

            // ── Subtitle
            if (subtitleRef.current) {
                tl.from(subtitleRef.current, {
                    y: 16, opacity: 0, duration: 0.6,
                }, 1.0);
            }

            // ── Breadcrumb
            tl.from(breadRef.current, {
                y: 12, opacity: 0, duration: 0.5,
            }, 1.1);

            // ── Scan line loop
            gsap.to(scanRef.current, {
                y: "100vh",
                duration: 3.5,
                ease: "none",
                repeat: -1,
                delay: 1.5,
            });

            // ── Shapes float continuously
            shapesRef.current.forEach((el, i) => {
                if (!el) return;
                gsap.to(el, {
                    y: `random(-18, 18)`,
                    x: `random(-10, 10)`,
                    rotation: `random(-8, 8)`,
                    duration: `random(4, 7)`,
                    repeat: -1, yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.4,
                });
            });

        }, rootRef);

        return () => ctx.revert();
    }, [title]);

    const image = getImage(title);

    return (
        <section
            ref={rootRef}
            className="relative w-full overflow-hidden bg-[#080808]"
            style={{
                height: "clamp(380px, 55vh, 600px)",
                fontFamily: "'Open Sans', sans-serif",
            }}
        >
            {/* ── BACKGROUND IMAGE ── */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%",
                    willChange: "transform",
                }}
            />

            {/* ── OVERLAYS ── */}
            <div ref={overlayRef} className="absolute inset-0">
                {/* Dark base */}
                <div className="absolute inset-0 bg-[#080808]/70" />
                {/* Bottom-to-top fade */}
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.3) 100%)" }} />
                {/* Left vignette */}
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, rgba(8,8,8,0.6) 0%, transparent 60%)" }} />
            </div>

            {/* ── SCAN LINE ── */}
            <div
                ref={scanRef}
                className="absolute left-0 right-0 pointer-events-none z-10"
                style={{
                    top: "-2px",
                    height: "2px",
                    background: "linear-gradient(to right, transparent, rgba(201,162,39,0.4), transparent)",
                }}
            />

            {/* ── GEOMETRIC SHAPES ── */}

            {/* Large hollow circle — top right */}
            <div
                ref={el => shapesRef.current[0] = el}
                className="absolute pointer-events-none"
                style={{ top: "-60px", right: "-60px", width: "360px", height: "360px" }}
            >
                <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
                    <circle cx="180" cy="180" r="170" stroke="rgba(201,162,39,0.12)" strokeWidth="1" />
                    <circle cx="180" cy="180" r="130" stroke="rgba(201,162,39,0.08)" strokeWidth="1" strokeDasharray="6 8" />
                    <circle cx="180" cy="180" r="90" stroke="rgba(201,162,39,0.06)" strokeWidth="1" />
                    {Array.from({ length: 12 }).map((_, i) => {
                        const a = (i / 12) * Math.PI * 2;
                        return (
                            <line key={i}
                                x1={180 + Math.cos(a) * 166} y1={180 + Math.sin(a) * 166}
                                x2={180 + Math.cos(a) * 174} y2={180 + Math.sin(a) * 174}
                                stroke="rgba(201,162,39,0.25)" strokeWidth={i % 3 === 0 ? "2" : "1"}
                            />
                        );
                    })}
                    <circle cx="180" cy="180" r="6" fill="rgba(201,162,39,0.3)" />
                </svg>
            </div>

            {/* Small rotated square — left mid */}
            <div
                ref={el => shapesRef.current[1] = el}
                className="absolute pointer-events-none"
                style={{ left: "5%", top: "30%", width: "80px", height: "80px" }}
            >
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                    <rect x="10" y="10" width="60" height="60"
                        stroke="rgba(201,162,39,0.2)" strokeWidth="1"
                        transform="rotate(45 40 40)"
                    />
                    <rect x="22" y="22" width="36" height="36"
                        stroke="rgba(201,162,39,0.12)" strokeWidth="1"
                        transform="rotate(45 40 40)"
                    />
                    <circle cx="40" cy="40" r="3" fill="rgba(201,162,39,0.35)" />
                </svg>
            </div>

            {/* Triangle — bottom right area */}
            <div
                ref={el => shapesRef.current[2] = el}
                className="absolute pointer-events-none"
                style={{ right: "18%", bottom: "18%", width: "60px", height: "60px" }}
            >
                <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
                    <polygon points="30,4 56,52 4,52"
                        stroke="rgba(201,162,39,0.22)" strokeWidth="1" fill="rgba(201,162,39,0.04)" />
                    <polygon points="30,16 46,44 14,44"
                        stroke="rgba(201,162,39,0.12)" strokeWidth="1" />
                </svg>
            </div>

            {/* Cross / plus — top left area */}
            <div
                ref={el => shapesRef.current[3] = el}
                className="absolute pointer-events-none"
                style={{ left: "22%", top: "12%", width: "28px", height: "28px" }}
            >
                <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                    <line x1="14" y1="2" x2="14" y2="26" stroke="rgba(201,162,39,0.35)" strokeWidth="1.5" />
                    <line x1="2" y1="14" x2="26" y2="14" stroke="rgba(201,162,39,0.35)" strokeWidth="1.5" />
                </svg>
            </div>

            {/* Dots cluster — bottom left */}
            <div
                ref={el => shapesRef.current[4] = el}
                className="absolute pointer-events-none"
                style={{ left: "8%", bottom: "20%", width: "64px", height: "64px" }}
            >
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <circle key={i}
                            cx={10 + (i % 3) * 22} cy={10 + Math.floor(i / 3) * 22} r="3"
                            fill={`rgba(201,162,39,${0.1 + (i % 4) * 0.07})`}
                        />
                    ))}
                </svg>
            </div>

            {/* Hexagon — far right mid */}
            <div
                ref={el => shapesRef.current[5] = el}
                className="absolute pointer-events-none"
                style={{ right: "6%", top: "40%", width: "54px", height: "54px" }}
            >
                <svg viewBox="0 0 54 54" fill="none" className="w-full h-full">
                    <polygon points="27,3 49,15 49,39 27,51 5,39 5,15"
                        stroke="rgba(201,162,39,0.2)" strokeWidth="1" fill="rgba(201,162,39,0.03)" />
                    <polygon points="27,13 39,20 39,34 27,41 15,34 15,20"
                        stroke="rgba(201,162,39,0.1)" strokeWidth="1" />
                </svg>
            </div>

            {/* ── BORDER LINES ── */}
            <div ref={lineTopRef}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left z-20"
                style={{ background: "linear-gradient(to right, #C9A227, rgba(201,162,39,0.2), transparent)" }}
            />
            <div ref={lineBotRef}
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left z-20"
                style={{ background: "linear-gradient(to right, #C9A227, rgba(201,162,39,0.15), transparent)" }}
            />

            {/* ── CORNER ACCENTS ── */}
            {[
                "top-3 left-3 border-t border-l",
                "top-3 right-3 border-t border-r",
                "bottom-3 left-3 border-b border-l",
                "bottom-3 right-3 border-b border-r",
            ].map((cls, i) => (
                <div
                    key={i}
                    ref={el => cornerRefs.current[i] = el}
                    className={`absolute w-6 h-6 border-[#C9A227]/30 z-20 ${cls}`}
                />
            ))}

            {/* ── CONTENT ── */}
            <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-14 lg:px-20">

                {/* Eyebrow */}
                <div ref={eyebrowRef} className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-[1.5px] bg-[#C9A227]" />
                    <span
                        className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C9A227]"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Hygenists Shield Pte Ltd
                    </span>
                </div>

                {/* Title */}
                <h1
                    ref={titleRef}
                    className="flex flex-wrap gap-x-4 gap-y-1 mb-4 overflow-hidden"
                >
                    {words.map((word, i) => (
                        <span
                            key={i}
                            className={`tw inline-block font-black leading-[0.88] tracking-tight
                ${i === words.length - 1 ? "text-[#C9A227]" : "text-white"}`}
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: "clamp(44px, 7vw, 96px)",
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                {/* Optional subtitle */}
                {subtitle && (
                    <p
                        ref={subtitleRef}
                        className="text-white/45 text-[14px] font-light leading-relaxed max-w-lg mb-5"
                    >
                        {subtitle}
                    </p>
                )}

                {/* Breadcrumb */}
                <div
                    ref={breadRef}
                    className="flex items-center gap-2 mt-1"
                >
                    <a href="#"
                        className="text-white/35 text-[11px] tracking-[0.14em] uppercase font-light hover:text-[#C9A227] transition-colors duration-200"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Home
                    </a>
                    <span className="text-[#C9A227]/50 text-[10px]">/</span>
                    <span
                        className="text-[#C9A227] text-[11px] tracking-[0.14em] uppercase font-semibold"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        {title}
                    </span>
                </div>
            </div>

            {/* ── BOTTOM GRADIENT BLEED (merges with page bg) ── */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
                style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
            />
        </section>
    );
}
