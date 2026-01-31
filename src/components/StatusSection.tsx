import { ArrowRight, FileCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function StatusSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`bg-[#D4F26A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Background Effects - Animated */}
          <div
            className={`absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ transitionDelay: '300ms' }}
          />

          <div className="relative z-10">
            <h2
              className={`font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight uppercase transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              Ready to modernize your infrastructure?
            </h2>
            <p
              className={`text-xl text-slate-800 leading-relaxed max-w-2xl mx-auto mb-10 font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '250ms' }}
            >
              Join the institutional network establishing the new standard for digital healthcare trust and interoperability.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                Request Partner Access
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-white/40 border border-slate-900/10 text-slate-900 rounded-full font-semibold hover:bg-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:-translate-y-1">
                <FileCheck className="w-5 h-5" />
                View Compliance Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
