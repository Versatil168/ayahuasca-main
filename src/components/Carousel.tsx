import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

const slides = [
  {
    url: "/1.png",
    title: "Centro de curación, sanación y bienestar: Ayahuasca Murayari",
    description: "Deja atrás el estrés y encuentra equilibrio interior"
  },
  {
    url: "/Jaguar_Legal.png",
    title: "Encuentra paz y armonía en un viaje espiritual único",
    description: "Un espacio de paz para sanar cuerpo, mente y alma"
  },
  {
    url: "3.jpg",
    title: "Déjate llevar por la sabiduría ancestral de la Ayahuasca",
    description: "Renuévate con rituales sagrados en un entorno natural único"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full group">
      {/* Slide actual */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/50"></div>

        {/* Contenido del slide */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="w-4/5 md:w-3/4 lg:w-2/3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {slides[currentIndex].title}
          </h2>
          <p className="w-4/5 md:w-3/4 lg:w-2/3 text-lg md:text-xl">
            {slides[currentIndex].description}
          </p>
          <Link to="/contacto">
          <div className="mt-8">
            <a href="/contacto" className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-300">
              Contáctanos
            </a>


          </div></Link>
          
        </div>
      </div>

      {/* Flecha izquierda */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </div>

      {/* Flecha derecha */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
