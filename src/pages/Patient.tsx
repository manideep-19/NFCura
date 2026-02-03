import PatientSection from '../components/PatientSection';
import StatusSection from '../components/StatusSection';

export default function Patient() {
    return (
        <main className="pt-20 min-h-screen page-transition">
            <PatientSection />
            <StatusSection />
        </main>
    );
}
