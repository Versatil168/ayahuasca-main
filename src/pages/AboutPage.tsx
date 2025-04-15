import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton'; // Adjust the path as necessary

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

        {/* Sección "Mi Historia" - Roger Murayari */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi historia</h2>
            <p className="text-gray-600 mb-4">
              Roger Murayari es un maestro curandero y palero, hijo de dos reconocidos maestros ayahuasqueros y paleros: Ladimiro Murayari y María Angélica, destacados en la selva amazónica peruana. Nació en 1974 en el centro poblado de Tamshiyacu, a orillas del río Amazonas. Desde niño, aprendió sobre la medicina ancestral gracias a sus padres, abuelos y bisabuelos. Su camino espiritual proviene de un linaje de curanderos.
              <br /><br />
              Los conocimientos y técnicas de curación los heredó de sus padres. El poder de curar lo adquirió mediante dietas con plantas medicinales como: lupuna, mariri caspi, caupuri, raya casha, cumaceba, chuchuazi, catahuas, ayahumas, chinta pijuayo, entre otras.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/Jefe.png"
              alt="Roger Murayari - Chamán"
              className="rounded-xl shadow-lg object-cover w-64 h-auto"
            />
            <p className="mt-4 text-lg font-medium text-gray-800">
              Lic. Educ. Maestro Roger Murayari
            </p>
          </div>
        </div>

        {/* Sección "Don Ladimiro Murayari" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-16">
  {/* Imagen a la izquierda */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/Padres.jpg"
      alt="Don Ladimiro Murayari"
      className="rounded-xl shadow-lg object-cover w-full max-w-lg h-auto"
    />
    <p className="mt-4 text-lg font-medium text-gray-800">
      El Chamán Don Ladimiro Murayari y la Chamán María Angélica
    </p>
  </div>

  {/* Texto a la derecha */}
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro legado ancestral</h2>
    <p className="text-gray-600 mb-4">
      Don Ladimiro Murayari, nació en la selva amazónica de Iquitos en Perú, en una comunidad llamada Nuevo Horizonte, río Amazonas. Es un reconocido chamán maestro de la selva con más de 55 años de experiencia en el campo de la medicina ancestral ayahuasca y curaciones chamánicas.
      <br /><br />
      Durante todo este tiempo, ha llevado a cabo innumerables retiros de ayahuasca en la selva de Iquitos, brindando sanación y sabiduría a quienes buscan conexión con lo divino a través de esta poderosa planta maestra.
      <br /><br />
      Su profundo conocimiento de la ayahuasca y su dedicación en la práctica chamánica lo han convertido en una figura respetada y querida. Colabora con su esposa, la chamana María Angélica, en la comunidad de Nuevo Horizonte – Tamshiyacu, creando un espacio sagrado para la transformación interior y el despertar espiritual.
      <br /><br />
      Su vínculo con la naturaleza y los espíritus de la selva, junto a su compromiso con el bienestar de sus pacientes, los convierten en guías excepcionales en el camino hacia la sanación e iluminación.
      <br /><br />
      Los retiros dirigidos por Don Ladimiro y María Angélica son una experiencia única de sabiduría ancestral, donde las ceremonias, los cantos de ícaros y las limpiezas energéticas abren la puerta al autoconocimiento y bienestar integral.
    </p>
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
                "Brindar un servicio de curación y sanación espiritual a través de la ayahuasca, guiando a las personas en su camino de transformación y autoconocimiento. Nos comprometemos a ofrecer un entorno seguro, respetuoso y armonioso, honrando la sabiduría ancestral y promoviendo el bienestar integral del cuerpo, la mente y el espíritu."
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
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
