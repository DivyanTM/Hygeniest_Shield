export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t-4 border-[var(--primary-blue)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[var(--primary-blue)] rounded-sm flex items-center justify-center">
                                <span className="text-white font-black text-xl display">Z</span>
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg leading-none display tracking-wide">ZYTONIK</div>
                                <div className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">Precision</div>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Precision engineering and innovation tailored to your needs. Partner with Zytonik to drive growth and success in manufacturing.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold display tracking-widest uppercase text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Our Services", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-[var(--gold)] text-sm transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold display tracking-widest uppercase text-sm mb-4">Services</h4>
                        <ul className="space-y-2">
                            {["Precision Engineering", "Sheet Metal", "Automation Components", "Laser Cutting"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-[var(--gold)] text-sm transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Zytonik Precision Pte Ltd. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}