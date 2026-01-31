import { QrCode, PackageCheck, BarChart3, Zap, ScanLine, ClipboardList, Pill, History, FileCheck, ShieldAlert, Scale, Lock, Info, Server } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function PharmacySection() {
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [featuresRef, featuresVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [stepsRef, stepsVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [trustRef, trustVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [scenariosRef, scenariosVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [accessRef, accessVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const [statusRef, statusVisible] = useReveal<HTMLDivElement>({ threshold: 0.1 });

  const features = [
    { icon: QrCode, title: "Scan & Verify", desc: "Instant cryptographic validation of prescription authenticity via QR scan." },
    { icon: PackageCheck, title: "Smart Dispensing", desc: "Automated checks against stock and potential drug interactions." },
    { icon: Zap, title: "Accelerated Billing", desc: "Pre-populated billing data reduces queue times and manual entry errors." },
    { icon: BarChart3, title: "Audit Compliance", desc: "Automatic logging of every dispensed unit for regulatory reporting." }
  ];

  const workflowSteps = [
    { icon: ScanLine, title: "1. Scan Prescription", desc: "Pharmacist or lab technician scans the patient's QR or Health ID to retrieve a verified digital prescription." },
    { icon: ClipboardList, title: "2. Review & Process", desc: "System displays medicine names, dosage, quantities, or lab test requirements, eliminating handwriting interpretation." },
    { icon: Pill, title: "3. Partial or Full", desc: "Dispense available items while keeping the prescription active for remaining balance if needed." },
    { icon: History, title: "4. Automatic Audit", desc: "Every dispensed item is recorded with timestamp and pharmacy identity for accountability." }
  ];

  const trustReasons = [
    { icon: FileCheck, title: "Clear Prescriptions", points: ["No handwritten ambiguity", "No guesswork in medicine names or dosage"] },
    { icon: ShieldAlert, title: "Dispensing Protection", points: ["Prevents duplicate or expired prescription usage", "Reduces liability from mis-dispensing"] },
    { icon: Scale, title: "Regulatory Readiness", points: ["Automatic digital logs", "Easy traceability for audits and inspections"] }
  ];

  const accessPoints = [
    "Pharmacies & labs can only view prescriptions presented by patients",
    "No access to unrelated patient history",
    "Dispensing actions are append-only and tamper-resistant",
    "All actions are role-based and logged"
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <h2
            className={`font-display text-2xl md:text-4xl font-bold text-slate-900 mb-6 uppercase transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Pharmacy / Lab Operations Suite
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto font-light transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Optimize dispensing, lab test processing, and inventory management with direct digital prescription integration.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((item, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-green-400 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div ref={stepsRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-slate-900 mb-12 border-l-4 border-green-500 pl-4 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            How NFCura fits into daily pharmacy & lab operations
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, i) => (
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

        {/* Why Trust NFCura */}
        <div ref={trustRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-slate-900 mb-12 border-l-4 border-blue-500 pl-4 transition-all duration-700 ${trustVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            Why Pharmacists & Labs Trust NFCura
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustReasons.map((item, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
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

        {/* Real Scenarios */}
        <div ref={scenariosRef} className="mb-32">
          <h3
            className={`text-2xl font-bold text-slate-900 mb-12 border-l-4 border-slate-500 pl-4 transition-all duration-700 ${scenariosVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            Designed for real pharmacy & lab scenarios
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Scenario 1", situation: "Patient visits with a digital prescription.", outcome: "Pharmacist or lab technician scans QR and processes request in under a minute." },
              { title: "Scenario 2", situation: "One medicine is out of stock.", outcome: "Pharmacist dispenses available items and the system tracks pending medicines." },
              { title: "Scenario 3", situation: "Prescription is already completed or expired.", outcome: "System clearly blocks dispensing and shows reason." }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 bg-slate-100 rounded-xl hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${scenariosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 font-medium mb-1">{item.situation}</p>
                <p className="text-sm text-slate-500">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data & Access Control */}
        <div ref={accessRef} className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${accessVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-purple-500 pl-4">Controlled access by design</h3>
            <div className="space-y-6">
              {accessPoints.map((text, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-500 ${accessVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="mt-1 min-w-5 min-h-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <Lock className="w-3 h-3 text-purple-600" />
                  </div>
                  <p className="text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`hidden md:flex justify-center transition-all duration-700 ${accessVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl relative">
              <Server className="w-24 h-24 text-slate-300" />
              <div
                className={`absolute top-0 right-0 p-4 bg-white rounded-xl shadow-lg transition-all duration-500 ${accessVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                style={{ transitionDelay: '500ms' }}
              >
                <Lock className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Status */}
        <div
          ref={statusRef}
          className={`bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center md:text-left flex flex-col md:flex-row items-center gap-6 transition-all duration-700 ${statusVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Deployment Status</h4>
            <p className="text-slate-600 mb-2 leading-relaxed">
              NFCura's pharmacy & lab module is currently in controlled rollout and validation phase. We are working with pharmacies and diagnostic labs to refine dispensing, testing workflows, and compliance requirements before wider adoption.
            </p>
            <p
              className={`text-sm text-slate-400 italic transition-all duration-500 ${statusVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              Partner access is available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
