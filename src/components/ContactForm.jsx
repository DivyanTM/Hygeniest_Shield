import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    "Precision Engineering",
    "Sheet Metal Fabrication",
    "Automation Components",
    "Additive Manufacturing",
    "Thermoforming",
    "Others / Not Sure",
];

const INFO = [
    {
        icon: (
            <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M2.5 2.5h4l2 5-2.5 2a11 11 0 006 6l2-2.5 5 2v4a1 1 0 01-1 1C8 20 2 14 2 3.5a1 1 0 011-1z" />
            </svg>
        ),
        label: "Customer Care",
        value: "+65 89014965",
        href: "tel:+65 89014965",
    },
    {
        icon: (
            <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <rect x="2" y="4" width="18" height="14" rx="2" />
                <path d="M2 7l9 6 9-6" />
            </svg>
        ),
        label: "Email",
        value: "sales@hygenists.com",
        href: "mailto:sales@hygenists.com",
    },
    {
        icon: (
            <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M11 12.5a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M11 2C7.13 2 4 5.13 4 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" />
            </svg>
        ),
        label: "Address",
        value: "48 Toh Guan East Road #08-100 Enterprises Hup,Singapore",
        href: "https://maps.google.com/?q=51+Woodland+Close+Singapore",
    },
];

export default function ContactUs() {
    const sectionRef = useRef(null);
    const labelRef = useRef(null);
    const h1Ref = useRef(null);
    const rulerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const imgRef = useRef(null);
    const infoRefs = useRef([]);
    const fieldRefs = useRef([]);
    const btnRef = useRef(null);

    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    const [active, setActive] = useState(null);
    const [sent, setSent] = useState(false);

    const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

    const onSubmit = (e) => {
        e.preventDefault();
        gsap.timeline()
            .to(btnRef.current, { scale: 0.96, duration: 0.1 })
            .to(btnRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1,0.5)" });
        setTimeout(() => setSent(true), 300);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── section ruler sweep
            gsap.from(rulerRef.current, {
                scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "expo.inOut",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });

            // ── label + heading
            gsap.from(labelRef.current, {
                y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
                delay: 0.1,
            });

            const words = h1Ref.current?.querySelectorAll(".word");
            if (words?.length) {
                gsap.from(words, {
                    yPercent: 110, opacity: 0, duration: 0.75,
                    stagger: 0.09, ease: "power4.out",
                    scrollTrigger: { trigger: h1Ref.current, start: "top 82%" },
                    delay: 0.2,
                });
            }

            // ── left col
            gsap.from(leftColRef.current, {
                x: -30, opacity: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: leftColRef.current, start: "top 80%" },
                delay: 0.25,
            });

            // ── image
            gsap.from(imgRef.current, {
                scale: 1.06, opacity: 0, duration: 1, ease: "power2.out",
                scrollTrigger: { trigger: imgRef.current, start: "top 82%" },
                delay: 0.1,
            });

            // ── info items
            gsap.from(infoRefs.current.filter(Boolean), {
                y: 20, opacity: 0, duration: 0.55, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: infoRefs.current[0], start: "top 88%" },
            });

            // ── right col
            gsap.from(rightColRef.current, {
                x: 30, opacity: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: rightColRef.current, start: "top 80%" },
                delay: 0.15,
            });

            // ── fields stagger
            gsap.from(fieldRefs.current.filter(Boolean), {
                y: 18, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power3.out",
                scrollTrigger: { trigger: rightColRef.current, start: "top 78%" },
                delay: 0.35,
            });

        }, sectionRef);

        // info hover
        infoRefs.current.forEach((el) => {
            if (!el) return;
            const ico = el.querySelector(".ic");
            el.addEventListener("mouseenter", () => {
                gsap.to(ico, { x: 3, color: "#C9A227", duration: 0.22, ease: "power2.out" });
                gsap.to(el, { x: 4, duration: 0.22, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(ico, { x: 0, color: "#C9A227", duration: 0.22 });
                gsap.to(el, { x: 0, duration: 0.22 });
            });
        });

        // btn hover
        const b = btnRef.current;
        if (b) {
            b.addEventListener("mouseenter", () => gsap.to(b, { backgroundColor: "#b8921f", duration: 0.22 }));
            b.addEventListener("mouseleave", () => gsap.to(b, { backgroundColor: "#C9A227", duration: 0.22 }));
        }

        return () => ctx.revert();
    }, []);

    // Input base classes — raw, minimal, no card wrapping
    const inputBase = [
        "w-full bg-transparent",
        "border-b-2 border-[#DDD8CE]",
        "pt-5 pb-2 px-0",
        "text-[14px] text-[#111] font-light",
        "placeholder-[#C8C2B8]",
        "focus:outline-none",
        "transition-colors duration-200",
        "appearance-none",
    ].join(" ");

    const borderActive = (name) => ({
        borderBottomColor: active === name ? "#C9A227" : undefined,
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F8F5F0] overflow-hidden"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
            {/* Subtle noise texture via SVG filter */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /></filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>

            {/* Accent left strip */}
            <div className="absolute left-0 inset-y-0 w-1 bg-[#C9A227]" />

            {/* ── SECTION HEADER ─────────────────────────── */}
            <div className="relative max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 pt-20 pb-12">

                {/* Eyebrow */}
                <div ref={labelRef} className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    <span
                        className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C9A227]"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                        Get In Touch
                    </span>
                </div>

                {/* H1 */}
                <h2
                    ref={h1Ref}
                    className="flex flex-wrap gap-x-5 overflow-hidden mb-0"
                >
                    {["Contact", "Us"].map((w, i) => (
                        <span
                            key={w}
                            className={`word inline-block font-black uppercase leading-[0.85] tracking-tight
                text-[clamp(56px,8.5vw,108px)]
                ${i === 1 ? "text-[#C9A227]" : "text-[#111]"}`}
                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                        >
                            {w}
                        </span>
                    ))}
                </h2>

                {/* Ruler line */}
                <div
                    ref={rulerRef}
                    className="mt-6 h-[1px] w-full origin-left"
                    style={{ background: "linear-gradient(to right, #C9A227, rgba(201,162,39,0.15), transparent)" }}
                />
            </div>

            {/* ── BODY ────────────────────────────────────── */}
            <div className="relative max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 xl:gap-28">

                    {/* ── LEFT ── */}
                    <div ref={leftColRef} className="pb-16 lg:pb-0">

                        {/* Photo */}
                        <div
                            ref={imgRef}
                            className="relative overflow-hidden mb-10"
                            style={{ height: "260px" }}
                        >
                            <img
                                src="https://media.istockphoto.com/id/1201104223/photo/old-spinning-machine-at-an-abandoned-textile-factory-in-the-morning-sun.webp?s=2048x2048&w=is&k=20&c=2sfMEKjo0y5exbZqwpFTk3pWNTvPCYrmFKQwLmqX_nM="
                                alt="Precision machining"
                                className="w-full h-full object-cover"
                                style={{ filter: "grayscale(20%) brightness(0.88)" }}
                            />
                            {/* Overlay */}
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(120deg, rgba(8,8,8,0.55) 0%, transparent 70%)" }}
                            />
                            {/* Caption */}
                            <div className="absolute bottom-5 left-6">
                                <p
                                    className="text-white font-bold text-base tracking-wider uppercase"
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                >
                                    Hygenists Shield Pte Ltd
                                </p>
                                <p className="text-white/45 text-[10px] tracking-[0.22em] uppercase font-light mt-0.5">
                                    Singapore · Est. 2020
                                </p>
                            </div>
                            {/* Gold corner bracket */}
                            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C9A227]" />
                            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C9A227]" />
                        </div>

                        {/* Info rows */}
                        <div className="space-y-0 divide-y divide-[#E8E3DA]">
                            {INFO.map((item, i) => (
                                <div
                                    key={item.label}
                                    ref={el => infoRefs.current[i] = el}
                                    className="flex items-start gap-5 py-5 cursor-default"
                                >
                                    {/* Icon */}
                                    <div className="ic flex-shrink-0 mt-0.5 text-[#C9A227]">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p
                                            className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#B8B0A4] mb-1"
                                            style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                        >
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-[13px] text-[#333] font-light leading-snug hover:text-[#C9A227] transition-colors duration-200"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-[13px] text-[#333] font-light leading-snug">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hours note */}
                        <div className="mt-6 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
                            <p className="text-[11px] text-[#999] font-light tracking-wide">
                                Mon – Fri &nbsp;·&nbsp; 9:00 AM – 6:00 PM &nbsp;·&nbsp; SGT
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: FORM ── */}
                    <div ref={rightColRef}>

                        {sent ? (
                            /* ── SUCCESS */
                            <div className="flex flex-col items-start justify-center h-full py-16 space-y-5">
                                <div
                                    className="w-14 h-14 bg-[#C9A227] flex items-center justify-center"
                                    style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}
                                >
                                    <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 11l5 5L18 6" />
                                    </svg>
                                </div>
                                <h3
                                    className="text-[#111] font-black text-3xl tracking-tight uppercase"
                                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                                >
                                    Message Sent
                                </h3>
                                <p className="text-[#777] text-[13px] font-light leading-relaxed max-w-sm">
                                    Thank you for reaching out. Our team will get back to you within one business day.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                                    className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A227] border-b border-[#C9A227]/40 pb-0.5 hover:border-[#C9A227] transition-colors duration-200"
                                    style={{ fontFamily: "'Rajdhani', sans-serif", background: "none" }}
                                >
                                    ← Send Another
                                </button>
                            </div>
                        ) : (
                            /* ── FORM */
                            <form onSubmit={onSubmit} className="space-y-7">

                                {/* Name + Company */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                    {[
                                        { key: "name", label: "Full Name *", placeholder: "John Smith", type: "text", required: true },
                                        { key: "company", label: "Company", placeholder: "Your Company Ltd", type: "text", required: false },
                                    ].map(({ key, label, placeholder, type, required }, i) => (
                                        <div key={key} ref={el => fieldRefs.current[i] = el} className="relative">
                                            <label
                                                htmlFor={key}
                                                className="absolute top-0 left-0 text-[10px] font-semibold tracking-[0.22em] uppercase pointer-events-none"
                                                style={{
                                                    fontFamily: "'Rajdhani', sans-serif",
                                                    color: active === key ? "#C9A227" : "#B8B0A4",
                                                    transition: "color 0.2s",
                                                }}
                                            >
                                                {label}
                                            </label>
                                            <input
                                                id={key} name={key} type={type}
                                                required={required}
                                                value={form[key]}
                                                onChange={set(key)}
                                                placeholder={placeholder}
                                                className={inputBase}
                                                style={borderActive(key)}
                                                onFocus={() => setActive(key)}
                                                onBlur={() => setActive(null)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Email + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                    {[
                                        { key: "email", label: "Email Address *", placeholder: "john@example.com", type: "email", required: true },
                                        { key: "phone", label: "Phone Number", placeholder: "+65 XXXX XXXX", type: "tel", required: false },
                                    ].map(({ key, label, placeholder, type, required }, i) => (
                                        <div key={key} ref={el => fieldRefs.current[2 + i] = el} className="relative">
                                            <label
                                                htmlFor={key}
                                                className="absolute top-0 left-0 text-[10px] font-semibold tracking-[0.22em] uppercase pointer-events-none"
                                                style={{
                                                    fontFamily: "'Rajdhani', sans-serif",
                                                    color: active === key ? "#C9A227" : "#B8B0A4",
                                                    transition: "color 0.2s",
                                                }}
                                            >
                                                {label}
                                            </label>
                                            <input
                                                id={key} name={key} type={type}
                                                required={required}
                                                value={form[key]}
                                                onChange={set(key)}
                                                placeholder={placeholder}
                                                className={inputBase}
                                                style={borderActive(key)}
                                                onFocus={() => setActive(key)}
                                                onBlur={() => setActive(null)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Service select */}
                                <div ref={el => fieldRefs.current[4] = el} className="relative">
                                    <label
                                        htmlFor="service"
                                        className="absolute top-0 left-0 text-[10px] font-semibold tracking-[0.22em] uppercase pointer-events-none"
                                        style={{
                                            fontFamily: "'Rajdhani', sans-serif",
                                            color: active === "service" ? "#C9A227" : "#B8B0A4",
                                            transition: "color 0.2s",
                                        }}
                                    >
                                        Service Required
                                    </label>
                                    <select
                                        id="service" name="service"
                                        value={form.service}
                                        onChange={set("service")}
                                        className={`${inputBase} cursor-pointer`}
                                        style={{
                                            ...borderActive("service"),
                                            color: form.service ? "#111" : "#C8C2B8",
                                        }}
                                        onFocus={() => setActive("service")}
                                        onBlur={() => setActive(null)}
                                    >
                                        <option value="" disabled>Select a service…</option>
                                        {SERVICES.map(s => <option key={s} value={s} className="text-[#111]">{s}</option>)}
                                    </select>
                                </div>

                                {/* Message */}
                                <div ref={el => fieldRefs.current[5] = el} className="relative">
                                    <label
                                        htmlFor="message"
                                        className="absolute top-0 left-0 text-[10px] font-semibold tracking-[0.22em] uppercase pointer-events-none"
                                        style={{
                                            fontFamily: "'Rajdhani', sans-serif",
                                            color: active === "message" ? "#C9A227" : "#B8B0A4",
                                            transition: "color 0.2s",
                                        }}
                                    >
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message" name="message" required rows={4}
                                        value={form.message}
                                        onChange={set("message")}
                                        placeholder="Describe your project or requirements…"
                                        className={`${inputBase} resize-none`}
                                        style={borderActive("message")}
                                        onFocus={() => setActive("message")}
                                        onBlur={() => setActive(null)}
                                    />
                                </div>

                                {/* Submit */}
                                <div ref={el => fieldRefs.current[6] = el} className="flex items-center justify-between gap-6 pt-2">
                                    <p className="text-[11px] text-[#B8B0A4] font-light leading-snug hidden sm:block">
                                        We'll respond within one business day.
                                    </p>
                                    <button
                                        ref={btnRef}
                                        type="submit"
                                        className="flex-shrink-0 inline-flex items-center gap-3 px-9 py-4 text-black font-bold text-[12px] tracking-[0.2em] uppercase"
                                        style={{
                                            fontFamily: "'Rajdhani', sans-serif",
                                            backgroundColor: "#C9A227",
                                            clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                                        }}
                                    >
                                        Send Message
                                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, #C9A227, transparent)" }}
            />
        </section>
    );
}