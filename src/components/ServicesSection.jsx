import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        id: "precision",
        number: "01",
        name: "Precision Engineering",
        tag: "CNC · EDM · Milling · Turning",
        image: "https://images.unsplash.com/photo-1769147339214-076740872485?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "High-precision CNC machining using advanced multi-axis machines. From one-off prototypes to full-scale production — delivering industry-leading accuracy across aerospace, medical and automotive applications.",
        subs: ["CNC Wire Cut", "CNC Milling", "CNC Turning", "Customised Mould Inserts", "EDM Electrodes", "Milling Collets", "Milling Cutters", "Precision Components"],
    },
    {
        id: "sheetmetal",
        number: "02",
        name: "Sheet Metal",
        tag: "Laser · Bending · Welding · Finishing",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
        desc: "High-precision sheet metal fabrication using state-of-the-art laser cutting up to 20mm thickness. Custom solutions from prototyping to mass production with fast turnaround times.",
        subs: ["Laser Cutting", "Bending & Forming", "Welding & Assembly", "Powder Coating & Finishing", "Prototyping & Mass Production", "SS316 Trolleys"],
    },
    {
        id: "automation",
        number: "03",
        name: "Automation Components",
        tag: "Sub Assemblies · Fixtures · Contract Mfg",
        image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "Advanced automation components for seamless integration and high efficiency. Full suite including sub-assemblies, jigs, fixtures, rubber components and contract manufacturing.",
        subs: ["Sub Assemblies", "JIGS & Fixtures", "Value Added Services", "Documentation", "Rubber Components", "Contract Manufacturing"],
    },
    {
        id: "additive",
        number: "04",
        name: "Additive Manufacturing",
        tag: "3D Printing · Rapid Prototyping",
        image: "https://images.unsplash.com/photo-1582879304171-8041c73bedbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkZGl0aXZlJTIwbWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        desc: "Advanced 3D printing technologies producing high-quality custom parts with unmatched precision. Bring complex geometries to life from prototype development to full-scale production.",
        subs: ["Rapid Prototyping", "Functional Part Production", "Custom Part Fabrication", "Design Optimization & Support", "Post-Processing & Finishing"],
    },
    {
        id: "thermoforming",
        number: "05",
        name: "Thermoforming",
        tag: "Plastic Forming · Enclosures · Scalable",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
        desc: "Precision thermoforming for durable plastic components with consistent quality. Ideal for custom enclosures, trays, packaging and industrial-grade plastic parts across multiple industries.",
        subs: ["Custom Plastic Component Forming", "Industrial-grade Trays & Enclosures", "Scalable Batch Production", "Material Flexibility"],
    },
    {
        id: "lasercut",
        number: "06",
        name: "Laser Cut",
        tag: "Up to 20mm · Metals · Plastics",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        desc: "State-of-the-art laser cutting for smooth, burr-free edges and complex geometries. Handles metals, plastics, wood and composites with minimal waste and faster cycle times.",
        subs: ["Metals up to 20mm", "Plastics & Composites", "Complex Geometries", "Minimal Material Waste"],
    },
    {
        id: "powdercoat",
        number: "07",
        name: "Powder Coat",
        tag: "Durability · Wide Colour Range",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        desc: "High-quality powder coating to enhance durability and visual appeal. Wide range of colours and textures for a long-lasting, corrosion-resistant, professional finish on metal components.",
        subs: ["Wide Colour & Texture Range", "Corrosion-Resistant Finish", "Decorative & Protective Coatings", "Industrial & Commercial Applications"],
    },
    {
        id: "reverse",
        number: "08",
        name: "Reverse Engineering",
        tag: "3D Scanning · CAD Modelling",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        desc: "Specialised reverse engineering to replicate and modernise components using 3D scanning and CAD modelling. Enhance design accuracy and optimise performance without original drawings.",
        subs: ["3D Scanning", "CAD Modelling", "Component Replication", "Design Modernisation", "Performance Optimisation"],
    },
];

