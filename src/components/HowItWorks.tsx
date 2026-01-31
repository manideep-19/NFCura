import { FileText, Link, ShieldCheck, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Check Profile",
      desc: "Provider verifies patient identity."
    },
    {
      icon: Link,
      title: "Request Consult",
      desc: "Secure link established for diagnosis."
    },
    {
      icon: ShieldCheck,
      title: "Schedule",
      desc: "Meeting scheduled on the blockchain."
    },
    {
      icon: CheckCircle,
      title: "Get Solution",
      desc: "Prescription fulfilled & verified."
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">4 Easy Steps to Health</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Navigating Health Together: Your Trusted Medical Resource. Medicine Meets Technology.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Optional, decorative) */}
            <div className="hidden md:block absolute top-[2.5rem] left-10 right-10 h-[2px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-slate-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <step.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
