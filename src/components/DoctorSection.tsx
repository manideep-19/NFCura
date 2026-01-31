import { FileEdit, Clock, Database, ScanLine, History, FilePlus, Activity, FileWarning, Eye, XCircle, Stethoscope, Timer, Lock, Shield, Info } from 'lucide-react';

export default function DoctorSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Enhanced */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Clinical Efficiency Engine</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light mb-4">
            A closed-loop digital prescribing system that eliminates ambiguity, reduces risk, and gives doctors real-time visibility into treatment outcomes.
          </p>
          <p className="text-sm text-slate-500 font-light">
            Designed for real-world OPD workflows · No disruption to patient flow
          </p>
        </div>

        {/* Core Capabilities - Enhanced with Clinical Impact */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
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
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light mb-3">{item.desc}</p>
              <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">{item.impact}</p>
            </div>
          ))}
        </div>

        {/* Consultation Flow - Enhanced with Time Context */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 border-l-4 border-teal-500 pl-4">How NFCura fits into a doctor's consultation flow</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: ScanLine,
                title: "1️⃣ Identify Patient",
                time: "≤ 5 seconds",
                desc: "Doctor scans Health ID or QR to instantly load verified patient context."
              },
              {
                icon: History,
                title: "2️⃣ Review Relevant History",
                time: "",
                desc: "System highlights prior prescriptions, active medications, and recent outcomes to prevent duplication or interactions."
              },
              {
                icon: FilePlus,
                title: "3️⃣ Create Prescription",
                time: "",
                desc: "Doctor issues a structured digital prescription with dosage, timing, and duration — no free-text ambiguity."
              },
              {
                icon: Activity,
                title: "4️⃣ Track Outcome",
                time: "",
                desc: "Doctor sees whether medicines were fully dispensed, partially dispensed, or not collected — without calling the pharmacy."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 text-teal-600 shadow-sm">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                {step.time && <p className="text-xs text-teal-600 font-semibold mb-2">{step.time}</p>}
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Safety - Strengthened with Rationale */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 border-l-4 border-blue-500 pl-4">Clinical Safety & Risk Reduction</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <FileWarning className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-slate-900">Eliminate Ambiguity</h4>
              </div>
              <p className="text-sm text-slate-500 italic mb-4">Removes interpretation risk at the point of dispensing.</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  No handwriting errors
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  No interpretation mistakes at pharmacy level
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-slate-900">Closed-Loop Visibility</h4>
              </div>
              <p className="text-sm text-slate-500 italic mb-4">Enables post-consultation awareness without manual follow-ups.</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  See what was actually dispensed to the patient
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  Detect non-adherence or partial fulfillment
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-slate-900">Revocation & Control</h4>
              </div>
              <p className="text-sm text-slate-500 italic mb-4">Ensures unsafe or incorrect prescriptions cannot be dispensed after cancellation.</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  Instantly cancel or replace prescriptions if needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  Prevent unsafe dispensing after cancellation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real Clinical Scenarios - Outcome-Based */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 border-l-4 border-slate-500 pl-4">Designed for real clinical practice</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-slate-400" />
                <h4 className="font-bold text-slate-900">Scenario 1</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">Doctor reviews patient's previous prescriptions before issuing a new one.</p>
              <p className="text-xs text-teal-600 font-semibold">→ Prevents duplicate therapy and drug interactions before prescription is issued.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-slate-400" />
                <h4 className="font-bold text-slate-900">Scenario 2</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">Doctor notices that a prescription was only partially dispensed.</p>
              <p className="text-xs text-teal-600 font-semibold">→ Enables timely follow-up when medication adherence is incomplete.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-5 h-5 text-slate-400" />
                <h4 className="font-bold text-slate-900">Scenario 3</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">Doctor cancels a prescription after discovering an allergy.</p>
              <p className="text-xs text-teal-600 font-semibold">→ Immediately blocks dispensing of unsafe prescriptions across all pharmacies.</p>
            </div>
          </div>
        </div>

        {/* Administrative Savings & Data Control */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-500 pl-4">Less administration, more care</h3>
            <p className="text-sm text-slate-500 mb-6">NFCura reduces non-clinical overhead without adding steps to consultation flow.</p>
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
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <Timer className="w-5 h-5 text-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-purple-500 pl-4">Data access by clinical role</h3>
            <p className="text-sm text-slate-500 mb-6">Access controls follow the principle of minimum necessary clinical data.</p>
            <div className="bg-purple-50 rounded-2xl p-8 relative overflow-hidden">
              <Shield className="absolute -right-6 -bottom-6 w-32 h-32 text-purple-100" />
              <ul className="space-y-4 relative z-10">
                {[
                  "Doctors only access patients they consult",
                  "No cross-doctor browsing",
                  "Immutable prescription records after issuance",
                  "Full audit trail for clinical accountability",
                  "All actions are logged and attributable"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment Status - Updated */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center md:text-left flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Clinical Deployment Status</h4>
            <p className="text-slate-600 leading-relaxed">
              NFCura's doctor module is currently in controlled pilot use, designed to integrate seamlessly into existing OPD workflows. Partner access is available for clinics participating in early deployment programs.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-sm text-slate-500 italic mb-6">Built with clinicians, for clinicians.</p>
        </div>
      </div>
    </section>
  );
}
