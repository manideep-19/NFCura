import { ShieldCheck, Lock, Globe, Server } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function TrustSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

  const badges = [
    { icon: ShieldCheck, text: "HIPAA Compliant" },
    { icon: Lock, text: "SOC2 Ready" },
    { icon: Globe, text: "GDPR Standards" },
    { icon: Server, text: "256-bit Encryption" }
  ];

  const features = [
    "Doctors can cancel or renew prescriptions anytime",
    "Pharmacies cannot modify prescribed dosage",
    "Patients control access to their records",
    "Every action is logged and traceable"
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-sm font-bold text-[#D4F26A] uppercase tracking-widest mb-2">Enterprise Standards</h2>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase">Security & Compliance First</h3>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {badges.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm hover:border-white/20 hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              <span className="font-semibold text-slate-200">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Security Features Card */}
        <div
          className={`bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">Plain Language Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((text, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4F26A] mt-2.5 flex-shrink-0" />
                <p className="text-slate-300 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
