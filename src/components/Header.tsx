import { NavLink } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Patient', path: '/patient' },
    { name: 'Doctor', path: '/doctor' },
    { name: 'Pharmacy / Lab', path: '/pharmacy' },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center transition-all duration-300">

        {/* Navigation - Pill Style with Capsule Border */}
        <nav className="flex items-center gap-1 p-1 rounded-full overflow-x-auto max-w-full no-scrollbar bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${isActive
                  ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

