import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok, SiTripadvisor } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo y contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/LogoConContorno.png" alt="logo" className="h-32 w-auto mb-4" />
          <p className="text-sm">Somos una empresa dedicada a la curación, sanación y ayuda espiritual</p>
          <p className="text-sm mt-2">📍 Cuzco, Perú</p>
          <p className="text-sm">📞 960 695 965</p>
          <p className="text-sm">✉️ murayarirodriguezrogervicente@gmail.com</p>
        </div>

        {/* Enlaces sin título */}
        <div className="text-center md:text-left">
          <ul className="space-y-2 mt-8 md:mt-0">
            <li>
              <Link to="/" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                Galería
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                Contactos
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-3">SÍGUENOS</h4>

          {/* Vista previa de Facebook */}
          <div className="flex justify-center md:justify-start mb-4">
            <iframe
              title="Facebook Page Preview"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61574568061552&tabs=timeline&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="130"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Íconos de redes sociales */}
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.facebook.com/profile.php?id=61574568061552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/rogervicentemurayari?utm_source=qr&igsh=YnF6b3M2OHh3OWdq" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://www.tiktok.com/@ayahuascamurayari" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <SiTiktok className="h-8 w-8" />
            </a>
            <a href="https://www.tripadvisor.es/Attraction_Review-g294314-d33033018-Reviews-Ayahuasca_Murayari_Peru-Cusco_Cusco_Region.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <SiTripadvisor className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ayahuasca Murayari. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