/* ─────────────────────────────────────────
   Single service card
───────────────────────────────────────── */
function ServiceCard({ svc, index }) {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const barRef = useRef(null);
    const [open, setOpen] = useState(false);

    /* Safe scroll animation — cards are VISIBLE by default,
       animation only adds a polish entrance if trigger fires */
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        // Make sure card is visible immediately regardless
        gsap.set(el, { opacity: 1, y: 0 });

        // Then attempt a nice entrance
        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 95%",
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.65,
                        ease: "power3.out",
                        delay: (index % 4) * 0.07,
                    }
                );
            },
        });

        return () => st.kill();
    }, [index]);

    const onEnter = () => {
        if (imgRef.current) gsap.to(imgRef.current, { scale: 1.07, duration: 0.55, ease: "power2.out" });
        if (barRef.current) gsap.to(barRef.current, { scaleX: 1, duration: 0.4, ease: "power3.out" });
    };
    const onLeave = () => {
        if (imgRef.current) gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
        if (barRef.current) gsap.to(barRef.current, { scaleX: 0, duration: 0.35, ease: "power2.in" });
    };

    const toggle = () => {
        const next = !open;
        setOpen(next);
        const list = cardRef.current?.querySelector(".sub-list");
        if (!list) return;
        gsap.to(list, {
            height: next ? list.scrollHeight : 0,
            duration: 0.4,
            ease: next ? "power3.out" : "power2.in",
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="bg-white flex flex-col overflow-hidden group"
            style={{ border: "1px solid #E2DDD6", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        >
            {/* ── IMAGE ── */}
            <div className="relative overflow-hidden" style={{ height: 210, flexShrink: 0 }}>
                <div
                    ref={imgRef}
                    className="absolute inset-0 will-change-transform"
                    style={{
                        backgroundImage: `url(${svc.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                {/* gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)" }}
                />

                {/* Ghost number */}
                <span
                    className="absolute top-2 left-4 select-none pointer-events-none font-black text-white/15 leading-none"
                    style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 60 }}
                >
                    {svc.number}
                </span>

                {/* Tag */}
                <div className="absolute bottom-3 left-4">
                    <span
                        className="inline-block px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-[#C9A227]"
                        style={{ background: "rgba(255,255,255,0.95)", fontFamily: "'Rajdhani',sans-serif" }}
                    >
                        {svc.tag}
                    </span>
                </div>

                {/* Gold hover bar */}
                <div
                    ref={barRef}
                    className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                    style={{ background: "#C9A227", transform: "scaleX(0)" }}
                />
            </div>

            {/* ── TEXT BODY ── */}
            <div className="flex flex-col flex-1 px-5 py-5">

                {/* Title */}
                <h3
                    className="text-[#111] font-black uppercase leading-tight text-[18px] mb-2 group-hover:text-[#C9A227] transition-colors duration-300"
                    style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.02em" }}
                >
                    {svc.name}
                </h3>

                {/* Gold line */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-[2px] w-8 bg-[#C9A227]" />
                    <div className="h-[2px] w-4" style={{ background: "rgba(201,162,39,0.3)" }} />
                </div>

                {/* Description */}
                <p
                    className="text-[13px] leading-[1.78] font-light mb-4 flex-1"
                    style={{ color: "#555555", fontFamily: "'Open Sans',sans-serif" }}
                >
                    {svc.desc}
                </p>

                {/* Toggle button */}
                <button
                    onClick={toggle}
                    className="flex items-center justify-between w-full pt-3"
                    style={{ borderTop: "1px solid #EDEAE4", background: "none", cursor: "pointer" }}
                >
                    <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ fontFamily: "'Rajdhani',sans-serif", color: open ? "#C9A227" : "#AAAAAA" }}
                    >
                        {open ? "Hide Details" : "View Details"}
                    </span>
                    <span
                        style={{
                            display: "inline-block",
                            color: open ? "#C9A227" : "#CCCCCC",
                            transform: open ? "rotate(45deg)" : "rotate(0deg)",
                            transition: "transform 0.3s, color 0.2s",
                        }}
                    >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <line x1="6.5" y1="1" x2="6.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            <line x1="1" y1="6.5" x2="12" y2="6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </span>
                </button>

                {/* Sub-list (animated height) */}
                <ul className="sub-list overflow-hidden" style={{ height: 0 }}>
                    <div className="pt-3 space-y-2">
                        {svc.subs.map((s) => (
                            <li key={s} className="flex items-center gap-2.5">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                                <span
                                    className="text-[12px] font-light"
                                    style={{ color: "#555555", fontFamily: "'Open Sans',sans-serif" }}
                                >
                                    {s}
                                </span>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Main section
───────────────────────────────────────── */
export default function ServicesSection() {
    const sectionRef = useRef(null);
    const badgeRef = useRef(null);
    const headRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        // All header elements visible by default
        [badgeRef, headRef, subRef].forEach(r => {
            if (r.current) gsap.set(r.current, { opacity: 1, y: 0 });
        });

        const ctx = gsap.context(() => {
            // Badge
            ScrollTrigger.create({
                trigger: badgeRef.current,
                start: "top 90%",
                once: true,
                onEnter: () =>
                    gsap.fromTo(badgeRef.current,
                        { y: 16, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
                    ),
            });

            // Heading words
            const words = headRef.current?.querySelectorAll(".hw");
            if (words?.length) {
                ScrollTrigger.create({
                    trigger: headRef.current,
                    start: "top 90%",
                    once: true,
                    onEnter: () =>
                        gsap.fromTo(words,
                            { yPercent: 100, opacity: 0 },
                            { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.09, ease: "power4.out", delay: 0.1 }
                        ),
                });
            }

            // Subtext
            ScrollTrigger.create({
                trigger: subRef.current,
                start: "top 92%",
                once: true,
                onEnter: () =>
                    gsap.fromTo(subRef.current,
                        { y: 12, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
                    ),
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F8F5F0] py-20 lg:py-28 overflow-hidden"
            style={{ fontFamily: "'Open Sans',sans-serif" }}
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #C8C0B0 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.22,
                }}
            />

            {/* Left gold accent strip */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: "linear-gradient(to bottom, transparent, #C9A227 25%, #C9A227 75%, transparent)" }}
            />

            {/* Top border */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, #C9A227, rgba(201,162,39,0.3), transparent)" }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-14">

                {/* ── HEADER ── */}
                <div className="mb-12">

                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30"
                        style={{ borderRadius: 2 }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                        <span
                            className="text-[10px] font-semibold tracking-[0.3em] uppercase"
                            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#9A7A20" }}
                        >
                            What We Offer
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="overflow-hidden mb-1">
                        <h2 ref={headRef} className="flex flex-wrap gap-x-4 leading-[0.9]">
                            {["Our", "Services"].map((w, i) => (
                                <span
                                    key={w}
                                    className="hw inline-block font-black uppercase tracking-tight"
                                    style={{
                                        fontFamily: "'Rajdhani',sans-serif",
                                        fontSize: "clamp(50px, 7.5vw, 100px)",
                                        color: i === 1 ? "#C9A227" : "#111111",
                                    }}
                                >
                                    {w}
                                </span>
                            ))}
                        </h2>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mt-5 mb-5">
                        <div className="h-[2px] w-12 bg-[#C9A227]" />
                        <div className="h-[2px] w-7" style={{ background: "rgba(201,162,39,0.3)" }} />
                        <div className="h-[2px] w-3" style={{ background: "rgba(201,162,39,0.15)" }} />
                    </div>

                    {/* Sub */}
                    <p
                        ref={subRef}
                        className="text-[14px] font-light leading-relaxed max-w-xl"
                        style={{ color: "#666666" }}
                    >
                        From precision CNC machining to additive manufacturing — a full spectrum of
                        engineering services tailored to your exact specifications.
                    </p>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {SERVICES.map((svc, i) => (
                        <ServiceCard key={svc.id} svc={svc} index={i} />
                    ))}
                </div>

                {/* ── BOTTOM CTA ── */}
                <div
                    className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                    style={{ borderTop: "1px solid #E2DDD6" }}
                >
                    <p className="text-[12px] font-light italic max-w-sm" style={{ color: "#999999" }}>
                        Don't see what you need? We also take on custom and one-off projects — reach out and let's talk.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase"
                        style={{
                            fontFamily: "'Rajdhani',sans-serif",
                            background: "#111111",
                            color: "#ffffff",
                            clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                            textDecoration: "none",
                            flexShrink: 0,
                        }}
                        onMouseEnter={e => gsap.to(e.currentTarget, { backgroundColor: "#C9A227", color: "#000", duration: 0.22 })}
                        onMouseLeave={e => gsap.to(e.currentTarget, { backgroundColor: "#111111", color: "#fff", duration: 0.22 })}
                    >
                        Request a Quote
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                            <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom rule */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,162,39,0.4), transparent)" }}
            />
        </section>
    );
}