import { X, Check } from 'lucide-react';

export default function ProblemContrast() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Why Healthcare Still Breaks
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Traditional Systems - Left */}
                    <div className="bg-red-50/50 rounded-3xl p-8 md:p-12 border border-red-100/50">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-400 rounded-full" />
                            Traditional Systems
                        </h3>

                        <ul className="space-y-6">
                            {[
                                "Paper prescriptions",
                                "Fragmented EMRs",
                                "No pharmacy accountability",
                                "Editable PDFs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-700">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <X className="w-3.5 h-3.5 text-red-600" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NFCura Network - Right */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4F26A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#D4F26A] rounded-full" />
                            NFCura Network
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            {[
                                "Immutable prescriptions",
                                "Unified patient timeline",
                                "Verified dispensing",
                                "Tamper-proof audit trail"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-slate-900">
                                    <div className="w-6 h-6 rounded-full bg-[#D4F26A] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-slate-900" />
                                    </div>
                                    <span className="font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
