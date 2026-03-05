import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-28 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-10 h-[2px] bg-[var(--gold)]" />
                            <span className="text-[var(--primary-blue)] font-bold tracking-[0.2em] uppercase text-sm">Contact Us</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-black display leading-tight mb-8 text-slate-900">
                            GET IN <span className="text-[var(--primary-blue)]">TOUCH</span>
                        </h2>
                        <p className="text-slate-600 mb-10 leading-relaxed max-w-md">
                            Ready to discuss your next project? Reach out to our team of experts for a comprehensive consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center text-[var(--primary-blue)]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Phone</div>
                                    <div className="text-slate-900 font-medium">+65 6282 0555</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center text-[var(--primary-blue)]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Email</div>
                                    <div className="text-slate-900 font-medium">sales@zytonik.com</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center text-[var(--primary-blue)]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Location</div>
                                    <div className="text-slate-900 font-medium">Tampines North Drive 1, Singapore</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 border border-slate-200 p-8 lg:p-10 rounded-sm shadow-sm">
                        <h3 className="text-2xl font-black display mb-6 text-slate-900">SEND US A MESSAGE</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] text-slate-900" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-[var(--primary-blue)] focus:ring-1 focus:ring-[var(--primary-blue)] text-slate-900" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-[var(--primary-blue)] text-slate-900" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-[var(--primary-blue)] text-slate-900 resize-none" placeholder="Tell us about your project..." />
                            </div>
                            <button className="w-full py-4 bg-[var(--primary-blue)] text-white font-bold tracking-widest text-sm rounded-sm hover:bg-[var(--primary-blue-light)] transition-colors shadow-lg">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}