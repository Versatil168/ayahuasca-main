import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-custom-bg bg-cover bg-center bg-fixed min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg">
        
        {/* Título y descripción de la sección */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Sobre Nosotros</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Conoce más sobre nuestra empresa, valores y misión
          </p>
        </div>

        {/* Sección "Mi Historia" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi historia</h2>
            <p className="text-gray-600 mb-4">
            Roger Murayari es un maestro curandero y palero es hijo de uno de los más maestros ayahuasqueros y paleros : Ladimiro Murayari y María Angélica reconocidos maestros de la selva amazónica peruana. Nuestro maestro nació en el año de 1974, en el centro poblado de Tamshiyacu ubicado al margen izquierdo del rio amazonas, desde muy niño aprendió de la medicina Ancestral de sus padres, abuelos, bis abuelos, etc. Su vida vida espiritual proviene de un linaje de maestros ayahuasqueros y curanderos.
Los conocimientos y las técnicas de curaciones lo adquirió de sus padres Ladimiro Murayari y Maria Angélica de los cuales nuestro maestro proviene de un linaje de curanderos ayahuasqueros y paleros.
El poder o la energía de curar adquirió con dietas de plantas medicinales tales como: lupuna, mariri caspi, caupuri, raya casha, cumaceba, chuchuazi, catahuas, ayahumas, chinta pijuayo, etc.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/Jefe.png"
              alt="Roger Murayari - Chamán"
              className="rounded-xl shadow-lg object-cover w-64 h-auto"
            />
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calidad</h3>
              <p className="text-gray-600">
                Nos comprometemos a ofrecer productos y servicios de la más alta calidad...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovación</h3>
              <p className="text-gray-600">
                Buscamos constantemente nuevas y mejores formas de hacer las cosas...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y ética...
              </p>
            </div>
          </div>
        </div>

        {/* Sección Misión y Visión */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Misión y Visión</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-600">
              "Brindar un servicio de curación y sanación espiritual a través de la ayahuasca, guiando a las personas en su camino de transformación y autoconocimiento. Nos comprometemos a ofrecer un entorno seguro, respetuoso y armonioso, honrando la sabiduría ancestral y promoviendo el bienestar integral del cuerpo, la mente y el espíritu."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-600">
              "Convertirnos en un referente global en curación, sanación y ayuda espiritual a través de la ayahuasca, proporcionando experiencias transformadoras que fomenten el equilibrio entre el cuerpo, la mente y el espíritu. Buscamos expandir el conocimiento de la medicina ancestral, preservando sus tradiciones con respeto y responsabilidad, para contribuir al bienestar de la humanidad y la conexión con la naturaleza."

              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
