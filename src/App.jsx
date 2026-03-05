// import { useState, useEffect, useRef } from "react";

// // GSAP via CDN - loaded in index or via script tag
// // For this artifact, we'll use inline animation with CSS + a lightweight GSAP-like setup

// const NAV_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   {
//     label: "Services",
//     href: "#services",
//     dropdown: [
//       "Precision Industry",
//       "Sheet Metal",
//       "Automation Components",
//       "Additive Manufacturing",
//       "Thermoforming",
//     ],
//   },
//   { label: "Blogs", href: "#blogs" },
//   { label: "Contact Us", href: "#contact" },
// ];

// const CAPABILITIES = [
//   {
//     title: "PRECISION",
//     img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80",
//     desc: "At Zytonik, we specialize in high-precision engineering solutions, using advanced CNC machining to deliver accurate, durable components for critical applications in various industries.",
//   },
//   {
//     title: "MOULD ACCESSORIES",
//     img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80",
//     desc: "Zytonik offers custom mould accessories to enhance moulding efficiency and precision. From inserts to collets, our accessories ensure optimal performance and long-lasting durability.",
//   },
//   {
//     title: "AUTOMATION COMPONENTS",
//     img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
//     desc: "We provide advanced automation components designed for seamless integration and high efficiency. Our solutions include sub-assemblies, jigs, fixtures, and value-added services.",
//   },
//   {
//     title: "LASER CUT",
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
//     desc: "Zytonik offers precision laser cutting services for smooth, burr-free edges and complex geometries. We handle metals, plastics, and composites with minimal waste and maximum accuracy.",
//   },
//   {
//     title: "POWDER COAT",
//     img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
//     desc: "We provide high-quality powder coating solutions to enhance durability and visual appeal. Choose from a wide range of colors and textures for long-lasting, professional finishes.",
//   },
//   {
//     title: "SHEET METAL",
//     img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&q=80",
//     desc: "At Zytonik, we deliver custom sheet metal fabrication with precise cutting, bending, and welding. Our durable and lightweight solutions meet industry-specific requirements efficiently.",
//   },
//   {
//     title: "REVERSE ENGINEERING",
//     img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
//     desc: "Zytonik specializes in reverse engineering to replicate and modernize components. We use advanced 3D scanning and CAD modeling to enhance design accuracy and optimize performance.",
//   },
//   {
//     title: "ADDITIVE MANUFACTURING",
//     img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=400&q=80",
//     desc: "We offer cutting-edge additive manufacturing services to produce complex, custom parts with reduced waste and rapid prototyping. Unlock innovation with our 3D printing expertise.",
//   },
// ];

// const STATS = [
//   { value: "10+", label: "Years Experience" },
//   { value: "500+", label: "Projects Completed" },
//   { value: "200+", label: "Happy Clients" },
//   { value: "50+", label: "Expert Engineers" },
// ];

// export default function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);
//   const heroRef = useRef(null);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // GSAP-style animation using IntersectionObserver + CSS
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

//         * { font-family: 'Barlow', sans-serif; }
//         h1, h2, h3, .display { font-family: 'Barlow Condensed', sans-serif; }

//         :root {
//           --gold: #c9a227;
//           --gold-light: #e8bc3d;
//           --dark: #0a0a0f;
//           --dark-2: #111118;
//           --dark-3: #1a1a24;
//           --steel: #8892a4;
//         }

//         .reveal {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .reveal.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .reveal-left {
//           opacity: 0;
//           transform: translateX(-50px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }
//         .reveal-left.animate-in {
//           opacity: 1;
//           transform: translateX(0);
//         }
//         .reveal-right {
//           opacity: 0;
//           transform: translateX(50px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }
//         .reveal-right.animate-in {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .hero-text-anim {
//           animation: heroSlide 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           opacity: 0;
//         }
//         @keyframes heroSlide {
//           from { opacity: 0; transform: translateY(60px) skewY(2deg); }
//           to   { opacity: 1; transform: translateY(0) skewY(0); }
//         }

