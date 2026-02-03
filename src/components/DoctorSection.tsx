import { FileEdit, Clock, Database, ScanLine, History, FilePlus, Activity, FileWarning, Eye, XCircle, Stethoscope, Timer, Lock, Shield, Info } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function DoctorSection() {
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [capabilitiesRef, capabilitiesVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [flowRef, flowVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [safetyRef, safetyVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [scenariosRef, scenariosVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [adminRef, adminVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [statusRef, statusVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  const capabilities = [
    {
      icon: FileEdit,
      title: "Structured Prescribing",
      desc: "Standardized digital inputs eliminate ambiguity and reduce pharmacy callbacks.",
      impact: "Every prescription follows a standardized clinical structure, eliminating handwriting ambiguity and reducing pharmacy callbacks.",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Database,
      title: "Longitudinal History",
      desc: "Access a patient's complete prescription timeline across all network providers.",
      impact: "Doctors see only clinically relevant treatment history across providers, without exposing business or billing data.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Administrative Automation",
      desc: "Automated refills and status tracking reduce front-desk administrative burden.",
      impact: "Prescription status tracking replaces follow-up calls and manual verification, freeing doctors to focus on care.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  const consultationFlow = [
    { icon: ScanLine, title: "1️⃣ Identify Patient", time: "≤ 5 seconds", desc: "Doctor scans Health ID or QR to instantly load verified patient context." },
    { icon: History, title: "2️⃣ Review Relevant History", time: "", desc: "System highlights prior prescriptions, active medications, and recent outcomes to prevent duplication or interactions." },
    { icon: FilePlus, title: "3️⃣ Create Prescription", time: "", desc: "Doctor issues a structured digital prescription with dosage, timing, and duration — no free-text ambiguity." },
    { icon: Activity, title: "4️⃣ Track Outcome", time: "", desc: "Doctor sees whether medicines were fully dispensed, partially dispensed, or not collected — without calling the pharmacy." }
  ];

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <h2
            className={`font-display text-2xl md:text-4xl font-bold text-white mb-6 uppercase transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Clinical Efficiency Engine
          </h2>
          <p
            className={`text-xl text-slate-400 max-w-3xl mx-auto font-light mb-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            A closed-loop digital prescribing system that eliminates ambiguity, reduces risk, and gives doctors real-time visibility into treatment outcomes.
          </p>
          <p
            className={`text-sm text-slate-500 font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Designed for real-world OPD workflows · No disruption to patient flow
          </p>
        </div>

        {/* Core Capabilities */}
        <div ref={capabilitiesRef} className="grid md:grid-cols-3 gap-8 mb-32">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group ${capabilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg === 'bg-teal-50' ? 'bg-teal-500/20 text-teal-400' : item.bg === 'bg-blue-50' ? 'bg-blue-500/20 text-blue-400' : 'bg-indigo-500/20 text-indigo-400'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light mb-3">{item.desc}</p>
              <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-white/10 pl-3">{item.impact}</p>
            </div>
          ))}
        </div>

        {/* Consultation Flow */}
        <div ref={flowRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-white mb-12 border-l-4 border-teal-500 pl-4 transition-all duration-700 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            How NFCura fits into a doctor's consultation flow
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {consultationFlow.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-start bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-teal-400 shadow-sm">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                {step.time && <p className="text-xs text-teal-400 font-semibold mb-2">{step.time}</p>}
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Safety */}
        <div ref={safetyRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-4 transition-all duration-700 ${safetyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            Clinical Safety & Risk Reduction
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileWarning, title: "Eliminate Ambiguity", rationale: "Removes interpretation risk at the point of dispensing.", points: ["No handwriting errors", "No interpretation mistakes at pharmacy level"] },
              { icon: Eye, title: "Closed-Loop Visibility", rationale: "Enables post-consultation awareness without manual follow-ups.", points: ["See what was actually dispensed to the patient", "Detect non-adherence or partial fulfillment"] },
              { icon: XCircle, title: "Revocation & Control", rationale: "Ensures unsafe or incorrect prescriptions cannot be dispensed after cancellation.", points: ["Instantly cancel or replace prescriptions if needed", "Prevent unsafe dispensing after cancellation"] }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 ${safetyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-sm text-slate-500 italic mb-4">{item.rationale}</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Real Clinical Scenarios */}
        <div ref={scenariosRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-white mb-12 border-l-4 border-slate-500 pl-4 transition-all duration-700 ${scenariosVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            Designed for real clinical practice
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { scenario: "Scenario 1", situation: "Doctor reviews patient's previous prescriptions before issuing a new one.", outcome: "→ Prevents duplicate therapy and drug interactions before prescription is issued." },
              { scenario: "Scenario 2", situation: "Doctor notices that a prescription was only partially dispensed.", outcome: "→ Enables timely follow-up when medication adherence is incomplete." },
              { scenario: "Scenario 3", situation: "Doctor cancels a prescription after discovering an allergy.", outcome: "→ Immediately blocks dispensing of unsafe prescriptions across all pharmacies." }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${scenariosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Stethoscope className="w-5 h-5 text-slate-400" />
                  <h4 className="font-bold text-white">{item.scenario}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">{item.situation}</p>
                <p className="text-xs text-teal-400 font-semibold">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Administrative Savings & Data Control */}
        <div ref={adminRef} className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Less Administration */}
          <div
            className={`transition-all duration-700 ${adminVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-4">Less administration, more care</h3>
            <p className="text-sm text-slate-400 mb-6">NFCura reduces non-clinical overhead without adding steps to consultation flow.</p>
            <ul className="space-y-4">
              {[
                "Reduced pharmacy callbacks",
                "No rewriting prescriptions",
                "Faster consultations with structured inputs",
                "Automatic prescription status tracking",
                "No additional hardware required",
                "No staff retraining needed",
                "Works within existing clinic operations"
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 text-slate-300 transition-all duration-500 ${adminVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 60}ms` }}
                >
                  <Timer className="w-5 h-5 text-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Access Control */}
          <div
            className={`transition-all duration-700 ${adminVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">Data access by clinical role</h3>
            <p className="text-sm text-slate-400 mb-6">Access controls follow the principle of minimum necessary clinical data.</p>
            <div className="bg-purple-900/10 rounded-2xl p-8 relative overflow-hidden border border-purple-500/20">
              <Shield className="absolute -right-6 -bottom-6 w-32 h-32 text-purple-500/10" />
              <ul className="space-y-4 relative z-10">
                {[
                  "Doctors only access patients they consult",
                  "No cross-doctor browsing",
                  "Immutable prescription records after issuance",
                  "Full audit trail for clinical accountability",
                  "All actions are logged and attributable"
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-slate-300 transition-all duration-500 ${adminVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${300 + i * 60}ms` }}
                  >
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment Status */}
        <div
          ref={statusRef}
          className={`bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center md:text-left flex flex-col md:flex-row items-center gap-6 mb-12 transition-all duration-700 ${statusVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Clinical Deployment Status</h4>
            <p className="text-slate-400 leading-relaxed">
              NFCura's doctor module is currently in controlled pilot use, designed to integrate seamlessly into existing OPD workflows. Partner access is available for clinics participating in early deployment programs.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className={`text-center transition-all duration-700 ${statusVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-sm text-slate-500 italic">Built with clinicians, for clinicians.</p>
        </div>
      </div>
    </section>
  );
}
