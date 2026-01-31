import { ArrowRight, FileCheck } from 'lucide-react';

export default function StatusSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#D4F26A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-xl text-slate-800 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              Join the institutional network establishing the new standard for digital healthcare trust and interoperability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg">
                Request Partner Access
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/40 border border-slate-900/10 text-slate-900 rounded-full font-semibold hover:bg-white/60 transition-colors flex items-center gap-2 backdrop-blur-sm">
                <FileCheck className="w-5 h-5" />
                View Compliance Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
