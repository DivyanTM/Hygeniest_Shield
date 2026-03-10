import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SubHero() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const line1Ref = useRef(null);
    const andRef = useRef(null);
    const line2Ref = useRef(null);
    const dividerRef = useRef(null);
    const paraRef = useRef(null);
    const pillarsRef = useRef([]);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
                    once: true,
                },
            });

            // background reveal
            tl.from(bgRef.current, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.2,
                ease: "expo.inOut",
            });

            // tag
            tl.from(tagRef.current, {
                y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
            }, "-=0.5");

            // headline lines
            tl.from(line1Ref.current, {
                y: 50, opacity: 0, duration: 0.8, ease: "power4.out",
            }, "-=0.3");

            tl.from(andRef.current, {
                scale: 0.5, opacity: 0, duration: 0.5, ease: "back.out(2)",
            }, "-=0.5");

            tl.from(line2Ref.current, {
                y: 50, opacity: 0, duration: 0.8, ease: "power4.out",
            }, "-=0.5");

            // divider
            tl.from(dividerRef.current, {
                scaleX: 0, transformOrigin: "center", duration: 0.8, ease: "power3.inOut",
            }, "-=0.4");

            // paragraph
            tl.from(paraRef.current, {
                y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
            }, "-=0.4");

            // pillars stagger
            tl.from(pillarsRef.current, {
                y: 24, opacity: 0, duration: 0.55, stagger: 0.12, ease: "back.out(1.5)",
            }, "-=0.3");

        }, sectionRef);

        // pillar hover interactions
        pillarsRef.current.forEach((el) => {
            if (!el) return;
            const icon = el.querySelector(".ph-icon");
            const label = el.querySelector(".ph-label");

            el.addEventListener("mouseenter", () => {
                gsap.to(el, { y: -5, backgroundColor: "#C9A227", borderColor: "#C9A227", duration: 0.3, ease: "power2.out" });
                gsap.to(icon, { scale: 1.2, color: "#000", duration: 0.3, ease: "back.out(2)" });
                gsap.to(label, { color: "#000", duration: 0.2 });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { y: 0, backgroundColor: "#ffffff", borderColor: "#e5e0d8", duration: 0.3, ease: "power2.out" });
                gsap.to(icon, { scale: 1, color: "#C9A227", duration: 0.3 });
                gsap.to(label, { color: "#555", duration: 0.2 });
            });
        });

        return () => ctx.revert();
    }, []);

    const pillars = [
        {
            label: "End-to-End Services",
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
            ),
        },
        {
            label: "Precision Machining",
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
                    <line x1="12" y1="3" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="21" />
                    <line x1="3" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="21" y2="12" />
                </svg>
            ),
        },
        {
            label: "Automation Solutions",
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                </svg>
            ),
        },
        {
            label: "Expert Consulting",
            icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#fff] overflow-hidden py-28 lg:py-36"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                    backgroundImage: "radial-gradient(circle, #c8bda4 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Animated gold band behind headline */}
            <div
                ref={bgRef}
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[180px] lg:h-[220px] bg-[#789]/[0.06] pointer-events-none"
            />

            {/* Left gold border */}
            <div className="absolute left-0 top-16 bottom-16 w-[3px] bg-gradient-to-b from-transparent via-[#C9A227] to-transparent" />

            <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">

                {/* Tag */}
                <div
                    ref={tagRef}
                    className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border border-[#C9A227]/40 bg-[#C9A227]/[0.07] rounded-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                    <span
                        className="text-[20px] font-semibold tracking-[0.3em] uppercase text-[#9a7a20]"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Welcome to Hygeniest Shield
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                </div>

                {/* Headline */}
                <div className="mb-8">
                    <h2
                        ref={line1Ref}
                        className="text-[clamp(36px,6vw,76px)] font-black leading-[0.92] tracking-tight text-[#111] uppercase"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Advanced Precision Engineering
                    </h2>

                    <div
                        ref={andRef}
                        className="my-3 flex items-center justify-center gap-4"
                    >
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#C9A227]" />
                        <span
                            className="text-[clamp(14px,2vw,20px)] font-semibold tracking-[0.3em] uppercase text-[#C9A227]"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                        >
                            &amp;
                        </span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#C9A227]" />
                    </div>

                    <h2
                        ref={line2Ref}
                        className="text-[clamp(36px,6vw,76px)] font-black leading-[0.92] tracking-tight text-[#C9A227] uppercase"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Manufacturing Solutions
                    </h2>
                </div>

                {/* Divider */}
                <div
                    ref={dividerRef}
                    className="mx-auto mb-10 h-[2px] w-20 bg-gradient-to-r from-[#C9A227]/30 via-[#C9A227] to-[#C9A227]/30 origin-center"
                />

                {/* Body text */}
                <p
                    ref={paraRef}
                    className="text-[15px] lg:text-[16px] leading-[1.9] text-[#555] font-light max-w-2xl mx-auto mb-14"
                >
                    With a stellar reputation in providing{" "}
                    <span className="font-semibold text-[#111]">end-to-end Engineering Consulting Services</span>{" "}
                    to our customers, we continuously strive to meet every need and demand
                    our clients might have.
                </p>

                {/* Pillar chips */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {pillars.map((p, i) => (
                        <div
                            key={i}
                            ref={(el) => (pillarsRef.current[i] = el)}
                            className="flex items-center gap-2.5 px-5 py-3 bg-white border border-[#E5E0D8] rounded-sm cursor-default select-none"
                            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                        >
                            <span className="ph-icon text-[#C9A227] flex-shrink-0">{p.icon}</span>
                            <span
                                className="ph-label text-[11px] font-semibold tracking-[0.14em] uppercase text-[#555] whitespace-nowrap"
                                style={{ fontFamily: "'Rajdhani', sans-serif" }}
                            >
                                {p.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom rule */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
        </section>
    );
}