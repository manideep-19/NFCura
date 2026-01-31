import { Activity, Linkedin, Twitter, Github } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Footer() {
  const [footerRef, isVisible] = useReveal<HTMLElement>({ threshold: 0.1 });

  const platformLinks = [
    { name: "Prescription Cloud", href: "#" },
    { name: "Identity Verification", href: "#" },
    { name: "Pharmacy & Lab Network", href: "#" },
    { name: "API Documentation", href: "#" }
  ];

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Security", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "BAA Agreement", href: "#" },
    { name: "Status", href: "#" }
  ];

  return (
    <footer ref={footerRef} className="bg-slate-950 text-slate-400 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">

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
            The enterprise standard for secure, interoperable healthcare prescription management and delivery.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`hover:text-white transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Platform Links */}
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <h4 className="text-white font-semibold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm">
            {platformLinks.map((link, i) => (
              <li
                key={i}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${200 + i * 50}ms` }}
              >
                <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            {companyLinks.map((link, i) => (
              <li
                key={i}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${300 + i * 50}ms` }}
              >
                <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            {legalLinks.map((link, i) => (
              <li
                key={i}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${400 + i * 50}ms` }}
              >
                <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '500ms' }}
      >
        <p>© 2025 NFCura Inc. All rights reserved.</p>
        <p>
          System Status: <span className="text-emerald-500 font-medium animate-pulse">Operational</span>
        </p>
      </div>
    </footer>
  );
}
