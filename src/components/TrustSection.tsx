import { ShieldCheck, Lock, Globe, Server } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Enterprise Standards</h2>
          <h3 className="text-3xl font-bold text-slate-900">Security & Compliance First</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: ShieldCheck, text: "HIPAA Compliant" },
            { icon: Lock, text: "SOC2 Ready" },
            { icon: Globe, text: "GDPR Standards" },
            { icon: Server, text: "256-bit Encryption" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
              <span className="font-semibold text-slate-700">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 text-center">Plain Language Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
              <p className="text-slate-600 font-medium">Doctors can cancel or renew prescriptions anytime</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
              <p className="text-slate-600 font-medium">Pharmacies cannot modify prescribed dosage</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
              <p className="text-slate-600 font-medium">Patients control access to their records</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
              <p className="text-slate-600 font-medium">Every action is logged and traceable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