//         .gold-line {
//           display: inline-block;
//           width: 60px;
//           height: 3px;
//           background: var(--gold);
//           vertical-align: middle;
//           margin-right: 14px;
//         }

//         .capability-card {
//           position: relative;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .capability-card:hover {
//           transform: translateY(-8px);
//         }
//         .capability-card .overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.5) 50%, transparent 100%);
//           transition: background 0.4s ease;
//         }
//         .capability-card:hover .overlay {
//           background: linear-gradient(to top, rgba(10,10,15,0.98) 0%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,0.3) 100%);
//         }
//         .capability-card .card-desc {
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.5s ease, opacity 0.4s ease;
//           opacity: 0;
//         }
//         .capability-card:hover .card-desc {
//           max-height: 200px;
//           opacity: 1;
//         }
//         .capability-card .card-line {
//           width: 0;
//           transition: width 0.5s ease;
//           height: 2px;
//           background: var(--gold);
//         }
//         .capability-card:hover .card-line {
//           width: 40px;
//         }

//         .stat-number {
//           background: linear-gradient(135deg, var(--gold-light), var(--gold));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .nav-scrolled {
//           background: rgba(10,10,15,0.97) !important;
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid rgba(201,162,39,0.15);
//           box-shadow: 0 4px 30px rgba(0,0,0,0.5);
//         }

//         .cta-btn {
//           position: relative;
//           overflow: hidden;
//           letter-spacing: 0.1em;
//           font-weight: 600;
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 0.9rem;
//         }
//         .cta-btn::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: var(--gold);
//           transform: translateX(-105%);
//           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           z-index: 0;
//         }
//         .cta-btn:hover::before { transform: translateX(0); }
//         .cta-btn span { position: relative; z-index: 1; }

//         .hero-bg {
//           background: 
//             radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.05) 0%, transparent 60%),
//             radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.03) 0%, transparent 50%),
//             linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%);
//         }

//         .grid-overlay {
//           background-image: 
//             linear-gradient(rgba(201,162,39,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(201,162,39,0.03) 1px, transparent 1px);
//           background-size: 60px 60px;
//         }

//         .section-tag {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 0.75rem;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           color: var(--gold);
//           font-weight: 600;
//         }

//         .contact-input {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.1);
//           transition: border-color 0.3s;
//         }
//         .contact-input:focus {
//           outline: none;
//           border-color: var(--gold);
//           background: rgba(255,255,255,0.06);
//         }

//         .floating-badge {
//           animation: floatBadge 3s ease-in-out infinite;
//         }
//         @keyframes floatBadge {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         .hero-line {
//           animation: expandLine 1.5s ease forwards;
//           animation-delay: 0.8s;
//           width: 0;
//         }
//         @keyframes expandLine {
//           to { width: 80px; }
//         }

//         .dropdown-menu {
//           animation: dropIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         @keyframes dropIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         html { scroll-behavior: smooth; }
//       `}</style>

//       {/* ─── NAVBAR ─── */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled ? "nav-scrolled" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <a href="#home" className="flex items-center gap-3 group">
//               <div className="w-10 h-10 bg-[var(--gold)] rounded-sm flex items-center justify-center">
//                 <span className="text-black font-black text-xl display">Z</span>
//               </div>
//               <div>
//                 <div className="text-white font-bold text-lg leading-none display tracking-wide">
//                   ZYTONIK
//                 </div>
//                 <div className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
//                   Precision
//                 </div>
//               </div>
//             </a>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center gap-8">
//               {NAV_LINKS.map((link) => (
//                 <div key={link.label} className="relative group">
//                   <a
//                     href={link.href}
//                     className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
//                     onClick={
//                       link.dropdown
//                         ? (e) => {
//                             e.preventDefault();
//                             setServicesOpen(!servicesOpen);
//                           }
//                         : undefined
//                     }
//                   >
//                     {link.label}
//                     {link.dropdown && (
//                       <span className="ml-1 text-xs opacity-60">▾</span>
//                     )}
//                   </a>
//                   {link.dropdown && (
//                     <div className="absolute top-full left-0 mt-2 w-56 bg-[#111118] border border-gray-800 rounded-sm shadow-2xl hidden group-hover:block dropdown-menu">
//                       {link.dropdown.map((item) => (
//                         <a
//                           key={item}
//                           href="#services"
//                           className="block px-4 py-3 text-sm text-gray-300 hover:text-[var(--gold)] hover:bg-[rgba(201,162,39,0.05)] border-b border-gray-800/50 last:border-0 transition-colors"
//                         >
//                           {item}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <a
//                 href="#contact"
//                 className="cta-btn px-6 py-2.5 border border-[var(--gold)] text-[var(--gold)] hover:text-black transition-colors duration-300 rounded-sm"
//               >
//                 <span>GET IN TOUCH</span>
//               </a>
//             </div>

