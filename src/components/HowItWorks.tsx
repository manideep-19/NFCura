import { FileText, Link, ShieldCheck, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function HowItWorks() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

  const steps = [
    {
      icon: FileText,
      title: "Digital Prescription Issued",
      desc: "Structured, tamper-proof prescription linked to Health ID."
    },
    {
      icon: Link,
      title: "Unified Patient Timeline",
      desc: "Longitudinal record accessible across providers with consent."
    },
    {
      icon: ShieldCheck,
      title: "Verified Fulfillment",
      desc: "Every dispense and test logged — fully traceable."
    },
    {
      icon: CheckCircle,
      title: "Audit- & Claim-Ready Records",
      desc: "Verifiable records for accountability and insurance claims."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-6 uppercase">From Prescription to Proof — One Closed Loop</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            NFCura connects doctors, patients, pharmacies, and labs into a single verifiable treatment chain — built for real-world OPD care.
          </p>
        </div>

        {/* Steps Card */}
        <div
          className={`bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line - Animated */}
            <div
              className={`hidden md:block absolute top-[2.5rem] left-10 right-10 h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 transition-all duration-1000 origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
              style={{ transitionDelay: '500ms' }}
            />

            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-dark-900 border-4 border-white/10 shadow-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary-500 transition-all duration-500">
                  <step.icon
                    className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Micro-line for VCs */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1100ms' }}
        >
          <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto font-medium">
            NFCura doesn't just digitize care — it makes healthcare accountable after the doctor visit.
          </p>
        </div>
      </div>
    </section>
  );
}
