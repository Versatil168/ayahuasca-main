import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SiTiktok, SiTripadvisor } from 'react-icons/si';
import { Language } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { currentLang, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/sobre-nosotros', label: t('about') },
    { to: '/galeria', label: t('gallery') },
    { to: '/servicios', label: t('services') },
    { to: '/contacto', label: t('contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`w-full z-50 fixed top-0 transition-all duration-300 ${scrolled ? 'bg-white py-2 shadow-md' : 'bg-white/80 backdrop-blur-md py-3'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="/Favi_Icon.png"
                alt="logo"
                className={`h-${scrolled ? '8' : '10'} w-auto object-contain transition-all duration-300`}
              />
              <img
                src="/Ayahuasca_Murayari.png"
                alt="Ayahuasca Murayari"
                className={`h-${scrolled ? '8' : '10'} w-auto object-contain transition-all duration-300`}
              />
            </div>
          </Link>

          {/* ... lo demás permanece igual */}


          <div className="hidden md:flex md:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`px-2 py-1 text-sm font-medium transition-colors ${isActive(link.to) ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/profile.php?id=61574568061552" className="text-gray-600 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/rogervicentemurayari?utm_source=qr&igsh=YnF6b3M2OHh3OWdq" className="text-gray-600 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@ayahuascamurayari" className="text-gray-600 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="h-4 w-4" />
              </a>
              <a href="https://www.tripadvisor.es/Attraction_Review-g294314-d33033018-Reviews-Ayahuasca_Murayari_Peru-Cusco_Cusco_Region.html" className="text-gray-600 hover:text-green-600" target="_blank" rel="noopener noreferrer">
                <SiTripadvisor className="h-5 w-5" />
              </a>
            </div>

            <select
              value={currentLang}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="appearance-none rounded text-xs px-2 py-1 text-gray-700 border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>

            {/* <Link to="/reservar" className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors"> */}
            {/* {t('book')} */}
            {/* </Link> */}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 z-40">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block text-center px-4 py-2 text-sm font-medium transition-colors ${isActive(link.to) ? 'text-indigo-600 font-bold' : 'text-gray-700 hover:text-indigo-600'}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574568061552" className="text-gray-600 hover:text-indigo-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rogervicentemurayari?utm_source=qr&igsh=YnF6b3M2OHh3OWdq" className="text-gray-600 hover:text-indigo-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@ayahuascamurayari" className="text-gray-600 hover:text-indigo-600">
                <SiTiktok className="h-5 w-5" />
              </a>
              <a href="https://www.tripadvisor.es/Attraction_Review-g294314-d33033018-Reviews-Ayahuasca_Murayari_Peru-Cusco_Cusco_Region.html" className="text-gray-600 hover:text-green-600">
                <SiTripadvisor className="h-5 w-5" />
              </a>
            </div>

            {/* Select de idioma en vista móvil */}
            <div className="flex justify-center">
              <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="appearance-none rounded text-sm px-3 py-1 border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