//             {/* Mobile hamburger */}
//             <button
//               className="lg:hidden text-white p-2"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <div
//                 className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
//                   menuOpen ? "rotate-45 translate-y-2" : ""
//                 }`}
//               />
//               <div
//                 className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
//                   menuOpen ? "opacity-0" : ""
//                 }`}
//               />
//               <div
//                 className={`w-6 h-0.5 bg-white transition-all ${
//                   menuOpen ? "-rotate-45 -translate-y-2" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="lg:hidden bg-[#111118] border-t border-gray-800 px-6 py-4">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="block py-3 text-gray-300 hover:text-[var(--gold)] border-b border-gray-800/50 last:border-0 font-medium tracking-wide uppercase text-sm"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ─── HERO ─── */}
//       <section
//         id="home"
//         ref={heroRef}
//         className="relative min-h-screen flex items-center hero-bg grid-overlay"
//       >
//         {/* Decorative elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[var(--gold)] opacity-[0.03] blur-3xl" />
//           <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-[var(--gold)] opacity-[0.04] blur-2xl" />
//           <div className="absolute top-20 right-20 opacity-10">
//             <svg width="300" height="300" viewBox="0 0 300 300">
//               <circle cx="150" cy="150" r="120" fill="none" stroke="#c9a227" strokeWidth="0.5" strokeDasharray="4 8" />
//               <circle cx="150" cy="150" r="80" fill="none" stroke="#c9a227" strokeWidth="0.5" strokeDasharray="2 6" />
//               <circle cx="150" cy="150" r="40" fill="none" stroke="#c9a227" strokeWidth="1" />
//               <line x1="30" y1="150" x2="270" y2="150" stroke="#c9a227" strokeWidth="0.3" />
//               <line x1="150" y1="30" x2="150" y2="270" stroke="#c9a227" strokeWidth="0.3" />
//             </svg>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div
//                 className="section-tag mb-6 hero-text-anim"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 <span className="gold-line" />
//                 Precision Engineering Singapore
//               </div>
//               <h1
//                 className="text-6xl lg:text-8xl font-black leading-none mb-6 display hero-text-anim"
//                 style={{ animationDelay: "0.3s" }}
//               >
//                 PRECISION
//                 <br />
//                 <span className="text-[var(--gold)]">ENGINEERING,</span>
//                 <br />
//                 <span className="text-gray-500">UNMATCHED</span>
//                 <br />
//                 EXCELLENCE
//               </h1>
//               <div
//                 className="hero-line h-1 bg-[var(--gold)] mb-6"
//               />
//               <p
//                 className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10 hero-text-anim"
//                 style={{ animationDelay: "0.5s" }}
//               >
//                 At Zytonik Precision Pte Ltd, we deliver tailored engineering
//                 solutions to meet your unique needs. Our expertise in precision
//                 machining and automation sets us apart.
//               </p>
//               <div
//                 className="flex flex-wrap gap-4 hero-text-anim"
//                 style={{ animationDelay: "0.7s" }}
//               >
//                 <a
//                   href="#contact"
//                   className="cta-btn px-8 py-4 bg-[var(--gold)] text-black font-bold tracking-widest text-sm rounded-sm hover:bg-transparent hover:text-[var(--gold)] border border-[var(--gold)] transition-all duration-300"
//                 >
//                   <span>CONTACT US</span>
//                 </a>
//                 <a
//                   href="#services"
//                   className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold tracking-widest text-sm rounded-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
//                 >
//                   OUR SERVICES
//                 </a>
//               </div>
//             </div>

