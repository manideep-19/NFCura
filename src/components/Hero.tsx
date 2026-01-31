import { ArrowRight, ShieldCheck, Activity, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="pt-28 pb-12 px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="bg-[#F0F4F8] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-sm">

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">

          {/* Left Column: Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">Healthcare V2.0</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Empowering Lives Through <br className="hidden lg:block" />
              <span className="text-primary-600">Secure Health.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Navigating Health Together: Your Trusted Medical Resource. NFCura unifies prescriptions and identity into one immutable chain of trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <button
                onClick={onExplore}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Get started now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary w-full sm:w-auto justify-center">
                View Demo
              </button>
            </div>

            {/* Micro Stats or Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Encrypted</p>
                  <p className="text-xs text-slate-500">End-to-end</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-600">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Real-time</p>
                  <p className="text-xs text-slate-500">Sync</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex-1 w-full relative group">
            <div className="relative z-10 w-full aspect-square lg:aspect-[4/3] flex items-center justify-center">
              {/* 3D Illustration Image */}
              <img
                src="/hero-illustration.png"
                alt="Healthcare Platform"
                className="object-contain w-full h-full drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Cards (Decorative) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Status</p>
                  <p className="text-xs text-green-600 font-bold">Verified & Secure</p>
                </div>
              </div>
            </div>

            {/* Circle Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
