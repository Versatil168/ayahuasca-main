import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LimpiezaEnergias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Galeria/Foto8.jpg",
    "/Galeria/Foto9.jpg",
    "/Galeria/Foto10.jpg",
    "/Galeria/Foto11.jpg",
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
      <h1 className="text-3xl font-bold text-center mb-6">Limpieza de Energías Negativas</h1>

      {/* Información del servicio */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Una limpieza de energías negativas es un ritual o práctica espiritual destinada a eliminar cargas, bloqueos o influencias pesadas que afectan tu cuerpo, mente, emociones o entorno. Se realiza con la intención de restaurar el equilibrio, la claridad y el bienestar.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué se considera "energía negativa"?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Emociones densas acumuladas (miedo, tristeza, enojo)</li>
          <li>Envidias, celos o malas intenciones de otros</li>
          <li>Conflictos, discusiones o ambientes tóxicos</li>
          <li>Energías no tuyas que se te han pegado (por lugares, personas, o incluso del plano espiritual)</li>
          <li>Sensación de cansancio, confusión o estancamiento sin causa aparente</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo se hace una limpieza de energías negativas?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hay muchas formas, dependiendo de la tradición o la intención. Algunas prácticas comunes son:
        </p>
        <ul className="list-decimal pl-6 text-gray-700 mb-6">
          <li><strong>Sahumerio o defumación:</strong> Quemar plantas como palo santo, copal, salvia, mirra o incienso. Se pasa el humo por todo el cuerpo o el espacio, con intención de limpiar.</li>
          <li><strong>Baños espirituales:</strong> Como el baño de florecimiento, o baños con sal, hierbas, o esencias. Ayudan a cortar y soltar energías pegadas.</li>
          <li><strong>Uso de cristales o piedras:</strong> Cristales como la turmalina negra, amatista, cuarzo absorben o transmutan energías densas.</li>
          <li><strong>Oraciones o cantos:</strong> Las palabras y sonidos tienen poder de limpieza y protección (ícaros, mantras, rezos).</li>
          <li><strong>Limpias con huevo, hierbas o ramas:</strong> Tradicional en muchas culturas (como en México o Perú), donde se pasa un huevo, o ramos de hierbas, para absorber la energía negativa.</li>
          <li><strong>Limpiezas chamánicas o con guía espiritual:</strong> Facilitadas por un curandero, maestro ayahuasquero u otro sanador, con plantas maestras, tabaco, ícaros, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cuándo hacer una limpieza?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Después de pasar por una situación difícil o pesada</li>
          <li>Cuando sientes cansancio sin explicación</li>
          <li>Al cambiar de casa o trabajo</li>
          <li>Antes de un ritual o ceremonia importante</li>
          <li>Cuando sientes que algo "no fluye" en tu vida</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">
          Si quieres, puedo enseñarte cómo hacer una limpieza sencilla en casa o recomendarte una más profunda dependiendo de tu situación. ¿Te gustaría?
        </p>
      </section>

      {/* Botón de "Reservar ahora" */}
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.link/w87qk8"
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

export default LimpiezaEnergias;