//             {/* Right side stats */}
//             <div className="grid grid-cols-2 gap-4">
//               {STATS.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className="bg-[var(--dark-3)] border border-gray-800 p-8 rounded-sm hero-text-anim hover:border-[var(--gold)] transition-colors group"
//                   style={{ animationDelay: `${0.4 + i * 0.1}s` }}
//                 >
//                   <div className="stat-number text-5xl font-black display mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-500 text-sm uppercase tracking-widest font-medium">
//                     {stat.label}
//                   </div>
//                   <div className="w-0 group-hover:w-8 h-0.5 bg-[var(--gold)] transition-all duration-500 mt-3" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
//           <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
//           <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
//         </div>
//       </section>

//       {/* ─── WELCOME SECTION ─── */}
//       <section id="about" className="py-28 bg-[var(--dark-2)]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="reveal-left">
//               <div className="section-tag mb-4">
//                 <span className="gold-line" />
//                 Welcome to Zytonik
//               </div>
//               <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-6">
//                 ADVANCED PRECISION
//                 <br />
//                 <span className="text-[var(--gold)]">ENGINEERING</span> &
//                 <br />
//                 MANUFACTURING
//               </h2>
//               <p className="text-gray-400 leading-relaxed mb-6 text-lg">
//                 With a stellar reputation in providing end-to-end Engineering
//                 Consulting Services to our customers, we continuously strive to
//                 meet every need and demand our clients might have.
//               </p>
//               <p className="text-gray-500 leading-relaxed mb-10">
//                 With over 10 years of experience, our team possesses extensive
//                 knowledge and expertise to help you design, implement, and
//                 select the most efficient tools for your processes.
//               </p>
//               <div className="flex gap-6">
//                 <a
//                   href="#contact"
//                   className="cta-btn px-8 py-3 border border-[var(--gold)] text-[var(--gold)] hover:text-black tracking-widest text-sm rounded-sm transition-colors duration-300"
//                 >
//                   <span>SCHEDULE A CONSULTATION</span>
//                 </a>
//               </div>
//             </div>

