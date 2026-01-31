import { Zap, Shield, Database, Network } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function WhyNFCura() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

  const features = [
    {
      icon: Zap,
      title: "Zero-Latency Verification",
      desc: "Instant validation of prescription authenticity at the point of dispensing.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      icon: Database,
      title: "Unified Data Standard",
      desc: "A single source of truth that moves with the patient across provider networks.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Network,
      title: "Interoperable Architecture",
      desc: "Seamlessly integrates with existing EMR and pharmacy management systems.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: Shield,
      title: "Institutional Trust",
      desc: "Built on privacy-first architecture ensuring HIPAA and GDPR compliance.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-6 tracking-tight uppercase">The Intelligent Ecosystem</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Eliminating fragmentation in healthcare delivery through a unified, cryptographically verifiable protocol.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
