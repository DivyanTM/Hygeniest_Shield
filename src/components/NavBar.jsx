import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

// Updated data structure to match the mega-menu categories in the screenshot
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    isMegaMenu: true,
    categories: [
      {
        title: "Precision Industry",
        items: [
          "Precision Components",
          "CNC Wire Cut",
          "Precision CNC Milling",
          "Precision CNC Turning",
          "Customised Mould Inserts",
          "EDM Electrodes",
          "Milling Collets (Customized)",
          "Milling Cutters (Customized)",
        ],
      },
      {
        title: "Sheet Metal",
        items: ["Trolleys"],
      },
      {
        title: "Automation Components",
        items: [
          "Sub Assemblies",
          "Jigs & Fixtures",
          "Value Added Services",
          "Documentation",
          "Rubber Components",
          "Contract Manufacturing",
        ],
      },
      {
        title: "Additive Manufacturing",
        items: ["3D Printing"],
      },
      {
        title: "Thermoforming",
        items: [], // Left empty based on the screenshot, but category exists
      },
    ],
  },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-2xl shadow-black/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative z-50">
          <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center text-neutral-950 font-bold text-xl tracking-wider transition-transform group-hover:scale-105">
            <ShieldCheck size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-['Rajdhani'] font-bold text-xl tracking-widest text-white uppercase leading-none">
              Hygeneist
            </span>
            <span className="font-['Open_Sans'] text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mt-1">
              Shield Pte Ltd.
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.isMegaMenu ? (
                // --- MEGA MENU TRIGGER ---
                <div className="flex items-center gap-1 cursor-pointer font-['Rajdhani'] font-semibold text-[14px] tracking-widest uppercase text-neutral-300 hover:text-yellow-500 transition-colors py-6">
                  {link.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  
                  {/* --- MEGA MENU DROPDOWN --- */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] bg-white text-slate-900 border-t-4 border-yellow-500 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 p-8 cursor-default">
                    <div className="grid grid-cols-5 gap-8">
                      {link.categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-4">
                          <h4 className="font-['Rajdhani'] font-bold text-[15px] tracking-widest uppercase text-slate-950 border-b border-slate-200 pb-2">
                            {category.title}
                          </h4>
                          {category.items.length > 0 && (
                            <ul className="flex flex-col gap-3">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <a
                                    href="#services"
                                    className="font-['Open_Sans'] font-semibold text-[13px] tracking-wider uppercase text-slate-600 hover:text-yellow-600 transition-colors flex items-center gap-2 group/item"
                                  >
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // --- STANDARD LINK ---
                <a
                  href={link.href}
                  className={`font-['Rajdhani'] font-semibold text-[14px] tracking-widest uppercase py-6 transition-colors ${
                    link.label === "Home" ? "text-yellow-500" : "text-neutral-300 hover:text-yellow-500"
                  }`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-yellow-500 text-neutral-950 font-['Rajdhani'] font-bold text-[13px] tracking-widest uppercase px-8 py-3.5 hover:bg-white transition-colors relative z-50"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        >
          Get a Quote
          <ArrowRight size={16} />
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 top-[80px] bg-neutral-950 overflow-y-auto flex flex-col p-6 transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2 mt-4 pb-24">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="border-b border-white/10">
              {link.isMegaMenu ? (
                <div className="flex flex-col">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="font-['Rajdhani'] font-bold text-xl tracking-widest uppercase text-white hover:text-yellow-500 flex items-center justify-between py-4 w-full text-left"
                  >
                    {link.label}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-yellow-500" : ""}`} />
                  </button>
                  
                  {/* Mobile Accordion for Services */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-6 pl-4 border-l-2 border-yellow-500/30 ml-2">
                      {link.categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-2">
                          <h4 className="font-['Rajdhani'] font-bold text-[14px] tracking-widest uppercase text-yellow-500">
                            {category.title}
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {category.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#services"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="font-['Open_Sans'] text-sm tracking-wider uppercase text-neutral-400 hover:text-white block py-1"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-['Rajdhani'] font-bold text-xl tracking-widest uppercase text-white hover:text-yellow-500 flex items-center justify-between py-4 block"
                >
                  {link.label}
                </a>
              )}  
            </li>
          ))}
        </ul>
        
        {/* Mobile CTA (Fixed to bottom) */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-neutral-950 border-t border-white/10">
            <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-yellow-500 text-neutral-950 font-['Rajdhani'] font-bold text-[16px] tracking-widest uppercase px-8 py-4 w-full"
            >
            Get a Quote
            </a>
        </div>
      </div>
    </nav>
  );
}