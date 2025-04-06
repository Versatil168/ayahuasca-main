import { useNavigate } from "react-router-dom";
import { FaSpa, FaWind, FaSeedling, FaEye } from "react-icons/fa";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaSpa size={40} className="text-primary" />,
      title: "Baño de Florecimiento",
      description: "Ritual purificador con esencias de flores amazónicas para armonizar tu energía vital."
    },
    {
      icon: <FaWind size={40} className="text-primary" />,
      title: "Limpieza de Energías Negativas",
      description: "Tradicional limpieza espiritual que restaura el equilibrio utilizando elementos naturales."
    },
    {
      icon: <FaSeedling size={40} className="text-primary" />,
      title: "Curaciones con Plantas Amazónicas",
      description: "Tratamientos naturales que aprovechan las propiedades curativas de la flora amazónica para el bienestar integral."
    },
    {
      icon: <FaEye size={40} className="text-primary" />,
      title: "Ceremonia de Ayahuasca",
      description: "Un viaje espiritual nocturno bajo la guía de nuestro maestro curandero para una profunda introspección y renacimiento."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Sección de información */}
          <div className="mb-8 lg:mb-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Otros Servicios que Ofrecemos</h1>
            <p className="text-lg text-gray-600 max-w-md">
              Contamos con una variedad de servicios diseñados para enriquecer tu experiencia de sanación y conexión espiritual.
            </p>
            <button
              onClick={() => {
                navigate("/servicios");
                window.scrollTo(0, 0);
              }}
              className="mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Saber Más
            </button>
          </div>

          {/* Sección de servicios */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-secondary text-primary rounded-full p-4 inline-block mb-4">
                  {service.icon}
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h5>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
