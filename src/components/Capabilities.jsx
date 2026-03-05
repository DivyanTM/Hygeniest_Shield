import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
    { title: "PRECISION", img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80", desc: "High-precision engineering solutions, using advanced CNC machining." },
    { title: "MOULD ACCESSORIES", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80", desc: "Custom mould accessories to enhance moulding efficiency and precision." },
    { title: "AUTOMATION", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80", desc: "Advanced automation components designed for seamless integration." },
    { title: "LASER CUT", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", desc: "Precision laser cutting services for smooth, burr-free edges." },
];

export default function Capabilities() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".cap-header", { y: 40, opacity: 0, duration: 1, scrollTrigger: { trigger: container.current, start: "top 80%" } });
        gsap.from(".cap-card", { y: 60, opacity: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ".cap-grid", start: "top 75%" } });
    }, { scope: container });

    return (
        <section id="services" ref={container} className="py-28 bg-[var(--dark)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="cap-header text-center mb-16">
                    <div className="section-tag mb-4 justify-center flex items-center"><span className="gold-line" />Our Capabilities<span className="gold-line ml-3" /></div>
                    <h2 className="text-5xl lg:text-7xl font-black display">WHAT WE <span className="text-[var(--gold)]">DELIVER</span></h2>
                </div>

                <div className="cap-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CAPABILITIES.map((cap) => (
                        <div key={cap.title} className="cap-card capability-card rounded-sm">
                            <div className="aspect-[3/4] relative">
                                <img src={cap.img} alt={cap.title} className="w-full h-full object-cover" />
                                <div className="overlay" />
                                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                    <div className="card-line mb-3" />
                                    <h3 className="text-white font-black display text-xl tracking-wide mb-2">{cap.title}</h3>
                                    <div className="card-desc"><p className="text-gray-300 text-xs leading-relaxed">{cap.desc}</p></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}