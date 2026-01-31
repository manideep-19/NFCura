import { User, Stethoscope, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoleBasedEntry() {
    const roles = [
        {
            title: "Patient",
            description: "Own your medical history with a secure Health ID",
            icon: User,
            link: "/patient",
            action: "For Patients"
        },
        {
            title: "Doctor",
            description: "Prescribe once, trusted everywhere",
            icon: Stethoscope,
            link: "/doctor",
            action: "For Doctors"
        },
        {
            title: "Pharmacy / Lab",
            description: "Dispense medicines & process lab tests with verified prescriptions",
            icon: Building2,
            link: "/pharmacy",
            action: "For Pharmacies & Labs"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Built for Every Stakeholder in Care
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roles.map((role, index) => (
                        <Link
                            key={index}
                            to={role.link}
                            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <role.icon className="w-7 h-7 text-slate-900" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {role.title}
                            </h3>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {role.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:translate-x-1 transition-transform">
                                {role.action}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
