import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import servicePages from "../data/ServicePages";

gsap.registerPlugin(ScrollTrigger);

// ─── Helper: safe scroll animation ────────────────────────────
function animateIn(el, from, delay = 0) {
  if (!el) return;
  gsap.set(el, { opacity: 1, x: 0, y: 0 });
  ScrollTrigger.create({
    trigger: el, start: "top 90%", once: true,
    onEnter: () => gsap.fromTo(el, from,
      { ...from.end, opacity: 1, duration: 0.7, ease: "power3.out", delay }),
  });
}

// ─────────────────────────────────────────────────────────────
//  SECTION 1 — Why Us
// ─────────────────────────────────────────────────────────────
function WhyUs({ data }) {
  const wrapRef    = useRef(null);
  const imgRef     = useRef(null);
  const textRef    = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // set visible immediately — never invisible
      gsap.set([textRef.current, imgRef.current], { opacity: 1 });
      featureRefs.current.forEach(el => el && gsap.set(el, { opacity: 1 }));

      // slide in from sides on scroll
      ScrollTrigger.create({ trigger: textRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(textRef.current,
          { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }) });

      ScrollTrigger.create({ trigger: imgRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(imgRef.current,
          { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }) });

      // feature cards stagger
      ScrollTrigger.create({ trigger: featureRefs.current[0], start: "top 92%", once: true,
        onEnter: () => gsap.fromTo(featureRefs.current.filter(Boolean),
          { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power3.out" }) });

      // hover on feature cards
      featureRefs.current.forEach(card => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -3, borderColor: "#C9A227", boxShadow: "0 8px 28px rgba(201,162,39,0.12)", duration: 0.25, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, borderColor: "#E8E3DA", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", duration: 0.25 });
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [data]);

  return (
    <section id="why-us" ref={wrapRef}
      className="bg-[#F8F5F0] py-20 lg:py-28 scroll-mt-20"
      style={{ fontFamily: "'Open Sans',sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-[10px] font-semibold tracking-[0.32em] uppercase"
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#9A7A20" }}>
            Why Choose Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── LEFT: text + feature cards ── */}
          <div ref={textRef}>
            <h2 className="font-black uppercase text-[#111] leading-[0.9] tracking-tight mb-5"
              style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4.5vw,56px)" }}>
              Why Choose <span style={{ color: "#C9A227" }}>Us?</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-[#C9A227]" />
              <div className="h-[2px] w-6" style={{ background: "rgba(201,162,39,0.3)" }} />
            </div>
            <p className="text-[14.5px] text-[#555] font-light leading-[1.88] mb-8">
              {data.intro}
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((f, i) => (
                <div key={i} ref={el => featureRefs.current[i] = el}
                  className="flex items-start gap-3.5 p-4 bg-white border border-[#E8E3DA] cursor-default"
                  style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  {/* Gold check icon */}
                  <div className="flex-shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-[#C9A227]/10 border border-[#C9A227]/25">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5l3 3.5L11 1" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12.5px] font-bold text-[#111] mb-0.5"
                      style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.04em" }}>
                      {f.title}
                    </p>
                    <p className="text-[11.5px] text-[#777] font-light leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: image ── */}
          <div ref={imgRef} className="relative overflow-hidden" style={{ borderRadius: 2 }}>
            <img src={data.image} alt="Why choose us"
              className="w-full object-cover"
              style={{ height: 460, filter: "brightness(0.88) saturate(0.82)" }} />
            {/* overlays */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,8,8,0.35) 0%, transparent 55%)" }} />
            {/* gold left accent */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px]"
              style={{ background: "linear-gradient(to bottom, #C9A227, rgba(201,162,39,0.2))" }} />
            {/* corner brackets */}
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A227]/40" />
            <div className="absolute bottom-4 left-7 w-5 h-5 border-b-2 border-l-2 border-[#C9A227]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 2 — Our Services Include
// ─────────────────────────────────────────────────────────────
function OurServices({ services }) {
  const wrapRef  = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach(el => el && gsap.set(el, { opacity: 1 }));
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: wrapRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(cardRefs.current.filter(Boolean),
          { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }) });

      // hover
      cardRefs.current.forEach(card => {
        if (!card) return;
        const img   = card.querySelector(".svc-img");
        const bar   = card.querySelector(".svc-bar");
        const title = card.querySelector(".svc-title");
        card.addEventListener("mouseenter", () => {
          gsap.to(img,   { scale: 1.07, duration: 0.5, ease: "power2.out" });
          gsap.to(bar,   { scaleX: 1,   duration: 0.4, ease: "power3.out" });
          gsap.to(title, { color: "#C9A227", duration: 0.2 });
          gsap.to(card,  { borderColor: "#C9A227", duration: 0.25 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(img,   { scale: 1,   duration: 0.5, ease: "power2.out" });
          gsap.to(bar,   { scaleX: 0,  duration: 0.35, ease: "power2.in" });
          gsap.to(title, { color: "#111111", duration: 0.2 });
          gsap.to(card,  { borderColor: "#E2DDD6", duration: 0.25 });
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [services]);

  return (
    <section id="our-services" ref={wrapRef}
      className="bg-white py-20 lg:py-28 scroll-mt-20"
      style={{ fontFamily: "'Open Sans',sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-[10px] font-semibold tracking-[0.32em] uppercase"
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#9A7A20" }}>
            Our Services Include
          </span>
        </div>

        <h2 className="font-black uppercase text-[#111] leading-[0.9] tracking-tight mb-3"
          style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4.5vw,56px)" }}>
          What We <span style={{ color: "#C9A227" }}>Offer</span>
        </h2>
        <div className="flex items-center gap-2 mb-12">
          <div className="h-[2px] w-12 bg-[#C9A227]" />
          <div className="h-[2px] w-6" style={{ background: "rgba(201,162,39,0.3)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {services.map((svc, i) => (
            <div key={svc.title} ref={el => cardRefs.current[i] = el}
              className="flex flex-col overflow-hidden bg-[#F8F5F0] border border-[#E2DDD6] cursor-default"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

              {/* Image */}
              <div className="overflow-hidden relative" style={{ height: 170, flexShrink: 0 }}>
                <img src={svc.image} alt={svc.title}
                  className="svc-img absolute inset-0 w-full h-full object-cover will-change-transform"
                  style={{ objectPosition: "center" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.42) 100%)" }} />
                {/* hover bar */}
                <div className="svc-bar absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                  style={{ background: "#C9A227", transform: "scaleX(0)" }} />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="svc-title font-bold text-[#111] text-[13.5px] mb-1.5"
                  style={{ fontFamily: "'Rajdhani',sans-serif", letterSpacing: "0.04em" }}>
                  {svc.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="h-[1.5px] w-6 bg-[#C9A227]" />
                </div>
                <p className="text-[12px] text-[#666] font-light leading-relaxed flex-1">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 3 — Industries We Serve
// ─────────────────────────────────────────────────────────────
function Industries({ industries }) {
  const wrapRef  = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach(el => el && gsap.set(el, { opacity: 1 }));
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: wrapRef.current, start: "top 88%", once: true,
        onEnter: () => gsap.fromTo(cardRefs.current.filter(Boolean),
          { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)" }) });

      // hover
      cardRefs.current.forEach(card => {
        if (!card) return;
        const img   = card.querySelector(".ind-img");
        const bar   = card.querySelector(".ind-bar");
        const title = card.querySelector(".ind-title");
        card.addEventListener("mouseenter", () => {
          gsap.to(img,   { scale: 1.08, duration: 0.55, ease: "power2.out" });
          gsap.to(bar,   { scaleX: 1,   duration: 0.4,  ease: "power3.out" });
          gsap.to(title, { color: "#C9A227", duration: 0.2 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(img,   { scale: 1,   duration: 0.55, ease: "power2.out" });
          gsap.to(bar,   { scaleX: 0,  duration: 0.35, ease: "power2.in" });
          gsap.to(title, { color: "#ffffff", duration: 0.2 });
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [industries]);

  return (
    <section id="industries" ref={wrapRef}
      className="bg-[#F8F5F0] py-20 lg:py-28 scroll-mt-20"
      style={{ fontFamily: "'Open Sans',sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <span className="text-[10px] font-semibold tracking-[0.32em] uppercase"
            style={{ fontFamily: "'Rajdhani',sans-serif", color: "#9A7A20" }}>
            Industries We Serve
          </span>
        </div>

        <h2 className="font-black uppercase text-[#111] leading-[0.9] tracking-tight mb-3"
          style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(32px,4.5vw,56px)" }}>
          Our <span style={{ color: "#C9A227" }}>Sectors</span>
        </h2>
        <div className="flex items-center gap-2 mb-12">
          <div className="h-[2px] w-12 bg-[#C9A227]" />
          <div className="h-[2px] w-6" style={{ background: "rgba(201,162,39,0.3)" }} />
        </div>

        {/* Industry image cards */}
        <div className={`grid gap-4 ${
          industries.length <= 3 ? "grid-cols-1 sm:grid-cols-3" :
          industries.length === 4 ? "grid-cols-2 lg:grid-cols-4" :
          "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        }`}>
          {industries.map((ind, i) => (
            <div key={ind.name} ref={el => cardRefs.current[i] = el}
              className="relative overflow-hidden cursor-default"
              style={{ height: 220 }}>
              {/* Image */}
              <img src={ind.image} alt={ind.name}
                className="ind-img absolute inset-0 w-full h-full object-cover will-change-transform" />
              {/* gradient */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.1) 60%)" }} />
              {/* Gold bottom bar */}
              <div className="ind-bar absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                style={{ background: "#C9A227", transform: "scaleX(0)" }} />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="ind-title text-white font-black text-[14px] uppercase mb-1"
                  style={{ fontFamily: "'Rajdhani',sans-serif" }}>
                  {ind.name}
                </h3>
                <p className="text-white/50 text-[11px] font-light leading-snug">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 4 — Bottom CTA
// ─────────────────────────────────────────────────────────────
function BottomCTA({ cta, title }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.set(ref.current, { opacity: 1 });
    ScrollTrigger.create({ trigger: ref.current, start: "top 90%", once: true,
      onEnter: () => gsap.fromTo(ref.current,
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }) });
  }, []);

  return (
    <section ref={ref} className="bg-[#111]" style={{ fontFamily: "'Open Sans',sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-white font-black uppercase leading-tight tracking-tight mb-2"
              style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(24px,3.5vw,42px)" }}>
              {cta.heading} <span style={{ color: "#C9A227" }}>Today</span>
            </h2>
            <p className="text-white/40 text-[13px] font-light max-w-lg">{cta.sub}</p>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-3 px-9 py-4 font-bold text-[12px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              background: "#C9A227",
              color: "#000",
              textDecoration: "none",
              clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
            }}
            onMouseEnter={e => gsap.to(e.currentTarget, { backgroundColor: "#fff", duration: 0.22 })}
            onMouseLeave={e => gsap.to(e.currentTarget, { backgroundColor: "#C9A227", duration: 0.22 })}>
            Contact Us
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
              <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN EXPORT — receives a `slug` prop (the route key)
// ─────────────────────────────────────────────────────────────
export default function ServicePageContent({ slug }) {
  const data = servicePages[slug];

  if (!data) {
    return (
      <div className="py-32 text-center" style={{ fontFamily: "'Open Sans',sans-serif" }}>
        <p className="text-[#999] text-lg">No content found for <strong>{slug}</strong>.</p>
        <Link to="/services" style={{ color: "#C9A227", textDecoration: "none", fontSize: 13, marginTop: 12, display: "inline-block" }}>
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Sticky anchor nav matching the zytonik.com tab strip */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#E8E3DA]"
        style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.07)", fontFamily: "'Rajdhani',sans-serif" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center gap-0 overflow-x-auto">
          {[
            { label: "Why Choose Us?",      href: "#why-us"       },
            { label: "Our Services Include", href: "#our-services" },
            { label: "Industries We Serve", href: "#industries"   },
          ].map(item => (
            <a key={item.href} href={item.href}
              className="flex-shrink-0 px-5 py-4 text-[11px] font-bold tracking-[0.18em] uppercase border-b-2 border-transparent hover:border-[#C9A227] hover:text-[#C9A227] transition-colors duration-200"
              style={{ color: "#777", textDecoration: "none" }}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Three content sections */}
      <WhyUs data={{ intro: data.intro, image: data.image, features: data.features }} />
      <OurServices services={data.services} />
      <Industries industries={data.industries} />
      <BottomCTA cta={data.cta} title={data.title} />
    </>
  );
}