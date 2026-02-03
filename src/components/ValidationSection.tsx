import { useReveal } from '../hooks/useReveal';

export default function ValidationSection() {
    const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.2 });

    const validations = [
        "Working Android prototype live",
        "Real-time QR prescription flow implemented",
        "Interviews with 10+ doctors",
        "Validation from 30+ patients"
    ];

    return (
        <section ref={sectionRef} className="py-20 px-6 backdrop-blur-sm border-t border-white/5 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left - Title */}
                    <div
                        className={`md:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    >
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight uppercase">Early Validation</h2>
                        <div
                            className={`h-1 bg-[#D4F26A] rounded-full transition-all duration-700 origin-left ${isVisible ? 'w-20' : 'w-0'}`}
                            style={{ transitionDelay: '300ms' }}
                        />
                    </div>

                    {/* Right - Validation Points */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {validations.map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                style={{ transitionDelay: `${300 + i * 100}ms` }}
                            >
                                <div
                                    className={`w-1.5 h-1.5 rounded-full bg-[#D4F26A] mt-2.5 flex-shrink-0 transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-0'}`}
                                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                                />
                                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
