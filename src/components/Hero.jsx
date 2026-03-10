import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

const STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Expert Engineers" },
];



export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex flex-col justify-center bg-neutral-950 overflow-hidden pt-20">


            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-bg-zoom"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
            />


            <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950" />


            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />


            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-center flex-grow">
                <div className="max-w-3xl">


                    <div className="flex items-center gap-4 mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="w-12 h-0.5 bg-yellow-500" />
                        <span className="font-['Open_Sans'] text-[11px] md:text-sm font-bold tracking-[0.3em] uppercase text-yellow-500">
                            Hygeiniest Sheild Pte ltd · Singapore
                        </span>
                    </div>

                    <h1 className="font-['Rajdhani'] font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-white mb-8">
                        <div className="overflow-hidden"><div className="animate-reveal" style={{ animationDelay: '0.4s' }}>Ultimate</div></div>
                        <div className="overflow-hidden"><div className="text-yellow-500 animate-reveal" style={{ animationDelay: '0.55s' }}>Protection</div></div>
                        <div className="overflow-hidden"><div className="animate-reveal" style={{ animationDelay: '0.7s' }}>&amp; Precision</div></div>
                    </h1>

                    <p className="font-['Open_Sans'] text-base md:text-lg font-light leading-relaxed text-neutral-300 max-w-xl mb-10 border-l-2 border-yellow-500 pl-6 animate-reveal" style={{ animationDelay: '0.8s' }}>
                        At Hygeniest Shield Pte Ltd, we deliver tailored engineering
                        solutions to meet your unique needs. Our expertise in precision
                        machining and automation sets us apart in the industry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-neutral-950 font-['Rajdhani'] font-bold text-[14px] tracking-[0.15em] uppercase px-10 py-4 hover:bg-white transition-colors group animate-reveal" style={{ animationDelay: '1.0s' }}>
                            Contact Us
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white font-['Rajdhani'] font-bold text-[14px] tracking-[0.15em] uppercase px-10 py-4 hover:border-yellow-500 hover:text-yellow-500 transition-colors animate-reveal" style={{ animationDelay: '1.2s' }}>
                            Our Services
                        </a>
                    </div>

                </div>
            </div>

            {/* <div className="relative z-10 w-full bg-neutral-900/80 backdrop-blur-md border-t border-white/10 mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {STATS.map((s, idx) => (
                            <div key={idx} className="py-8 px-4 text-center hover:bg-white/5 transition-colors group cursor-default animate-reveal" style={{ animationDelay: `${1.4 + (idx * 0.1)}s` }}>
                                <div className="font-['Rajdhani'] font-bold text-4xl md:text-5xl text-yellow-500 mb-2 group-hover:text-white transition-colors group-hover:scale-105 transform duration-300">
                                    {s.value}
                                </div>
                                <div className="font-['Open_Sans'] text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-yellow-500 transition-colors">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
            </div> */}
        </section>
    );
}