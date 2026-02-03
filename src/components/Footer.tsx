import { Activity, Linkedin, ShieldCheck, Lock, FileText, X } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

type ModalType = 'privacy' | 'terms' | 'data' | null;

export default function Footer() {
  const [footerRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.1 });
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const modalContent = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly, including personal identification, health records shared through healthcare providers, and usage data to improve our services.</p>
        
        <h3>2. How We Use Your Information</h3>
        <p>Your information is used solely to facilitate prescription management, verify identities, connect you with healthcare providers, and improve our platform's security and functionality.</p>
        
        <h3>3. Data Sharing</h3>
        <p>We only share your health information with healthcare providers, pharmacies, and labs that you explicitly authorize. We never sell your personal data to third parties.</p>
        
        <h3>4. Data Security</h3>
        <p>All data is encrypted using industry-standard protocols. We implement blockchain verification for prescription integrity and employ regular security audits.</p>
        
        <h3>5. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal data. You control who can view your health records and can revoke access at any time.</p>
        
        <h3>6. Contact</h3>
        <p>For privacy-related inquiries, contact us at privacy@nfcura.com</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      content: `
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing or using NFCura, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.</p>
        
        <h3>2. Description of Service</h3>
        <p>NFCura provides a digital platform for prescription management, connecting patients with healthcare providers, pharmacies, and diagnostic laboratories through secure, verified channels.</p>
        
        <h3>3. User Responsibilities</h3>
        <p>Users must provide accurate information, maintain the confidentiality of their account credentials, and use the platform only for lawful purposes related to healthcare management.</p>
        
        <h3>4. Medical Disclaimer</h3>
        <p>NFCura is not a healthcare provider. We facilitate connections and information sharing but do not provide medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals.</p>
        
        <h3>5. Limitation of Liability</h3>
        <p>NFCura shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform. Medical decisions remain the responsibility of licensed healthcare providers and patients.</p>
        
        <h3>6. Modifications</h3>
        <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>
      `
    },
    data: {
      title: 'Data Protection',
      content: `
        <h3>1. Data Encryption</h3>
        <p>All personal and health data is encrypted both in transit and at rest using AES-256 encryption. Our blockchain verification ensures prescription data integrity cannot be tampered with.</p>
        
        <h3>2. Access Controls</h3>
        <p>Strict access controls ensure only authorized healthcare providers can view your records when you grant permission. You can view and manage all access permissions through your account.</p>
        
        <h3>3. Data Retention</h3>
        <p>We retain your health records as long as your account is active or as required by healthcare regulations. You may request deletion of your data at any time, subject to legal retention requirements.</p>
        
        <h3>4. Breach Notification</h3>
        <p>In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate steps to mitigate any potential harm.</p>
        
        <h3>5. Third-Party Security</h3>
        <p>All third-party service providers we work with are vetted for security compliance and are contractually bound to protect your data according to our standards.</p>
        
        <h3>6. Your Control</h3>
        <p>You maintain full ownership of your health data. Export, transfer, or delete your records at any time through your account settings.</p>
      `
    }
  };

  return (
    <>
      <footer ref={footerRef} className="bg-slate-950 text-slate-400 py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">

            {/* Brand Column */}
            <div
              className={`col-span-1 md:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">NFCura</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Secure, blockchain-verified healthcare prescription management. Empowering patients with data sovereignty.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nfcura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-white transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: '300ms' }}
                  aria-label="Follow NFCura on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Digital Prescription Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Blockchain Verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>NFC-based Identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Pharmacy & Lab Network</span>
                </li>
              </ul>
            </div>

            {/* Compliance & Security */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h4 className="text-white font-semibold mb-6">Compliance & Security</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>End-to-End Encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>Data Privacy Compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>Secure Cloud Infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>Regular Security Audits</span>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-slate-500">Email:</span>
                  <a href="mailto:nfcura.app@gmail.com" className="ml-2 hover:text-blue-400 transition-colors">
                    nfcura.app@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Healthcare Disclaimer */}
          <div
            className={`bg-slate-900/50 rounded-xl p-6 mb-8 border border-slate-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div className="space-y-3">
                <h5 className="text-white font-semibold text-sm">Important Notices</h5>

                <div>
                  <p className="text-xs font-medium text-slate-400 mb-1">Medical Disclaimer</p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    The content and services provided by NFCura are for informational and verification purposes only
                    and are not intended as a substitute for professional medical advice, diagnosis, or treatment.
                    Always seek the advice of your physician or qualified healthcare provider with any questions
                    regarding a medical condition. Never disregard professional medical advice or delay seeking it
                    because of information accessed through this platform.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 mb-1">No Doctor-Patient Relationship</p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Use of this platform does not create a doctor-patient or provider-patient relationship.
                    NFCura is a technology facilitator connecting patients, healthcare providers, pharmacies,
                    and diagnostic labs. All prescriptions and medical information are issued and managed by
                    licensed healthcare professionals.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400 mb-1">Data Privacy & Security</p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Your health data is encrypted and protected. We are committed to maintaining the confidentiality,
                    integrity, and security of your personal health information in accordance with applicable
                    data protection regulations. You maintain ownership and control over your health records.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`pt-8 border-t border-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© {new Date().getFullYear()} NFCura. All rights reserved.</p>
              <div className="flex items-center gap-6 text-xs">
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <span className="text-slate-600">•</span>
                <button
                  onClick={() => setActiveModal('data')}
                  className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Data Protection
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h2 className="text-xl font-bold text-white">{modalContent[activeModal].title}</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div
              className="p-6 overflow-y-auto max-h-[60vh] text-slate-300 text-sm leading-relaxed [&_h3]:text-white [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:text-slate-400 [&_p]:mb-3"
              dangerouslySetInnerHTML={{ __html: modalContent[activeModal].content }}
            />

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