//             <div className="reveal-right">
//               <div className="relative">
//                 <div className="bg-[var(--dark-3)] border border-gray-800 p-8 rounded-sm">
//                   <div className="grid grid-cols-1 gap-6">
//                     {[
//                       {
//                         icon: "⚙️",
//                         title: "End-to-End Solutions",
//                         desc: "From consultation to final production, we handle every phase.",
//                       },
//                       {
//                         icon: "🎯",
//                         title: "Precision-First Approach",
//                         desc: "Every component meets the highest standards of accuracy.",
//                       },
//                       {
//                         icon: "🤝",
//                         title: "Trusted Partnership",
//                         desc: "Your goals become ours. We work alongside you at every step.",
//                       },
//                       {
//                         icon: "💡",
//                         title: "Innovation Driven",
//                         desc: "Leveraging the latest technology for cutting-edge results.",
//                       },
//                     ].map((item) => (
//                       <div
//                         key={item.title}
//                         className="flex gap-4 items-start p-4 hover:bg-[rgba(201,162,39,0.04)] rounded-sm transition-colors group"
//                       >
//                         <div className="w-10 h-10 bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.2)] rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] transition-colors">
//                           <span className="text-lg">{item.icon}</span>
//                         </div>
//                         <div>
//                           <div className="font-semibold text-white mb-1 display tracking-wide">
//                             {item.title}
//                           </div>
//                           <div className="text-gray-500 text-sm leading-relaxed">
//                             {item.desc}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* Floating badge */}
//                 <div className="floating-badge absolute -top-4 -right-4 bg-[var(--gold)] text-black px-4 py-2 rounded-sm">
//                   <div className="text-2xl font-black display">10+</div>
//                   <div className="text-xs font-bold uppercase tracking-wider">
//                     Years
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── CAPABILITIES ─── */}
//       <section id="services" className="py-28 bg-[var(--dark)]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16 reveal">
//             <div className="section-tag mb-4 justify-center flex items-center">
//               <span className="gold-line" />
//               Our Capabilities
//               <span
//                 className="gold-line ml-3"
//                 style={{ marginLeft: 14, marginRight: 0 }}
//               />
//             </div>
//             <h2 className="text-5xl lg:text-7xl font-black display">
//               WHAT WE <span className="text-[var(--gold)]">DELIVER</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {CAPABILITIES.map((cap, i) => (
//               <div
//                 key={cap.title}
//                 className="capability-card rounded-sm reveal"
//                 style={{ transitionDelay: `${i * 0.05}s` }}
//                 onMouseEnter={() => setActiveCard(i)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <div className="aspect-[3/4] relative">
//                   <img
//                     src={cap.img}
//                     alt={cap.title}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80";
//                     }}
//                   />
//                   <div className="overlay" />
//                   <div className="absolute inset-0 p-5 flex flex-col justify-end">
//                     <div className="card-line mb-3" />
//                     <h3 className="text-white font-black display text-xl tracking-wide mb-2">
//                       {cap.title}
//                     </h3>
//                     <div className="card-desc">
//                       <p className="text-gray-300 text-xs leading-relaxed">
//                         {cap.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── ASK US / CTA BAND ─── */}
//       <section
//         className="py-24 relative overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(135deg, #0d0d14 0%, #1a1505 50%, #0d0d14 100%)",
//         }}
//       >
//         <div className="absolute inset-0 grid-overlay opacity-50" />
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="reveal-left">
//               <div className="section-tag mb-4">
//                 <span className="gold-line" />
//                 Ask Us
//               </div>
//               <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-6">
//                 PARTNER WITH
//                 <br />
//                 <span className="text-[var(--gold)]">PRECISION.</span>
//                 <br />
//                 INNOVATE WITH
//                 <br />
//                 ZYTONIK.
//               </h2>
//               <p className="text-gray-400 text-lg leading-relaxed mb-4">
//                 With over 10 years of experience, our team possesses extensive
//                 knowledge and expertise to help you design, implement, and
//                 select the most efficient tools for your processes.
//               </p>
//               <p className="text-gray-500 leading-relaxed mb-8">
//                 Our goal is to be your trusted and preferred solutions provider.
//                 We prioritize your needs and work alongside you, from the
//                 initial consultation through to the final production phase.
//               </p>
//               <a
//                 href="#contact"
//                 className="cta-btn inline-block px-10 py-4 bg-[var(--gold)] text-black font-bold tracking-widest text-sm rounded-sm hover:bg-transparent hover:text-[var(--gold)] border border-[var(--gold)] transition-all duration-300"
//               >
//                 <span>SCHEDULE A CONSULTATION</span>
//               </a>
//             </div>

