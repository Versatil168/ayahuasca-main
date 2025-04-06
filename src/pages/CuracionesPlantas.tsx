import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CuracionesPlantas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Galeria/Foto24.jpg",
    "/Galeria/Foto25.jpg",
    "/Galeria/Foto26.jpg",
    "/Galeria/Foto27.jpg",
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
      <h1 className="text-3xl font-bold text-center mb-6">Curaciones con Plantas</h1>

      {/* Información del servicio */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Las curaciones con plantas son prácticas ancestrales que utilizan las propiedades físicas, energéticas y espirituales de las plantas para sanar el cuerpo, la mente, las emociones y el espíritu. Esta sabiduría existe en muchas culturas del mundo, pero en especial, en la Amazonía, tiene una profundidad única por la conexión directa con la selva y sus miles de especies medicinales.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué son las curaciones con plantas?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Son tratamientos naturales que emplean:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Infusiones, baños, cataplasmas, sahumerios, aceites o extractos.</li>
          <li>Plantas sagradas o maestras que actúan a diferentes niveles del ser.</li>
          <li>Métodos tradicionales como dietas, limpias, purgas o tomas ceremoniales.</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">
          El sanador (curandero, vegetalista, maestro ayahuasquero) trabaja no solo con las propiedades físicas de la planta, sino también con su espíritu o energía, muchas veces cantando ícaros o siguiendo rituales específicos.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué son las curaciones con plantas medicinales de la Amazonía?</h2>
        <p className="text-lg text-gray-700 mb-6">
          En la Amazonía (Perú, Colombia, Brasil, Ecuador), el conocimiento sobre las plantas se transmite oralmente de generación en generación. Estas curaciones son una parte esencial de la medicina tradicional y tienen un enfoque integral y espiritual.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Ayahuasca:</strong> Planta maestra visionaria. Se usa en ceremonias para la sanación profunda del alma, traumas, bloqueos y conexión espiritual.</li>
          <li><strong>Chacruna / Chagropanga:</strong> Acompaña a la ayahuasca, aportando el componente visionario (DMT).</li>
          <li><strong>Mapacho (tabaco amazónico):</strong> Planta protectora y purificadora. Se usa para limpiar energías, proteger el espacio ceremonial y transmitir intenciones.</li>
          <li><strong>Ajo sacha:</strong> Limpieza energética, protección, corta malas vibras.</li>
          <li><strong>Guayusa:</strong> Energizante, ayuda a la concentración y sueños lúcidos.</li>
          <li><strong>Uña de gato:</strong> Antiinflamatoria y fortalecedora del sistema inmunológico.</li>
          <li><strong>Toe (brugmansia):</strong> Potente planta de visión y conexión espiritual, usada solo por maestros con gran experiencia debido a su toxicidad.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo se realizan estas curaciones?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><strong>Dietas:</strong> Aislamiento, silencio, alimentación muy simple, y conexión con una planta específica para aprender de ella.</li>
          <li><strong>Ceremonias:</strong> Con plantas como ayahuasca o tabaco, guiadas por un maestro que canta ícaros y acompaña el proceso.</li>
          <li><strong>Limpiezas energéticas:</strong> Con plantas que se frotan, se soplan o se pasan por el cuerpo.</li>
          <li><strong>Purgas:</strong> Ingesta de plantas que provocan vómito para desintoxicar cuerpo y espíritu.</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">
          En resumen: Las curaciones con plantas medicinales de la Amazonía son una medicina viva, espiritual y energética, que ve al ser humano como un todo. No solo trata síntomas, sino que busca restaurar la armonía con uno mismo, con la naturaleza y con el mundo espiritual.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          ¿Te interesa saber más sobre alguna planta en particular o cómo es una dieta amazónica?
        </p>
      </section>

      {/* Botón de "Reservar ahora" */}
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.link/b5uf37"
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

export default CuracionesPlantas;
