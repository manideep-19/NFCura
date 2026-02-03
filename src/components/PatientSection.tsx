import { CreditCard, FileText, ShieldCheck, Smartphone, UserPlus, FileCheck, MapPin, Eye, Lock, Clock, Heart, CheckCircle, Smartphone as MobileIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function PatientSection() {
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [stepsRef, stepsVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [scenariosRef, scenariosVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [controlRef, controlVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <h2
            className={`font-display text-2xl md:text-4xl font-bold text-white mb-6 uppercase transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Patient-Centric Sovereignty
          </h2>
          <p
            className={`text-xl text-slate-400 max-w-2xl mx-auto font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Empowering individuals with absolute ownership of their medical history and prescription data.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {/* Large Card - Universal Health Passport */}
          <div
            className={`lg:col-span-2 bg-white/5 rounded-3xl p-10 shadow-2xl border border-white/10 relative overflow-hidden group transition-all duration-700 hover:shadow-2xl backdrop-blur-sm ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Universal Health Passport</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                A single, interoperable digital identity that grants you secure access to medical services across any provider in the network. No more fragmented records or lost prescriptions.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-[100px] -mr-8 -mb-8 transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Small Card - Instant Fulfillment */}
          <div
            className={`bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant fulfillment</h3>
            <p className="text-slate-400">
              Present your QR code at any pharmacy or lab for immediate verification.
            </p>
          </div>

          {/* Small Card - Unified Records */}
          <div
            className={`bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Unified Records</h3>
            <p className="text-slate-400">
              A chronological timeline of every treatment and prescription you've ever received.
            </p>
          </div>

          {/* Large Dark Card - Cryptographic Privacy */}
          <div
            className={`lg:col-span-2 bg-[#101010] rounded-3xl p-10 shadow-2xl relative overflow-hidden group text-white transition-all duration-700 hover:shadow-2xl border border-white/10 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cryptographic Privacy</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Your health data is encrypted at rest and in transit. Only you authorize who sees what, ensuring complete privacy compliance.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        {/* How NFCura Works for Patients */}
        <div ref={stepsRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-4 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            How NFCura works in daily healthcare
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: UserPlus, title: "1. Create ID", desc: "Complete a one-time setup to generate a secure digital Health ID linked to your profile." },
              { icon: ShieldCheck, title: "2. Visit Doctor", desc: "Share your Health ID or QR code to allow the doctor to view relevant past prescriptions." },
              { icon: FileCheck, title: "3. Get Prescription", desc: "Prescriptions are issued digitally and stored instantly under your health timeline." },
              { icon: MapPin, title: "4. Collect Meds / Tests", desc: "Show the same QR code at any connected pharmacy or lab to get medicines dispensed or tests processed accurately." }
            ].map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-start bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Patient Scenarios */}
        <div ref={scenariosRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-white mb-12 border-l-4 border-emerald-500 pl-4 transition-all duration-700 ${scenariosVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            Designed for real life, not just apps
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MobileIcon, title: "No Lost Prescriptions", desc: "A patient changes cities and still accesses all previous prescriptions instantly." },
              { icon: CheckCircle, title: "Clear Medicines", desc: "Pharmacy or lab processes exactly as prescribed — no confusion, no misreading." },
              { icon: Heart, title: "Treatment Continuity", desc: "A new doctor sees prior treatment history and avoids repeating medicines." }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${scenariosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Control, Safety, and Timeline */}
        <div ref={controlRef} className="grid md:grid-cols-3 gap-8 mb-2">
          {/* Control */}
          <div
            className={`bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm transition-all duration-700 hover:shadow-2xl ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">You decide who sees your data</h3>
            <ul className="space-y-3">
              {[
                "Doctors only see records when you share your ID",
                "Pharmacies & labs only see the active prescription",
                "No permanent open access history",
                "Track when and where prescriptions are used"
              ].map((text, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-slate-400 text-sm transition-all duration-500 ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety */}
          <div
            className={`bg-[#0A0A0A] rounded-3xl p-8 text-white border border-white/10 shadow-xl transition-all duration-700 hover:shadow-2xl ${controlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 shadow-sm">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Built for safety and clarity</h3>
            <ul className="space-y-3">
              {[
                "No handwritten prescriptions",
                "No duplicate or reused prescriptions",
                "Clear visibility into dispensed meds",
                "Doctors can cancel safely if needed"
              ].map((text, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-slate-300 text-sm transition-all duration-500 ${controlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div
            className={`bg-blue-900/10 rounded-3xl p-8 border border-blue-500/20 backdrop-blur-sm transition-all duration-700 hover:shadow-2xl ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Your lifelong health timeline</h3>
            <ul className="space-y-3">
              {[
                "All prescriptions organized chronologically",
                "Easy to review past treatments",
                "Useful for second opinions",
                "No dependence on paper files"
              ].map((text, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-slate-400 text-sm transition-all duration-500 ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
