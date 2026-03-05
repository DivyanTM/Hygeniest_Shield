import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Expert Engineers" },
];

export default function Hero() {
    const container = useRef(null);
    const cardsRef = useRef([]);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    // Handle window resize for responsive animations
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        // Kill any existing animations to prevent conflicts
        gsap.killTweensOf([".gsap-hero-card", ".title-line", ".hero-paragraph", ".hero-btn", ".section-tag", ".hero-line", ".card-pattern", ".card-icon", ".card-shine", ".card-corner"]);

        // Set initial states
        gsap.set([".gsap-hero-card", ".title-line", ".hero-paragraph", ".hero-btn", ".section-tag", ".hero-line"], {
            opacity: 0,
            y: 30
        });

        gsap.set(".card-pattern", {
            opacity: 0,
            scale: 0.8,
            rotation: -5
        });

        gsap.set(".card-corner", {
            scale: 0,
            opacity: 0
        });

        gsap.set(".card-shine", {
            x: "-100%"
        });

        // Create a master timeline with proper delays
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
                console.log("Animation complete");
            }
        });

        // 1. Section tag animation
        tl.to(".section-tag", {
            y: 0,
            opacity: 1,
            duration: 0.8
        });

        // 2. Title lines animation
        tl.to(".title-line", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.4");

        // 3. Gold line animation
        tl.to(".hero-line", {
            width: "6rem",
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        }, "-=0.6");

        // 4. Paragraph animation
        tl.to(".hero-paragraph", {
            y: 0,
            opacity: 1,
            duration: 0.8
        }, "-=0.4");

        // 5. Button animations
        tl.to(".hero-btn", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15
        }, "-=0.3");

        // 6. Stats cards animation with enhanced effects
        tl.to(".gsap-hero-card", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "back.out(1.2)",
            onComplete: () => {
                // Animate card patterns after cards appear
                gsap.to(".card-pattern", {
                    opacity: 0.1,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "back.out(1.5)"
                });

                gsap.to(".card-corner", {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(2)"
                });

                // Continuous shine animation
                gsap.to(".card-shine", {
                    x: "200%",
                    duration: 2,
                    repeat: -1,
                    repeatDelay: 3,
                    ease: "power2.inOut",
                    stagger: 0.2
                });
            }
        }, "-=0.2");

        // 7. Floating animation for decorative elements
        gsap.to(".floating-element", {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-3, 3)",
            duration: "random(4, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2
        });

        // 8. Subtle pulse for stat numbers
        gsap.to(".stat-number", {
            scale: 1.05,
            color: "#c9a227",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2,
            delay: 2.5
        });

        // 9. Individual card hover animations
        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    scale: 1.05,
                    y: -10,
                    duration: 0.4,
                    ease: "back.out(1.2)",
                    boxShadow: "0 20px 40px rgba(201, 162, 39, 0.2)",
                    borderColor: "#c9a227"
                });

                gsap.to(card.querySelector(".card-pattern"), {
                    opacity: 0.2,
                    rotation: 5,
                    duration: 0.6,
                    ease: "power2.out"
                });

                gsap.to(card.querySelector(".card-corner"), {
                    borderColor: "#c9a227",
                    duration: 0.3
                });

                gsap.to(card.querySelector(".stat-number"), {
                    scale: 1.1,
                    color: "#c9a227",
                    duration: 0.3
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    borderColor: "#1f1f1f"
                });

                gsap.to(card.querySelector(".card-pattern"), {
                    opacity: 0.1,
                    rotation: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });

                gsap.to(card.querySelector(".card-corner"), {
                    borderColor: "#333",
                    duration: 0.3
                });

                gsap.to(card.querySelector(".stat-number"), {
                    scale: 1,
                    color: "#ffffff",
                    duration: 0.3
                });
            });
        });

        // Cleanup function
        return () => {
            gsap.killTweensOf([".gsap-hero-card", ".title-line", ".hero-paragraph", ".hero-btn", ".section-tag", ".hero-line", ".stat-number", ".floating-element", ".card-pattern", ".card-corner", ".card-shine"]);

            cardsRef.current.forEach((card) => {
                if (card) {
                    card.removeEventListener("mouseenter", () => { });
                    card.removeEventListener("mouseleave", () => { });
                }
            });
        };

    }, { scope: container, dependencies: [windowWidth] });

    return (
        <section
            id="home"
            ref={container}
            className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Gradient Orbs */}
                <div className="decorative-circle absolute top-10 sm:top-20 -right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-[var(--gold)] opacity-[0.03] blur-3xl floating-element" />
                <div className="decorative-circle absolute -bottom-20 left-10 sm:left-20 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 rounded-full bg-[var(--gold)] opacity-[0.04] blur-3xl floating-element" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #c9a227 1px, transparent 0)`,
                    backgroundSize: windowWidth < 640 ? '30px 30px' : '50px 50px'
                }} />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
                    {/* LEFT SIDE: TEXT */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="section-tag overflow-hidden opacity-0" style={{ transform: 'translateY(30px)' }}>
                            {/* <span className="inline-block text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-gray-400 font-medium border-l-2 border-[var(--gold)] pl-2 sm:pl-3">
                                PRECISION ENGINEERING SINGAPORE
                            </span> */}
                        </div>

                        <h1 className="space-y-1 sm:space-y-2">
                            <div className="title-line opacity-0 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight" style={{ transform: 'translateY(30px)' }}>
                                HYGENIEST
                            </div>
                            <div className="title-line opacity-0 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-[var(--gold)] leading-tight" style={{ transform: 'translateY(30px)' }}>
                                SHIELD,
                            </div>
                            <div className="title-line opacity-0 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-500 leading-tight" style={{ transform: 'translateY(30px)' }}>
                                ULTIMATE
                            </div>
                            <div className="title-line opacity-0 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight" style={{ transform: 'translateY(30px)' }}>
                                PROTECTION
                            </div>
                        </h1>

                        <div className="hero-line w-0 h-1 bg-[var(--gold)] opacity-0" />

                        <p className="hero-paragraph opacity-0 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg" style={{ transform: 'translateY(30px)' }}>
                            At Zytonik Precision Pte Ltd, we deliver tailored engineering
                            solutions to meet your unique needs. Our expertise in precision
                            machining and automation sets us apart in the industry.
                        </p>

                        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                            <a
                                href="#contact"
                                className="hero-btn opacity-0 group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[var(--gold)] text-black font-bold tracking-widest text-xs sm:text-sm rounded-sm overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-[var(--gold)] border border-transparent hover:border-[var(--gold)] text-center"
                                style={{ transform: 'translateY(30px)' }}
                            >
                                <span className="relative z-10">CONTACT US</span>
                                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                            <a
                                href="#services"
                                className="hero-btn opacity-0 group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border border-gray-700 text-gray-300 font-semibold tracking-widest text-xs sm:text-sm rounded-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 hover:scale-105 text-center"
                                style={{ transform: 'translateY(30px)' }}
                            >
                                OUR SERVICES
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: STATS CARDS - ENHANCED DESIGN */}
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                            {STATS.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    ref={el => cardsRef.current[index] = el}
                                    className="gsap-hero-card opacity-0 group relative bg-gradient-to-br from-[#111] to-[#1a1a1a] backdrop-blur-sm border border-gray-800 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg overflow-hidden hover:border-[var(--gold)] transition-all duration-300"
                                    style={{
                                        transform: 'translateY(30px)',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    {/* Geometric Pattern Overlay */}
                                    <div className="card-pattern absolute inset-0 opacity-0" style={{
                                        backgroundImage: `
                                            linear-gradient(45deg, transparent 45%, rgba(201, 162, 39, 0.03) 50%, transparent 55%),
                                            repeating-linear-gradient(45deg, rgba(201, 162, 39, 0.02) 0px, rgba(201, 162, 39, 0.02) 2px, transparent 2px, transparent 6px)
                                        `,
                                        backgroundSize: '200% 200%, 8px 8px',
                                        pointerEvents: 'none'
                                    }} />

                                    {/* Corner Accents */}
                                    <div className="card-corner absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-700 opacity-0" />
                                    <div className="card-corner absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-700 opacity-0" />
                                    <div className="card-corner absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-700 opacity-0" />
                                    <div className="card-corner absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gray-700 opacity-0" />

                                    {/* Shine Effect */}
                                    <div className="card-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full" />

                                    {/* Decorative Line */}
                                    <div className="absolute top-0 right-0 w-12 h-12">
                                        <div className="absolute top-0 right-0 w-0.5 h-8 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-30" />
                                        <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-r from-[var(--gold)] to-transparent opacity-30" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="stat-number text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-white mb-1 sm:mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                                            {stat.value}
                                        </div>
                                        <div className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-wider font-medium group-hover:text-gray-300 transition-colors duration-300">
                                            {stat.label}
                                        </div>

                                        {/* Animated Progress Bar */}
                                        <div className="relative mt-3 sm:mt-4 h-0.5 bg-gray-800 overflow-hidden rounded-full">
                                            <div className="absolute inset-0 bg-[var(--gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        </div>

                                        {/* Small Indicator Dots */}
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[var(--gold)] transition-colors duration-300"
                                                    style={{ transitionDelay: `${i * 100}ms` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden xs:block">
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span className="text-[8px] sm:text-[10px] md:text-xs tracking-widest text-gray-500">SCROLL</span>
                    <div className="w-0.5 h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-[var(--gold)] to-transparent animate-scroll" />
                </div>
            </div>

            {/* Corner Accents */}
            <div className="hidden sm:block absolute top-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 border-l-2 border-t-2 border-[var(--gold)]/20 z-20" />
            <div className="hidden sm:block absolute top-0 right-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 border-r-2 border-t-2 border-[var(--gold)]/20 z-20" />
            <div className="hidden sm:block absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 border-l-2 border-b-2 border-[var(--gold)]/20 z-20" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 border-r-2 border-b-2 border-[var(--gold)]/20 z-20" />
        </section>
    );
}