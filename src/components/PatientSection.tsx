import { CreditCard, FileText, ShieldCheck, Smartphone, UserPlus, FileCheck, MapPin, Eye, Lock, Clock, Heart, CheckCircle, Smartphone as MobileIcon, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function PatientSection() {
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [stepsRef, stepsVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [scenariosRef, scenariosVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [controlRef, controlVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [statusRef, statusVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <h2
            className={`font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 uppercase transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Patient-Centric Sovereignty
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Empowering individuals with absolute ownership of their medical history and prescription data.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {/* Large Card - Universal Health Passport */}
          <div
            className={`lg:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-slate-100 relative overflow-hidden group transition-all duration-700 hover:shadow-lg ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Universal Health Passport</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                A single, interoperable digital identity that grants you secure access to medical services across any provider in the network. No more fragmented records or lost prescriptions.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-[100px] -mr-8 -mb-8 transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Small Card - Instant Fulfillment */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 group ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant fulfillment</h3>
            <p className="text-slate-500">
              Present your QR code at any pharmacy or lab for immediate verification.
            </p>
          </div>

          {/* Small Card - Unified Records */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-500 group ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Records</h3>
            <p className="text-slate-500">
              A chronological timeline of every treatment and prescription you've ever received.
            </p>
          </div>

          {/* Large Dark Card - Cryptographic Privacy */}
          <div
            className={`lg:col-span-2 bg-slate-900 rounded-3xl p-10 shadow-xl relative overflow-hidden group text-white transition-all duration-700 hover:shadow-2xl ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cryptographic Privacy</h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Your health data is encrypted at rest and in transit. Only you authorize who sees what, ensuring complete privacy compliance.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        {/* How NFCura Works for Patients */}
        <div ref={stepsRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-slate-900 mb-12 border-l-4 border-blue-500 pl-4 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
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
                className={`flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-slate-600">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Patient Scenarios */}
        <div ref={scenariosRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-slate-900 mb-12 border-l-4 border-emerald-500 pl-4 transition-all duration-700 ${scenariosVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
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
                className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${scenariosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Control, Safety, and Timeline */}
        <div ref={controlRef} className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Control */}
          <div
            className={`bg-slate-100 rounded-3xl p-8 transition-all duration-700 hover:shadow-lg ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-slate-900 shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You decide who sees your data</h3>
            <ul className="space-y-3">
              {[
                "Doctors only see records when you share your ID",
                "Pharmacies & labs only see the active prescription",
                "No permanent open access history",
                "Track when and where prescriptions are used"
              ].map((text, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-slate-600 text-sm transition-all duration-500 ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety */}
          <div
            className={`bg-slate-900 rounded-3xl p-8 text-white transition-all duration-700 hover:shadow-2xl ${controlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white shadow-sm">
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
            className={`bg-blue-50 rounded-3xl p-8 transition-all duration-700 hover:shadow-lg ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-blue-600 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Your lifelong health timeline</h3>
            <ul className="space-y-3">
              {[
                "All prescriptions organized chronologically",
                "Easy to review past treatments",
                "Useful for second opinions",
                "No dependence on paper files"
              ].map((text, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-slate-600 text-sm transition-all duration-500 ${controlVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Availability Status */}
        <div
          ref={statusRef}
          className={`bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto text-center md:text-left shadow-sm transition-all duration-700 ${statusVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Availability Status</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              The NFCura patient experience is currently part of a controlled rollout with participating clinics, pharmacies, and diagnostic labs. Access expands as more providers join the network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
