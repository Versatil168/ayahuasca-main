// ...importaciones (sin cambios)
import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SiTiktok, SiTripadvisor } from 'react-icons/si';
import {
  changeLanguage,
  changeLanguageWithCookie,
  getCurrentLanguage
} from '../services/translationService';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('preferredLanguage') || 'es');
  const [scrolled, setScrolled] = useState(false);
  const [translateInitialized, setTranslateInitialized] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkTranslateInitialized = () => {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        setTranslateInitialized(true);
        const selected = getCurrentLanguage();
        if (selected !== currentLang) {
          setCurrentLang(selected);
        }
        return true;
      }
      return false;
    };
    if (translateInitialized || checkTranslateInitialized()) return;

    const interval = setInterval(() => {
      if (checkTranslateInitialized()) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [translateInitialized, currentLang]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    setCurrentLang(langCode);
    if (translateInitialized) {
      changeLanguage(langCode);
    } else {
      changeLanguageWithCookie(langCode);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { to: '/galeria', label: 'Galería' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/paquetes', label: 'Paquetes' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`w-full z-50 fixed top-0 transition-all duration-500 ease-in-out transform ${scrolled ? 'bg-white py-2 shadow-md translate-y-0 opacity-100' : 'bg-white/80 backdrop-blur-md py-3 translate-y-0 opacity-95'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/Favi_Icon.png"
                  alt="logo"
                  className={`h-${scrolled ? '8' : '10'} w-auto object-contain transition-all duration-500 ease-in-out`}
                />
                <img
                  src="/Ayahuasca_Murayari.png"
                  alt="Ayahuasca Murayari"
                  className={`h-${scrolled ? '8' : '10'} w-auto object-contain transition-all duration-500 ease-in-out`}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-2 py-1 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${isActive(link.to) ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-700 hover:text-green-600'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2">
                {[{
                  href: 'https://www.facebook.com/profile.php?id=61574568061552',
                  icon: <Facebook className="h-4 w-4" />
                }, {
                  href: 'https://www.instagram.com/rogervicentemurayari?utm_source=qr&igsh=YnF6b3M2OHh3OWdq',
                  icon: <Instagram className="h-4 w-4" />
                }, {
                  href: 'https://www.tiktok.com/@ayahuascamurayari',
                  icon: <SiTiktok className="h-4 w-4" />
                }, {
                  href: 'https://www.tripadvisor.es/Attraction_Review-g294314-d33033018-Reviews-Ayahuasca_Murayari_Peru-Cusco_Cusco_Region.html',
                  icon: <SiTripadvisor className="h-5 w-5" />
                }].map((item, idx) => (
                  <a key={idx} href={item.href} className="text-gray-600 hover:text-green-600 transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="hidden md:block">
              <select
                value={currentLang}
                onChange={handleLanguageChange}
                className="appearance-none rounded-md text-xs px-2 py-1 text-gray-700 border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md transition duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white shadow-md px-4 pt-4 pb-6 flex flex-col items-center space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-300 ${isActive(link.to) ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex justify-center space-x-4 pt-2">
              {[{
                href: 'https://www.facebook.com/profile.php?id=61574568061552',
                icon: <Facebook className="h-4 w-4" />
              }, {
                href: 'https://www.instagram.com/rogervicentemurayari',
                icon: <Instagram className="h-4 w-4" />
              }, {
                href: 'https://www.tiktok.com/@ayahuascamurayari',
                icon: <SiTiktok className="h-4 w-4" />
              }, {
                href: 'https://www.tripadvisor.es/Attraction_Review-g294314-d33033018-Reviews-Ayahuasca_Murayari_Peru',
                icon: <SiTripadvisor className="h-5 w-5" />
              }].map((item, idx) => (
                <a key={idx} href={item.href} className="text-gray-600 hover:text-green-600 transition-transform duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="pt-2 w-full flex justify-center">
              <select
                value={currentLang}
                onChange={handleLanguageChange}
                className="appearance-none rounded-md text-xs px-2 py-1 text-gray-700 border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-1/2"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Google Translate Element (invisible) */}
      <div id="google_translate_element" style={{ display: 'none', position: 'absolute', left: '-9999px', top: '-9999px' }}></div>
    </>
  );
}
