import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BañoFlorecimiento = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Galeria/Foto30.jpg",
    "/Galeria/Foto31.jpg",
    "/Galeria/Foto32.jpg",
    "/Galeria/Foto33.jpg",
  ];

  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Baño de Florecimiento</h1>

      {/* Información del servicio */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Un baño de florecimiento es una práctica espiritual y energética que se usa en muchas tradiciones indígenas y de medicina ancestral (especialmente en la Amazonía), con el objetivo de limpiar, proteger y atraer energías positivas.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿En qué consiste?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Agua (a veces agua bendita o de río)</li>
          <li>Plantas y flores con propiedades espirituales o energéticas (como albahaca, ruda, romero, menta, flores aromáticas, etc.)</li>
          <li>Perfumes naturales (como agua florida o esencia de rosas)</li>
          <li>En algunos casos, se agregan oraciones, cantos o ícaros durante la preparación.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Para qué sirve?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Abrir caminos (nuevas oportunidades en el amor, el trabajo o la vida espiritual)</li>
          <li>Atraer buena suerte y abundancia</li>
          <li>Elevar la energía personal</li>
          <li>Restaurar el equilibrio emocional o espiritual</li>
          <li>Cortar energías pesadas o influencias negativas</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo se aplica?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Se puede hacer vertiendo el baño sobre el cuerpo (usualmente desde la cabeza), o también rociándolo con ramas o flores.
          Muchas veces se hace al amanecer o al anochecer, dependiendo del propósito. Es común hacerlo después de una ceremonia con plantas sagradas o como preparación para una.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Simbolismo</h2>
        <p className="text-lg text-gray-700 mb-6">
          El término “florecimiento” representa renacimiento, crecimiento interior y expansión del ser, como una planta que florece después de una temporada oscura.
        </p>
      </section>

      {/* Botón de "Reservar ahora" */}
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.link/t88ujr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-200"
        >
          Reservar ahora
        </a>
      </div>

      {/* Galería de imágenes (Carrusel con animación) */}
      <div className="relative h-[500px] w-full group mb-8">
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover duration-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/50"></div>
        </div>

        {/* Flecha izquierda */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevImage}
        >
          <ChevronLeft size={30} />
        </div>

        {/* Flecha derecha */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextImage}
        >
          <ChevronRight size={30} />
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BañoFlorecimiento;
