import { X, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function ProblemContrast() {
    const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

    const traditionalItems = [
        "Prescriptions stop at paper or PDFs",
        "No visibility after the doctor visit",
        "Pharmacies dispense with no feedback loop",
        "Labs, pharmacies, and insurers work in silos",
        "Small medical expenses go unclaimed",
        "Patients skip treatment due to cost friction"
    ];

    const nfcuraItems = [
        "One prescription, tracked end-to-end",
        "Doctor → Pharmacy/Lab → Patient connected",
        "Verified dispensing & test completion",
        "Unified treatment timeline per patient",
        "Tamper-proof audit trail (claim-ready)",
        "Built for OPD care, not hospital IT"
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight uppercase">
                        Why Healthcare Still Breaks
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Traditional Systems - Slides from Left */}
                    <div
                        className={`bg-red-500/10 rounded-3xl p-8 md:p-12 border border-red-500/20 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-500 rounded-full" />
                            Today's Reality
                        </h3>

                        <ul className="space-y-6">
                            {traditionalItems.map((item, i) => (
                                <li
                                    key={i}
                                    className={`flex items-center gap-4 text-slate-300 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <X className="w-3.5 h-3.5 text-red-500" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NFCura Network - Slides from Right */}
                    <div
                        className={`bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        {/* Glow effect - Animated */}
                        <div
                            className={`absolute top-0 right-0 w-64 h-64 bg-[#D4F26A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                            style={{ transitionDelay: '600ms' }}
                        />

                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#D4F26A] rounded-full" />
                            NFCura Closed-Loop Network
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            {nfcuraItems.map((item, i) => (
                                <li
                                    key={i}
                                    className={`flex items-center gap-4 text-white transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#D4F26A] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-black" />
                                    </div>
                                    <span className="font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Micro-caption */}
                <div
                    className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: '900ms' }}
                >
                    <p className="text-slate-500 text-sm md:text-base max-w-3xl mx-auto">
                        NFCura doesn't replace hospitals or EMRs — it connects what already exists into a single source of truth.
                    </p>
                </div>
            </div>
        </section>
    );
}
