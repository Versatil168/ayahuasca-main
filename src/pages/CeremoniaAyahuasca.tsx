import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CeremoniaAyahuasca = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Galeria/Foto4.jpg",
    "/Galeria/Foto5.jpg",
    "/Galeria/Foto6.jpg",
    "/Galeria/Foto7.jpg",
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
      <h1 className="text-3xl font-bold text-center mb-6">Ceremonia de Ayahuasca</h1>

      {/* Información sobre la ceremonia */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Una ceremonia de ayahuasca es un ritual tradicional que se practica principalmente en culturas indígenas de la Amazonía, aunque en las últimas décadas ha ganado popularidad en otros lugares del mundo. Está centrada en el consumo de una bebida psicoactiva preparada a partir de la liana Banisteriopsis caapi y, comúnmente, de las hojas del arbusto Psychotria viridis, que contiene DMT, una potente sustancia psicodélica.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿En qué consiste una ceremonia de ayahuasca?</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Preparación previa</h3>
        <p className="text-lg text-gray-700 mb-4">
          Antes de la ceremonia, los participantes suelen seguir una dieta especial (la “dieta vegetalista”) que restringe alimentos como sal, azúcar, alcohol, carne roja, grasas y productos procesados. También se recomienda evitar relaciones sexuales y ciertas medicaciones. Esto se hace para "limpiar" el cuerpo y prepararlo espiritualmente.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. El entorno ceremonial</h3>
        <p className="text-lg text-gray-700 mb-4">
          La ceremonia suele realizarse en un lugar tranquilo, como una maloca (casa ceremonial) en la selva o un espacio preparado para el ritual. Está dirigida por un chamán o facilitador, que tiene experiencia en guiar este tipo de experiencias.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Ingesta de la ayahuasca</h3>
        <p className="text-lg text-gray-700 mb-4">
          Los participantes beben una dosis del brebaje, que tiene un sabor muy amargo. El efecto comienza entre 30 a 60 minutos después y puede durar de 4 a 6 horas, o más.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">4. La experiencia</h3>
        <p className="text-lg text-gray-700 mb-4">
          Cada experiencia es única, pero puede incluir:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Visiones o visuales intensos.</li>
          <li>Procesos emocionales profundos (como revivir traumas, sentir amor universal, enfrentar miedos).</li>
          <li>Purgas físicas, como vómitos, diarrea o sudoración (consideradas parte del proceso de limpieza).</li>
          <li>Conexiones espirituales o sensación de unidad con la naturaleza o el universo.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Durante la ceremonia, el chamán canta ícaros (cantos curativos) que guían y protegen la experiencia.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Integración</h3>
        <p className="text-lg text-gray-700 mb-4">
          Después de la ceremonia, es común tener una fase de integración, donde los participantes reflexionan sobre lo vivido. A veces esto se hace en grupo o con apoyo psicológico, dependiendo del contexto.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Advertencia</h3>
        <p className="text-lg text-gray-700 mb-4">
          Aunque muchas personas reportan beneficios espirituales, emocionales o psicológicos, no es una experiencia recreativa ni exenta de riesgos. Puede ser peligrosa para personas con ciertas condiciones mentales o que estén tomando medicamentos incompatibles.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          ¿Estás pensando en participar en una o solo tienes curiosidad?
        </p>
      </section>

      {/* Botón de "Reservar ahora" */}
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.link/5x4ngo"
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

export default CeremoniaAyahuasca;
