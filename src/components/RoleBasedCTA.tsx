import { ArrowRight, Pill, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function RoleBasedCTA() {
    const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

    const ctaCards = [
        {
            icon: Stethoscope,
            title: "I'm a Doctor",
            subtitle: "Request Partner Access",
            buttonText: "Join Now",
            link: "/doctor",
            variant: "light"
        },
        {
            icon: Pill,
            title: "I'm a Pharmacy / Lab",
            subtitle: "Join Network",
            buttonText: "Access Portal",
            link: "/pharmacy",
            variant: "light"
        },
        {
            icon: User,
            title: "I'm a Patient",
            subtitle: "View Demo",
            buttonText: "Launch Demo",
            link: "/patient",
            variant: "dark"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl backdrop-blur-md transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    {/* Background Effects - Animated */}
                    <div
                        className={`absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                        style={{ transitionDelay: '300ms' }}
                    />
                    <div
                        className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                        style={{ transitionDelay: '300ms' }}
                    />

                    <div className="relative z-10">
                        {/* Header */}
                        <h2
                            className={`font-display text-2xl md:text-4xl font-bold text-white mb-12 tracking-tight uppercase transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            Get Started with NFCura
                        </h2>

                        {/* CTA Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {ctaCards.map((card, index) => (
                                <Link
                                    key={index}
                                    to={card.link}
                                    className={`group p-8 rounded-3xl flex flex-col items-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${card.variant === 'dark'
                                        ? 'bg-[#D4F26A] shadow-xl hover:shadow-2xl ring-4 ring-[#D4F26A]/30'
                                        : 'bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 hover:bg-white/10'
                                        } hover:-translate-y-2`}
                                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${card.variant === 'dark'
                                        ? 'bg-black text-[#D4F26A]'
                                        : 'bg-white/10 text-white'
                                        }`}>
                                        <card.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className={`font-bold text-lg mb-1 ${card.variant === 'dark' ? 'text-black' : 'text-white'}`}>
                                        {card.title}
                                    </h3>
                                    <span className={`text-sm mb-6 ${card.variant === 'dark' ? 'text-slate-800' : 'text-slate-400'}`}>
                                        {card.subtitle}
                                    </span>

                                    <div className={`mt-auto w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${card.variant === 'dark'
                                        ? 'bg-black text-white hover:bg-slate-900'
                                        : 'bg-white text-black hover:bg-slate-200'
                                        }`}>
                                        {card.buttonText}
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
