import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
    {
        title: "PRECISION",
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80",
        desc: "Advanced CNC machining to deliver accurate, durable components for critical applications.",
    },
    {
        title: "MOULD ACCESSORIES",
        img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80",
        desc: "Custom mould accessories from inserts to collets to enhance moulding efficiency.",
    },
    {
        title: "AUTOMATION",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
        desc: "Advanced components designed for seamless integration including sub-assemblies and jigs.",
    },
    {
        title: "LASER CUT",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
        desc: "Precision laser cutting services for smooth edges across metals and plastics.",
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".service-header", {
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            y: 50, opacity: 0, duration: 1,
        });

        gsap.from(".service-card", {
            scrollTrigger: { trigger: ".service-grid", start: "top 75%" },
            y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
        });
    }, { scope: sectionRef });

    return (
        <section id="services" ref={sectionRef} className="py-28 bg-[var(--bg-alt)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="service-header text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="w-10 h-[2px] bg-[var(--gold)]" />
                        <span className="text-[var(--primary-blue)] font-bold tracking-[0.2em] uppercase text-sm">Our Capabilities</span>
                        <span className="w-10 h-[2px] bg-[var(--gold)]" />
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black display text-slate-900">
                        WHAT WE <span className="text-[var(--primary-blue)]">DELIVER</span>
                    </h2>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CAPABILITIES.map((cap) => (
                        <div key={cap.title} className="service-card group bg-white border border-slate-200 hover:border-[var(--primary-blue)] shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                            <div className="h-64 overflow-hidden relative">
                                <img src={cap.img} alt={cap.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <h3 className="absolute bottom-4 left-4 text-white font-black display text-xl tracking-wide z-10">{cap.title}</h3>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="w-8 h-[2px] bg-[var(--gold)] mb-4" />
                                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
                                <button className="mt-auto pt-4 text-[var(--primary-blue)] text-sm font-bold tracking-wider hover:text-[var(--gold)] transition-colors text-left uppercase">Learn More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}