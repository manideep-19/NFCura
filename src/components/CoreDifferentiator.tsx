import { FileText, Link as LinkIcon, Building, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function CoreDifferentiator() {
    const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

    const steps = [
        {
            step: 1,
            title: "Doctor Creates",
            description: "Structured digital prescription",
            icon: FileText
        },
        {
            step: 2,
            title: "Securely Linked",
            description: "Cryptographically linked to Health ID",
            icon: LinkIcon
        },
        {
            step: 3,
            title: "Pharmacy / Lab Processes",
            description: "Records fulfillment on chain",
            icon: Building
        },
        {
            step: 4,
            title: "Audit Complete",
            description: "Treatment chain closes securely",
            icon: ShieldCheck
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight uppercase">
                        One Treatment. One Chain. Zero Confusion.
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) - Animated */}
                    <div
                        className={`hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 transition-all duration-1000 origin-left ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                        style={{ transitionDelay: '300ms' }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${400 + index * 150}ms` }}
                            >
                                {/* Step Circle */}
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm relative group hover:border-slate-200 hover:shadow-lg transition-all duration-300">
                                    <div className="absolute inset-2 rounded-full bg-slate-50 group-hover:bg-[#D4F26A]/20 transition-colors duration-300" />
                                    <item.icon className="w-8 h-8 text-slate-900 relative z-10 transition-transform duration-300 group-hover:scale-110" />

                                    {/* Step Number Badge */}
                                    <div
                                        className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-4 border-slate-50 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                                        style={{ transitionDelay: `${600 + index * 150}ms` }}
                                    >
                                        {item.step}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
