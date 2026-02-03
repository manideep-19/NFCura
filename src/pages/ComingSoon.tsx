import { ArrowLeft, Terminal, FileCode, Users, Database, Shield } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ComingSoon() {
    const [searchParams] = useSearchParams();
    const moduleType = searchParams.get('module');

    // Dynamic Content Configuration
    const getModuleData = () => {
        switch (moduleType) {
            case 'demo':
                return {
                    title: "Interactive Demo Env.",
                    sub: "Loading Virtual Sandbox...",
                    desc: "The public demonstration environment is being provisioned. You will be able to simulate doctor-patient prescription flows.",
                    version: "v0.8.2-beta",
                    icon: Terminal,
                    status: [
                        { label: "Sandbox", status: "Initializing", active: true },
                        { label: "Mock_Data", status: "Loaded", active: true },
                        { label: "Access", status: "Pending", active: false },
                    ]
                };
            case 'partner':
                return {
                    title: "Partner Portal Access",
                    sub: "Verifying Credentials...",
                    desc: "Institutional onboarding for hospitals and pharmacies. APIs are currently restricted to whitelisted IPs during the audit phase.",
                    version: "v1.2.0-rc",
                    icon: Users,
                    status: [
                        { label: "Gateway", status: "Restricted", active: false },
                        { label: "KYB_Check", status: "Manual", active: true },
                        { label: "API_Key", status: "Generated", active: true },
                    ]
                };
            case 'compliance':
                return {
                    title: "Compliance Dashboard",
                    sub: "Retrieving Audit Logs...",
                    desc: "Real-time generation of HIPAA and GDPR audit trails. Immutable chain records are being indexed for inspection.",
                    version: "v2.0.1-sec",
                    icon: Shield,
                    status: [
                        { label: "Ledger", status: "Synced", active: true },
                        { label: "Encryption", status: "AES-256", active: true },
                        { label: "Export", status: "Processing", active: true },
                    ]
                };
            default:
                // Generic Fallback
                return {
                    title: "Engineering the Protocol",
                    sub: "System_Build_v0.9.4",
                    desc: "We are currently deploying the core infrastructure for decentralized health identity. Secure chains are being established.",
                    version: "v0.9.4",
                    icon: Database,
                    status: [
                        { label: "Encryption", status: "AES-256", active: true },
                        { label: "Ledger", status: "Syncing...", active: true },
                        { label: "Module", status: "Public_Beta", active: false },
                    ]
                };
        }
    };

    const data = getModuleData();
    const Icon = data.icon;

    return (
        <main className="min-h-screen relative flex items-center justify-center p-6 bg-[#0A0A0A] overflow-hidden page-transition font-sans">

            {/* Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#D4F26A05,transparent)]" />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-3xl">

                {/* Development Badge */}
                <div className="flex justify-center mb-8 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4F26A]/10 border border-[#D4F26A]/20 rounded text-[#D4F26A] text-xs font-mono tracking-wider uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4F26A] animate-pulse" />
                        {data.version}
                    </div>
                </div>

                {/* Main Spec Card */}
                <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-slide-up">

                    {/* Card Header */}
                    <div className="border-b border-white/5 bg-white/[0.02] p-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs font-mono text-slate-500">module: {moduleType || 'core'}</div>
                    </div>

                    <div className="p-8 md:p-12 text-center">

                        <div className="w-16 h-16 mx-auto bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                            <Icon className="w-8 h-8 text-slate-400" />
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            {data.title}
                        </h1>
                        <p className="font-mono text-[#D4F26A] text-sm mb-6 uppercase tracking-wider opacity-80">
                            {data.sub}
                        </p>

                        <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed mb-10 font-light border-l-2 border-white/10 pl-4 text-left">
                            {data.desc}
                        </p>

                        {/* Technical Status Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto mb-10 text-left">
                            {data.status.map((item, i) => (
                                <div key={i} className="p-3 bg-white/[0.03] rounded border border-white/5 flex flex-col gap-1 hover:bg-white/[0.05] transition-colors">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{item.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                                        <span className="text-xs font-mono text-slate-300">{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium text-sm rounded hover:bg-slate-200 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Return to Dashboard
                            </Link>
                        </div>

                    </div>

                    {/* Card Footer Progress */}
                    <div className="bg-white/[0.02] border-t border-white/5 p-4 flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>TARGET: Q4_2026</span>
                        <div className="flex items-center gap-2">
                            <span>BUILD_PROGRESS</span>
                            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-[#D4F26A] w-[72%] rounded-full animate-pulse" />
                            </div>
                            <span className="text-[#D4F26A]">72%</span>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
