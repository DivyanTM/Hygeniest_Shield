import { ArrowRight, ChevronDown, Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    isMegaMenu: true,
    categories: [
      {
        title: "Precision Industry",
        slug: "precision-engineering",
        items: [
          { label: "Precision Components", slug: "precision-components" },
          { label: "CNC Wire Cut", slug: "cnc-wire-cut" },
          { label: "Precision CNC Milling", slug: "precision-cnc-milling" },
          { label: "Precision CNC Turning", slug: "precision-cnc-turning" },
          { label: "Customised Mould Inserts", slug: "customised-mould-inserts" },
          { label: "EDM Electrodes", slug: "edm-electrodes" },
          { label: "Milling Collets (Customized)", slug: "milling-collets" },
          { label: "Milling Cutters (Customized)", slug: "milling-cutters" },
        ],
      },
      {
        title: "Sheet Metal",
        slug: "sheet-metal",
        items: [
          { label: "Trolleys", slug: "trolleys" },
        ],
      },
      {
        title: "Automation Components",
        slug: "automation-components",
        items: [
          { label: "Sub Assemblies", slug: "sub-assemblies" },
          { label: "Jigs & Fixtures", slug: "jigs-fixtures" },
          { label: "Value Added Services", slug: "value-added-services" },
          { label: "Documentation", slug: "documentation" },
          { label: "Rubber Components", slug: "rubber-components" },
          { label: "Contract Manufacturing", slug: "contract-manufacturing" },
        ],
      },
      {
        title: "Additive Manufacturing",
        slug: "additive-manufacturing",
        items: [
          { label: "3D Printing", slug: "3d-printing" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close mobile menu on route change ── */
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* ── helper ── */
  const isActive = (href) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-neutral-950/95 backdrop-blur-md shadow-2xl shadow-black/50 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center gap-3 group relative z-50" style={{ textDecoration: "none" }}>
          <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center text-neutral-950 font-bold text-xl tracking-wider transition-transform group-hover:scale-105">
            <ShieldCheck size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-['Rajdhani'] font-bold text-xl tracking-widest text-white uppercase leading-none">
              Hygenists
            </span>
            <span className="font-['Open_Sans'] text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mt-1">
              Shield Pte Ltd.
            </span>
          </div>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <ul className="hidden lg:flex items-center gap-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative group">
              {link.isMegaMenu ? (
                /* ── MEGA MENU TRIGGER ── */
                <div className="relative">
                  <button
                    onClick={() => navigate("/services")}
                    className={`flex items-center gap-1 font-['Rajdhani'] font-semibold text-[14px] tracking-widest uppercase py-6 transition-colors bg-transparent border-none cursor-pointer ${location.pathname.startsWith("/services")
                      ? "text-yellow-500"
                      : "text-neutral-300 hover:text-yellow-500"
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>

                  {/* ── MEGA MENU DROPDOWN ── */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] bg-white text-slate-900 border-t-4 border-yellow-500 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 p-8">
                    <div className="grid grid-cols-5 gap-8">
                      {link.categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-3">

                          {/* Category heading — navigates to parent category page */}
                          <button
                            onClick={() => navigate(`/services/${category.slug}`)}
                            className="font-['Rajdhani'] font-bold text-[14px] tracking-widest uppercase text-slate-950 border-b border-slate-200 pb-2 text-left bg-transparent border-x-0 border-t-0 cursor-pointer hover:text-yellow-600 transition-colors w-full"
                          >
                            {category.title}
                          </button>

                          {/* Sub-service items */}
                          {category.items.length > 0 && (
                            <ul className="flex flex-col gap-2.5" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                              {category.items.map((item) => (
                                <li key={item.slug}>
                                  <button
                                    onClick={() => navigate(`/services/${item.slug}`)}
                                    className="font-['Open_Sans'] text-[12px] tracking-wide text-slate-600 hover:text-yellow-600 transition-colors flex items-center gap-2 group/item bg-transparent border-none cursor-pointer text-left w-full p-0"
                                  >
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                                    {item.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* If no sub-items (e.g. Thermoforming) — just a View button */}
                          {category.items.length === 0 && (
                            <button
                              onClick={() => navigate(`/services/${category.slug}`)}
                              className="font-['Open_Sans'] text-[11px] tracking-widest uppercase text-yellow-600 hover:text-yellow-500 flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0"
                            >
                              View Service
                              <ArrowRight size={12} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom strip */}
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <p className="font-['Open_Sans'] text-[12px] text-slate-400 font-light">
                        Precision engineering solutions across every industry.
                      </p>
                      <button
                        onClick={() => navigate("/services")}
                        className="font-['Rajdhani'] font-bold text-[12px] tracking-widest uppercase text-yellow-600 hover:text-yellow-500 flex items-center gap-2 bg-transparent border-none cursor-pointer"
                      >
                        View All Services
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── STANDARD LINK ── */
                <Link
                  to={link.href}
                  className={`font-['Rajdhani'] font-semibold text-[14px] tracking-widest uppercase py-6 transition-colors ${isActive(link.href) ? "text-yellow-500" : "text-neutral-300 hover:text-yellow-500"
                    }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* ── DESKTOP CTA ── */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 bg-yellow-500 text-neutral-950 font-['Rajdhani'] font-bold text-[13px] tracking-widest uppercase px-8 py-3.5 hover:bg-white transition-colors relative z-50"
          style={{
            clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            textDecoration: "none",
          }}
        >
          Get a Quote
          <ArrowRight size={16} />
        </Link>

        {/* ── MOBILE TOGGLE ── */}
        <button
          className="lg:hidden text-white p-2 relative z-50 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`fixed inset-0 top-[80px] bg-neutral-950 overflow-y-auto flex flex-col p-6 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-2 mt-4 pb-32" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="border-b border-white/10">
              {link.isMegaMenu ? (
                <div className="flex flex-col">
                  {/* Services toggle header */}
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="font-['Rajdhani'] font-bold text-xl tracking-widest uppercase text-white hover:text-yellow-500 flex items-center justify-between py-4 w-full text-left bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-yellow-500" : ""
                        }`}
                    />
                  </button>

                  {/* Mobile accordion */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[2000px] opacity-100 pb-4" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="flex flex-col gap-6 pl-4 border-l-2 border-yellow-500/30 ml-2">
                      {link.categories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-2">

                          {/* Category heading → navigate to parent */}
                          <button
                            onClick={() => navigate(`/services/${category.slug}`)}
                            className="font-['Rajdhani'] font-bold text-[13px] tracking-widest uppercase text-yellow-500 text-left bg-transparent border-none cursor-pointer p-0"
                          >
                            {category.title}
                          </button>

                          {/* Sub items */}
                          {category.items.length > 0 && (
                            <ul className="flex flex-col gap-1" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                              {category.items.map((item) => (
                                <li key={item.slug}>
                                  <button
                                    onClick={() => navigate(`/services/${item.slug}`)}
                                    className="font-['Open_Sans'] text-sm tracking-wider text-neutral-400 hover:text-white py-1.5 text-left bg-transparent border-none cursor-pointer w-full flex items-center gap-2"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-yellow-500/50 flex-shrink-0" />
                                    {item.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}

                          {category.items.length === 0 && (
                            <button
                              onClick={() => navigate(`/services/${category.slug}`)}
                              className="font-['Open_Sans'] text-sm tracking-wider text-neutral-400 hover:text-white py-1.5 text-left bg-transparent border-none cursor-pointer flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-yellow-500/50 flex-shrink-0" />
                              View Thermoforming
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="font-['Rajdhani'] font-bold text-xl tracking-widest uppercase text-white hover:text-yellow-500 flex items-center justify-between py-4"
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-neutral-950 border-t border-white/10">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-yellow-500 text-neutral-950 font-['Rajdhani'] font-bold text-[16px] tracking-widest uppercase px-8 py-4 w-full"
            style={{ textDecoration: "none" }}
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
