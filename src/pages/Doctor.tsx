import DoctorSection from '../components/DoctorSection';
import StatusSection from '../components/StatusSection';

export default function Doctor() {
    return (
        <main className="pt-20 min-h-screen bg-white">
            <DoctorSection />
            <StatusSection />
        </main>
    );
}
