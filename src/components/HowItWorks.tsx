import { FileText, Link, ShieldCheck, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function HowItWorks() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

  const steps = [
    {
      icon: FileText,
      title: "Check Profile",
      desc: "Provider verifies patient identity."
    },
    {
      icon: Link,
      title: "Request Consult",
      desc: "Secure link established for diagnosis."
    },
    {
      icon: ShieldCheck,
      title: "Schedule",
      desc: "Meeting scheduled on the blockchain."
    },
    {
      icon: CheckCircle,
      title: "Get Solution",
      desc: "Prescription fulfilled & verified."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 uppercase">4 Easy Steps to Health</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Navigating Health Together: Your Trusted Medical Resource. Medicine Meets Technology.
          </p>
        </div>

        {/* Steps Card */}
        <div
          className={`bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line - Animated */}
            <div
              className={`hidden md:block absolute top-[2.5rem] left-10 right-10 h-[2px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 transition-all duration-1000 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
              style={{ transitionDelay: '500ms' }}
            />

            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary-500 transition-all duration-500">
                  <step.icon
                    className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
