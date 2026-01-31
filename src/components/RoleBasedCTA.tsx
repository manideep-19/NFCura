import { ArrowRight, Pill, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoleBasedCTA() {
    return (
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#D4F26A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
                            Get Started with NFCura
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

                            {/* Doctor CTA */}
                            <Link to="/doctor" className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center shadow-sm hover:shadow-lg border border-white">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 text-slate-900">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">I'm a Doctor</h3>
                                <span className="text-slate-500 text-sm mb-6">Request Partner Access</span>
                                <div className="mt-auto w-full py-3 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 group-hover:bg-slate-800 transition-colors">
                                    Join Now <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>

                            {/* Pharmacy / Lab CTA */}
                            <Link to="/pharmacy" className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center shadow-sm hover:shadow-lg border border-white">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 text-slate-900">
                                    <Pill className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">I'm a Pharmacy / Lab</h3>
                                <span className="text-slate-500 text-sm mb-6">Join Network</span>
                                <div className="mt-auto w-full py-3 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 group-hover:bg-slate-800 transition-colors">
                                    Access Portal <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>

                            {/* Patient CTA */}
                            <Link to="/patient" className="group bg-slate-900 p-8 rounded-3xl hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center shadow-xl hover:shadow-2xl ring-4 ring-[#e1f98d]/50">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 text-[#D4F26A]">
                                    <User className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-white text-lg mb-1">I'm a Patient</h3>
                                <span className="text-slate-400 text-sm mb-6">View Demo</span>
                                <div className="mt-auto w-full py-3 rounded-xl bg-[#D4F26A] text-slate-900 font-semibold flex items-center justify-center gap-2 hover:bg-[#c6ea4d] transition-colors">
                                    Launch Demo <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
