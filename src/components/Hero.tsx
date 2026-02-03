import { ArrowRight, ShieldCheck, Activity, Wifi, FileText, CheckCircle2, Bell, Heart, Pill } from 'lucide-react';
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
    <section className="pt-24 pb-12 px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#F0F4F8] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm">

        {/* Background Elements - Animated */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        />

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

          {/* Left Content */}
          <div className="text-center lg:text-left lg:max-w-xl lg:-mt-48">



            {/* Main Heading */}
            <h1
              className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 mb-4 leading-[1.05] uppercase tracking-tight transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '350ms' }}
            >
              Empowering Lives Through{' '}
              <span className="text-primary-600">Secure Health.</span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl text-slate-600 mb-8 leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              Navigating Health Together: Your Trusted Medical Resource. NFCura unifies prescriptions and identity into one immutable chain of trust.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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


          </div>

          {/* Right Side - Phone Mockup */}
          <div
            className={`relative w-full lg:w-auto flex-shrink-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Phone Container */}
            <div className="relative mx-auto w-[280px] md:w-[320px]">

              {/* Phone Frame */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-2xl z-20" />

                {/* Phone Screen */}
                <div className="relative bg-gradient-to-b from-slate-50 to-white rounded-[2.4rem] overflow-hidden aspect-[9/19]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-xs font-semibold text-slate-900">9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5 text-slate-900" />
                      <div className="w-6 h-2.5 bg-slate-900 rounded-sm" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 py-4 bg-white border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">NFCura</h3>
                        <p className="text-[10px] text-slate-500">Secure Health</p>
                      </div>
                    </div>
                  </div>

                  {/* NFC Scan Animation */}
                  <div className="relative px-5 py-6">
                    <div className="relative w-full aspect-square max-w-[140px] mx-auto">
                      {/* Animated Rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary-200 animate-ping opacity-20" />
                      <div className="absolute inset-4 rounded-full border-2 border-primary-300 animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute inset-8 rounded-full border-2 border-primary-400 animate-ping opacity-40" style={{ animationDelay: '1s' }} />

                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-xl shadow-primary-500/40 animate-pulse">
                          <Wifi className="w-7 h-7 text-white rotate-45" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs font-medium text-slate-600 mt-4">Tap to scan NFC</p>
                  </div>

                  {/* Prescription Cards */}
                  <div className="px-4 space-y-3">
                    {/* Card 1 */}
                    <div
                      className={`bg-white rounded-xl p-3 shadow-sm border border-slate-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                      style={{ transitionDelay: '900ms' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Pill className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-900 truncate">Prescription #1247</p>
                          <p className="text-[10px] text-slate-500">Dr. Smith • Today</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div
                      className={`bg-white rounded-xl p-3 shadow-sm border border-slate-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                      style={{ transitionDelay: '1050ms' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-900 truncate">Lab Results</p>
                          <p className="text-[10px] text-slate-500">Complete Blood Count</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-1/4 -left-12 w-6 h-6 rounded-full bg-primary-200 transition-all duration-1000 ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: '1500ms', animation: 'float 3s ease-in-out infinite' }}
              />
              <div
                className={`absolute top-1/2 -right-10 w-4 h-4 rounded-full bg-accent-300 transition-all duration-1000 ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: '1600ms', animation: 'float 4s ease-in-out infinite 0.5s' }}
              />
              <div
                className={`absolute bottom-1/4 -left-8 w-3 h-3 rounded-full bg-emerald-300 transition-all duration-1000 ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}
                style={{ transitionDelay: '1700ms', animation: 'float 3.5s ease-in-out infinite 1s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