//             <div className="reveal-right">
//               <div className="relative bg-[rgba(0,0,0,0.4)] border border-[rgba(201,162,39,0.2)] p-8 rounded-sm">
//                 <div className="text-[var(--gold)] section-tag mb-6">
//                   Why Choose Zytonik?
//                 </div>
//                 <div className="space-y-4">
//                   {[
//                     "ISO-compliant precision manufacturing processes",
//                     "Advanced CNC machining with micron-level accuracy",
//                     "Complete end-to-end engineering consulting",
//                     "Rapid prototyping & additive manufacturing",
//                     "Dedicated project management from day one",
//                     "Competitive pricing with zero compromise on quality",
//                   ].map((point) => (
//                     <div key={point} className="flex items-start gap-3 group">
//                       <div className="w-5 h-5 border border-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[var(--gold)] transition-colors">
//                         <div className="w-2 h-2 bg-[var(--gold)] rounded-full group-hover:bg-black transition-colors" />
//                       </div>
//                       <span className="text-gray-300 text-sm leading-relaxed">
//                         {point}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 pt-8 border-t border-gray-800 grid grid-cols-3 gap-4 text-center">
//                   {[
//                     { v: "500+", l: "Projects" },
//                     { v: "200+", l: "Clients" },
//                     { v: "99%", l: "Satisfaction" },
//                   ].map((s) => (
//                     <div key={s.l}>
//                       <div className="stat-number text-3xl font-black display">
//                         {s.v}
//                       </div>
//                       <div className="text-gray-600 text-xs uppercase tracking-widest mt-1">
//                         {s.l}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── BROCHURE BAND ─── */}
//       <section className="py-16 bg-[var(--dark-3)] border-y border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="reveal-left text-center lg:text-left">
//               <h3 className="text-3xl font-black display text-white mb-2">
//                 BROWSE OUR <span className="text-[var(--gold)]">BROCHURE</span>
//               </h3>
//               <p className="text-gray-500">
//                 Download our comprehensive product and services catalog
//               </p>
//             </div>
//             <div className="reveal-right">
//               <a
//                 href="#"
//                 className="cta-btn flex items-center gap-3 px-10 py-4 border-2 border-[var(--gold)] text-[var(--gold)] hover:text-black font-bold tracking-widest text-sm rounded-sm transition-colors duration-300"
//               >
//                 <span className="text-xl">⬇</span>
//                 <span>DOWNLOAD BROCHURE</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── CONTACT ─── */}
//       <section id="contact" className="py-28 bg-[var(--dark-2)]">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16">
//             <div className="reveal-left">
//               <div className="section-tag mb-4">
//                 <span className="gold-line" />
//                 Contact Us
//               </div>
//               <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-8">
//                 GET IN <span className="text-[var(--gold)]">TOUCH</span>
//               </h2>

//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: "📞",
//                     label: "Phone Numbers",
//                     values: ["+65 6282 0555", "+65 9488 9014", "+65 8040 8060"],
//                   },
//                   {
//                     icon: "📧",
//                     label: "Email Address",
//                     values: ["info@zytonik.com"],
//                   },
//                   {
//                     icon: "📍",
//                     label: "Address",
//                     values: ["Singapore"],
//                   },
//                 ].map((info) => (
//                   <div
//                     key={info.label}
//                     className="flex gap-4 p-4 bg-[var(--dark-3)] border border-gray-800 rounded-sm hover:border-[rgba(201,162,39,0.3)] transition-colors"
//                   >
//                     <div className="w-12 h-12 bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.2)] rounded-sm flex items-center justify-center flex-shrink-0">
//                       <span className="text-xl">{info.icon}</span>
//                     </div>
//                     <div>
//                       <div className="text-[var(--gold)] text-xs uppercase tracking-widest font-semibold mb-1">
//                         {info.label}
//                       </div>
//                       {info.values.map((v) => (
//                         <div key={v} className="text-gray-300 text-sm">
//                           {v}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-8">
//                 <a
//                   href="#"
//                   className="w-12 h-12 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
//                 >
//                   f
//                 </a>
//                 <a
//                   href="#"
//                   className="w-12 h-12 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors font-bold text-xs"
//                 >
//                   in
//                 </a>
//               </div>
//             </div>

