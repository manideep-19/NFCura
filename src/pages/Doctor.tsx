import DoctorSection from '../components/DoctorSection';
import StatusSection from '../components/StatusSection';

export default function Doctor() {
    return (
        <main className="pt-20 min-h-screen page-transition">
            <DoctorSection />
            <StatusSection />
        </main>
    );
}
