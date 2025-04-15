// src/pages/ServicesPage.tsx
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// Datos simulados para servicios
const services = [
  {
    id: 1,
    title: 'Baño de Florecimiento',
    description: 'Ritual purificador con esencias de flores amazónicas para armonizar tu energía vital y atraer bienestar.',
    features: [
      'Esencias naturales',
      'Equilibrio energético',
      'Atracción de bienestar',
      'Conexión espiritual'
    ],
    image: '/Florecimiento.png',
    popular: false
  },
  {
    id: 2,
    title: 'Limpieza de Energías Negativas',
    description: 'Tradicional limpieza espiritual que utiliza elementos naturales para restaurar el equilibrio y eliminar cargas negativas.',
    features: [
      'Uso de plantas sagradas',
      'Eliminación de energías negativas',
      'Restauración del equilibrio',
      'Bienestar emocional'
    ],
    image: '/LimpiezaEnergia.png',
    popular: false
  },
  {
    id: 3,
    title: 'Curaciones con Plantas Amazónicas',
    description: 'Tratamientos naturales que aprovechan las propiedades curativas de la flora amazónica para mejorar la salud física, mental y emocional.',
    features: [
      'Medicina ancestral',
      'Tratamientos naturales',
      'Sanación integral',
      'Equilibrio cuerpo y mente'
    ],
    image: '/Curaciones.png',
    popular: false
  },
  {
    id: 4,
    title: 'Ceremonia de Ayahuasca',
    description: 'Un viaje espiritual nocturno guiado por un maestro curandero, diseñado para una profunda introspección, sanación y renacimiento interior.',
    features: [
      'Guiado por maestro curandero',
      'Conexión espiritual',
      'Sanación profunda',
      'Renacimiento interior'
    ],
    image: '/Ceremonia.png',
    popular: false
  }
];

const serviceLinks: { [key: number]: string } = {
  1: '/baño-florecimiento',
  2: '/limpieza-energias',
  3: '/curaciones-plantas',
  4: '/ceremonia-ayahuasca',
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Encabezado de página */}
      <div
        className="bg-cover bg-center text-white py-16"
        style={{ backgroundImage: 'url(/Fondo2.png)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">Ofrecemos soluciones integrales adaptadas a las necesidades de tu empresa</p>
        </div>
      </div>

      {/* Servicios detallados */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mt-1 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to={serviceLinks[service.id]}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                  >
                    Más información
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-indigo-700 text-white py-16" style={{ backgroundImage: 'url(/Fondo2.png)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">Contáctanos para discutir tus necesidades específicas y cómo podemos ayudarte</p>
          <div className="flex justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
            >
              Hablar con un asesor
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