//             <div className="reveal-right">
//               <div className="bg-[var(--dark-3)] border border-gray-800 p-8 rounded-sm">
//                 <h3 className="text-2xl font-black display mb-6 text-[var(--gold)]">
//                   SEND US A MESSAGE
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         className="contact-input w-full px-4 py-3 text-white text-sm rounded-sm"
//                         placeholder="John"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         className="contact-input w-full px-4 py-3 text-white text-sm rounded-sm"
//                         placeholder="Doe"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="contact-input w-full px-4 py-3 text-white text-sm rounded-sm"
//                       placeholder="john@company.com"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       className="contact-input w-full px-4 py-3 text-white text-sm rounded-sm"
//                       placeholder="+65 0000 0000"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                       Service Interested In
//                     </label>
//                     <select className="contact-input w-full px-4 py-3 text-gray-400 text-sm rounded-sm">
//                       <option value="">Select a service...</option>
//                       <option>Precision Engineering</option>
//                       <option>Sheet Metal Fabrication</option>
//                       <option>Automation Components</option>
//                       <option>Additive Manufacturing</option>
//                       <option>Laser Cutting</option>
//                       <option>Powder Coating</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       rows={4}
//                       className="contact-input w-full px-4 py-3 text-white text-sm rounded-sm resize-none"
//                       placeholder="Tell us about your project..."
//                     />
//                   </div>
//                   <button className="cta-btn w-full py-4 bg-[var(--gold)] text-black font-bold tracking-widest text-sm rounded-sm hover:bg-transparent hover:text-[var(--gold)] border border-[var(--gold)] transition-all duration-300">
//                     <span>SEND MESSAGE</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── FOOTER ─── */}
//       <footer className="bg-[#070709] border-t border-gray-900 pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//             {/* Brand */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-[var(--gold)] rounded-sm flex items-center justify-center">
//                   <span className="text-black font-black text-xl display">Z</span>
//                 </div>
//                 <div>
//                   <div className="text-white font-bold text-lg leading-none display">
//                     ZYTONIK
//                   </div>
//                   <div className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
//                     Precision
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Precision engineering and innovation tailored to your needs.
//                 Partner with Zytonik today.
//               </p>
//             </div>

//             {/* Navigate */}
//             <div>
//               <h4 className="text-white font-bold display tracking-widest uppercase text-sm mb-4 border-b border-gray-800 pb-3">
//                 Navigate
//               </h4>
//               <ul className="space-y-2">
//                 {["Home", "About", "Services", "Blogs", "Contact Us"].map(
//                   (item) => (
//                     <li key={item}>
//                       <a
//                         href="#"
//                         className="text-gray-600 hover:text-[var(--gold)] text-sm transition-colors"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="text-white font-bold display tracking-widest uppercase text-sm mb-4 border-b border-gray-800 pb-3">
//                 Services
//               </h4>
//               <ul className="space-y-2">
//                 {[
//                   "Precision Engineering",
//                   "Sheet Metal",
//                   "Automation Components",
//                   "Additive Manufacturing",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-gray-600 hover:text-[var(--gold)] text-sm transition-colors"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact */}
//             <div>
//               <h4 className="text-white font-bold display tracking-widest uppercase text-sm mb-4 border-b border-gray-800 pb-3">
//                 Contact Information
//               </h4>
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div>+65 6282 0555</div>
//                 <div>+65 9488 9014</div>
//                 <div>+65 8040 8060</div>
//                 <div className="mt-4 pt-4 border-t border-gray-900">
//                   info@zytonik.com
//                 </div>
//               </div>
//               <div className="flex gap-3 mt-6">
//                 <a
//                   href="#"
//                   className="w-9 h-9 border border-gray-800 rounded-sm flex items-center justify-center text-gray-600 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-sm"
//                 >
//                   f
//                 </a>
//                 <a
//                   href="#"
//                   className="w-9 h-9 border border-gray-800 rounded-sm flex items-center justify-center text-gray-600 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-xs font-bold"
//                 >
//                   in
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-gray-700 text-sm">
//               © Copyright 2026 Zytonik Precision Pte Ltd. All Rights Reserved.
//             </p>
//             <p className="text-gray-800 text-xs">
//               Precision Engineering & Manufacturing Consulting in Singapore
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
// import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        {/* <Partner /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}