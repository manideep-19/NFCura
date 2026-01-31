import { ArrowRight, ShieldCheck, Activity, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay for initial animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-28 pb-12 px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#F0F4F8] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-sm">

        {/* Background Elements - Animated */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />


        <div className="flex flex-col items-center justify-center relative z-10">

          {/* Content - Centered */}
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Sparkles className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">Healthcare V2.0</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.05] uppercase tracking-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '350ms' }}
            >
              Empowering Lives Through <br className="hidden lg:block" />
              <span className="text-primary-600">Secure Health.</span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              Navigating Health Together: Your Trusted Medical Resource. NFCura unifies prescriptions and identity into one immutable chain of trust.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '650ms' }}
            >
              <button
                onClick={onExplore}
                className="btn-primary w-full sm:w-auto justify-center group"
              >
                Get started now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary w-full sm:w-auto justify-center">
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex items-center justify-center gap-8 pt-8 border-t border-slate-200/60 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-600 transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Encrypted</p>
                  <p className="text-xs text-slate-500">End-to-end</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-600 transition-transform duration-300 group-hover:scale-110">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Real-time</p>
                  <p className="text-xs text-slate-500">Sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
