import PharmacySection from '../components/PharmacySection';
import StatusSection from '../components/StatusSection';

export default function Pharmacy() {
    return (
        <main className="pt-20 min-h-screen bg-slate-50 page-transition">
            <PharmacySection />
            <StatusSection />
        </main>
    );
}
