import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".reveal-left",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
        );
        gsap.fromTo(".reveal-right",
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
        );
    }, { scope: container });

    return (
        <section id="about" ref={container} className="py-28 bg-[var(--bg-sec)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="reveal-left">
                        <div className="section-tag mb-4">
                            <span className="gold-line" />
                            Welcome to Zytonik
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-6 text-[var(--text-main)]">
                            ADVANCED PRECISION<br />
                            <span className="text-[var(--gold)]">ENGINEERING</span> &<br />
                            MANUFACTURING
                        </h2>
                        <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-lg">
                            With a stellar reputation in providing end-to-end Engineering
                            Consulting Services to our customers, we continuously strive to
                            meet every need and demand our clients might have.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-10">
                            With over 10 years of experience, our team possesses extensive
                            knowledge and expertise to help you design, implement, and
                            select the most efficient tools for your processes.
                        </p>
                        <div className="flex gap-6">
                            <a href="#contact" className="cta-btn px-8 py-3 border border-[var(--gold)] text-[var(--gold)] hover:text-black tracking-widest text-sm rounded-sm transition-colors duration-300">
                                <span>SCHEDULE A CONSULTATION</span>
                            </a>
                        </div>
                    </div>

                    <div className="reveal-right">
                        <div className="relative">
                            {/* Your exact features layout updated for light theme */}
                            <div className="bg-[var(--bg-card)] border border-[var(--border-light)] shadow-sm p-8 rounded-sm">
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { icon: "⚙️", title: "End-to-End Solutions", desc: "From consultation to final production, we handle every phase." },
                                        { icon: "🎯", title: "Precision-First Approach", desc: "Every component meets the highest standards of accuracy." },
                                        { icon: "🤝", title: "Trusted Partnership", desc: "Your goals become ours. We work alongside you at every step." },
                                        { icon: "💡", title: "Innovation Driven", desc: "Leveraging the latest technology for cutting-edge results." },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-4 items-start p-4 hover:bg-slate-50 rounded-sm transition-colors group">
                                            <div className="w-10 h-10 bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.2)] rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] transition-colors">
                                                <span className="text-lg">{item.icon}</span>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[var(--text-main)] mb-1 display tracking-wide">{item.title}</div>
                                                <div className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Your Floating Badge */}
                            <div className="floating-badge absolute -top-4 -right-4 bg-[var(--gold)] text-black px-4 py-2 rounded-sm shadow-lg">
                                <div className="text-2xl font-black display">10+</div>
                                <div className="text-xs font-bold uppercase tracking-wider">Years</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}