import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Expert Engineers" },
];

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".about-left", {
            scrollTrigger: { trigger: container.current, start: "top 75%" },
            x: -50, opacity: 0, duration: 1, ease: "power3.out"
        });

        gsap.from(".about-right", {
            scrollTrigger: { trigger: container.current, start: "top 75%" },
            x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
        });

        gsap.from(".stat-box", {
            scrollTrigger: { trigger: ".stats-container", start: "top 85%" },
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section id="about" ref={container} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

                    <div className="about-left">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-10 h-[2px] bg-[var(--gold)]" />
                            <span className="text-[var(--primary-blue)] font-bold tracking-[0.2em] uppercase text-sm">Welcome to Zytonik</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-6 text-slate-900">
                            ADVANCED PRECISION<br />
                            <span className="text-[var(--primary-blue)]">ENGINEERING</span> &<br />
                            MANUFACTURING
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            With a stellar reputation in providing end-to-end Engineering Consulting Services to our customers, we continuously strive to meet every need and demand our clients might have.
                        </p>
                        <a href="#contact" className="inline-block px-8 py-3 border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white font-bold tracking-widest text-sm rounded-sm transition-colors duration-300">
                            SCHEDULE A CONSULTATION
                        </a>
                    </div>

                    <div className="about-right bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm relative">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "End-to-End Solutions", desc: "From consultation to final production, we handle every phase." },
                                { title: "Precision-First Approach", desc: "Every component meets the highest standards of accuracy." },
                                { title: "Trusted Partnership", desc: "Your goals become ours. We work alongside you at every step." }
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start group">
                                    <CheckCircle2 className="text-[var(--gold)] mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <div className="font-bold text-slate-900 mb-1 display tracking-wide text-xl">{item.title}</div>
                                        <div className="text-slate-600 text-sm leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-100">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="stat-box text-center p-6 bg-slate-50 rounded-sm border border-slate-100 hover:border-[var(--primary-blue)] transition-colors">
                            <div className="text-4xl lg:text-5xl font-black display text-[var(--primary-blue)] mb-2">{stat.value}</div>
                            <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}