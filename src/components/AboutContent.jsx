import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
    { year: "2020", label: "Founded", desc: "Established by Mr. Irwin Wilson" },
    { year: "500+", label: "Projects", desc: "Custom precision components" },
    { year: "10+", label: "Industries", desc: "Moulds & automation sectors" },
];

const TAGS = [
    "Injection Moulds",
    "Automation",
    "CNC Machining",
    "Custom Components",
    "Precision Engineering",
];

export default function About() {
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const eyebrowRef = useRef(null);
    const headRef = useRef(null);
    const dividerRef = useRef(null);
    const parasRef = useRef([]);
    const milesRef = useRef([]);
    const tagsRef = useRef([]);
    const imgRef = useRef(null);
    const imgLineRef = useRef(null);
    const quoteRef = useRef(null);

    const paragraphs = [
        "HYGENISTS SHIELD PTE LTD was founded in 2020. Ever since, we have been serving the precision industry mainly in the field of injection moulds & automation.",
        "The majority of our business has been producing customized products based on customer drawings and specifications, but sometimes we do provide solutions and ideas for customized requirements as well, going the extra mile whenever there is a need.",
        "As the need for precision and automation industry advances, we clearly understand the pace at which we need to travel to keep up our unique position, among our valuable customers who have shouldered us thus far.",
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Badge
            gsap.from(badgeRef.current, {
                y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
            });

            // Eyebrow
            gsap.from(eyebrowRef.current, {
                y: 14, opacity: 0, duration: 0.55, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 76%" },
                delay: 0.1,
            });

            // Heading words
            const words = headRef.current?.querySelectorAll(".hw");
            if (words) {
                gsap.from(words, {
                    y: 48, opacity: 0, duration: 0.75, stagger: 0.07,
                    ease: "power4.out",
                    scrollTrigger: { trigger: headRef.current, start: "top 82%" },
                    delay: 0.15,
                });
            }

            // Divider
            gsap.from(dividerRef.current, {
                scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power3.inOut",
                scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
            });

            // Paragraphs
            parasRef.current.forEach((el, i) => {
                if (!el) return;
                gsap.from(el, {
                    y: 22, opacity: 0, duration: 0.65, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 90%" },
                    delay: i * 0.12,
                });
            });

            // Tags
            gsap.from(tagsRef.current.filter(Boolean), {
                y: 16, opacity: 0, scale: 0.9, duration: 0.5,
                stagger: 0.07, ease: "back.out(1.8)",
                scrollTrigger: { trigger: tagsRef.current[0], start: "top 92%" },
            });

            // Image panel
            gsap.from(imgRef.current, {
                x: 50, opacity: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
            });

            // Image accent line
            gsap.from(imgLineRef.current, {
                scaleY: 0, transformOrigin: "top", duration: 0.9, ease: "power3.inOut",
                scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
                delay: 0.3,
            });

            // Milestone cards
            gsap.from(milesRef.current.filter(Boolean), {
                y: 28, opacity: 0, duration: 0.6, stagger: 0.13, ease: "back.out(1.5)",
                scrollTrigger: { trigger: milesRef.current[0], start: "top 88%" },
            });

            // Quote
            gsap.from(quoteRef.current, {
                y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: quoteRef.current, start: "top 92%" },
            });

        }, sectionRef);

        // Milestone card hovers
        milesRef.current.forEach((card) => {
            if (!card) return;
            const num = card.querySelector(".ms-num");
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -5, backgroundColor: "#C9A227", borderColor: "#C9A227", duration: 0.28, ease: "power2.out" });
                gsap.to(num, { color: "#000", scale: 1.06, duration: 0.25, ease: "back.out(2)" });
                gsap.to(card.querySelectorAll(".ms-label, .ms-desc"), { color: "#000", duration: 0.2 });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, backgroundColor: "#ffffff", borderColor: "#E5E0D8", duration: 0.28, ease: "power2.out" });
                gsap.to(num, { color: "#C9A227", scale: 1, duration: 0.25 });
                gsap.to(card.querySelector(".ms-label"), { color: "#111", duration: 0.2 });
                gsap.to(card.querySelector(".ms-desc"), { color: "#888", duration: 0.2 });
            });
        });

        // Tag hovers
        tagsRef.current.forEach((tag) => {
            if (!tag) return;
            tag.addEventListener("mouseenter", () => {
                gsap.to(tag, { backgroundColor: "#C9A227", borderColor: "#C9A227", color: "#000", scale: 1.04, duration: 0.22, ease: "power2.out" });
            });
            tag.addEventListener("mouseleave", () => {
                gsap.to(tag, { backgroundColor: "#fff", borderColor: "#E5E0D8", color: "#555", scale: 1, duration: 0.22 });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#FAFAF8] overflow-hidden py-24 lg:py-32"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: "radial-gradient(circle, #ccc5b5 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            {/* Top gold rule */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />

            {/* Right accent strip */}
            <div className="absolute right-0 top-20 bottom-20 w-[3px] bg-gradient-to-b from-transparent via-[#C9A227] to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-14">

                {/* ── SECTION LABEL ── */}
                <div className="flex items-center gap-4 mb-10">
                    <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/35 rounded-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                        <span
                            className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#9a7a20]"
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                        >
                            About Us
                        </span>
                    </div>
                    <div ref={eyebrowRef} className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-[#C9A227]/40 to-transparent" />
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

                    {/* LEFT: Text */}
                    <div>
                        {/* Heading */}
                        <h2
                            ref={headRef}
                            className="flex flex-wrap gap-x-3 gap-y-0 mb-7 leading-[0.9]"
                        >
                            {["Who", "We", "Are"].map((w, i) => (
                                <span
                                    key={i}
                                    className={`hw font-black text-[clamp(52px,7.5vw,88px)] tracking-tight uppercase
                    ${i === 2 ? "text-[#C9A227]" : "text-[#111]"}`}
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                >
                                    {w}
                                </span>
                            ))}
                        </h2>

                        {/* Gold divider */}
                        <div
                            ref={dividerRef}
                            className="flex items-center gap-3 mb-8 origin-left"
                        >
                            <div className="h-[2px] w-14 bg-[#C9A227]" />
                            <div className="h-[2px] w-6 bg-[#C9A227]/30" />
                            <div className="h-[2px] w-2 bg-[#C9A227]/15" />
                        </div>

                        {/* Paragraphs */}
                        <div className="space-y-5 mb-10">
                            {paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    ref={el => parasRef.current[i] = el}
                                    className="text-[14.5px] leading-[1.9] text-[#555] font-light"
                                >
                                    {i === 0 && (
                                        <span className="font-semibold text-[#111]">
                                            HYGENISTS SHIELD PTE LTD{" "}
                                        </span>
                                    )}
                                    {i === 0
                                        ? "was founded in 2020. Ever since, we have been serving the precision industry mainly in the field of injection moulds & automation."
                                        : p}
                                </p>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {TAGS.map((tag, i) => (
                                <span
                                    key={tag}
                                    ref={el => tagsRef.current[i] = el}
                                    className="px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#555] bg-white border border-[#E5E0D8] rounded-sm cursor-default select-none"
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quote */}
                    </div>

                    {/* RIGHT: Visual panel */}
                    <div ref={imgRef} className="space-y-5">

                        {/* Image card */}
                        <div className="relative overflow-hidden rounded-sm bg-white border border-[#E5E0D8]"
                            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08)" }}>

                            {/* Gold left accent bar */}
                            <div
                                ref={imgLineRef}
                                className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A227] via-[#e8c84a] to-[#C9A227]/30 z-10"
                            />

                            {/* Photo */}
                            <img
                                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=80"
                                alt="Precision engineering workshop"
                                className="w-full h-[300px] lg:h-[340px] object-cover object-center"
                                style={{ filter: "brightness(0.92) saturate(0.85)" }}
                            />

                            {/* Overlay label */}
                            <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
                                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)" }}>
                                <p className="text-white/90 font-semibold text-[13px] tracking-wide"
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                    Precision Workshop · Singapore
                                </p>
                                <p className="text-white/45 text-[10px] tracking-widest uppercase font-light mt-0.5">
                                    Est. 2020 · Injection Moulds & Automation
                                </p>
                            </div>

                            {/* Corner tag */}
                            <div className="absolute top-4 right-4 bg-[#C9A227] px-3 py-1.5"
                                style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}>
                                <span className="text-black text-[9px] font-black tracking-[0.2em] uppercase"
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                                    Since 2020
                                </span>
                            </div>
                        </div>

                        {/* Milestone cards */}
                        <div className="grid grid-cols-3 gap-3">
                            {MILESTONES.map((m, i) => (
                                <div
                                    key={m.year}
                                    ref={el => milesRef.current[i] = el}
                                    className="relative bg-white border border-[#E5E0D8] rounded-sm px-4 py-5 text-center cursor-default overflow-hidden"
                                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                                >
                                    <div
                                        className="ms-num text-[clamp(22px,3vw,32px)] font-black leading-none tracking-tight text-[#C9A227] mb-1"
                                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                    >
                                        {m.year}
                                    </div>
                                    <div
                                        className="ms-label text-[10px] font-bold tracking-[0.16em] uppercase text-[#111] mb-0.5"
                                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                    >
                                        {m.label}
                                    </div>
                                    <div className="ms-desc text-[9px] text-[#888] font-light leading-snug">
                                        {m.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/35 to-transparent" />
        </section>
    );
}