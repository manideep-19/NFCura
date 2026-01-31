import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import HowItWorks from '../components/HowItWorks';
import WhyNFCura from '../components/WhyNFCura';
import RoleBasedEntry from '../components/RoleBasedEntry';
import CoreDifferentiator from '../components/CoreDifferentiator';
import ProblemContrast from '../components/ProblemContrast';
import ValidationSection from '../components/ValidationSection';
import RoleBasedCTA from '../components/RoleBasedCTA';

export default function Home() {
    const scrollToExplore = () => {
        const element = document.getElementById('explore-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="page-transition">
            <Hero onExplore={scrollToExplore} />
            <RoleBasedEntry />
            <CoreDifferentiator />
            <ProblemContrast />
            <ValidationSection />
            <TrustSection />
            <div id="explore-section">
                <HowItWorks />
            </div>
            <WhyNFCura />
            <RoleBasedCTA />
        </main>
    );
}
