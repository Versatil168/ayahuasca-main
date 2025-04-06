// src/pages/ServicesPage.tsx
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

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



// Datos para planes de precios
const pricingPlans = [
  {
    name: 'Retiro de Ayahuasca - 2 días y 1 noche',
    price: '250',
    period: 'persona',
    description: 'Una experiencia espiritual guiada para una conexión profunda.',
    features: [
      '1 ceremonia de Ayahuasca guiada por un chamán',
      'Alojamiento en habitaciones cómodas con mosquitero y baño',
      'Desayuno y almuerzo vegetariano para mejor preparación',
      'Preparación previa, orientación y seguimiento después de la ceremonia',
      'Beneficios: conexión interna, sanación emocional y equilibrio físico'
    ],
    buttonText: 'Reservar ahora',
    popular: false
  },
  {
    name: 'Retiro de Ayahuasca - 3 días y 2 noches',
    price: '350',
    period: 'persona',
    description: 'Un retiro más profundo para una purificación espiritual.',
    features: [
      '2 ceremonias de Ayahuasca con chamanes experimentados',
      'Dieta vegetariana para optimizar la experiencia',
      'Preparación previa y orientación posterior',
      'Entorno seguro en la selva de Iquitos con posibilidad de exploración',
      'Beneficios: purificación espiritual profunda y mayor conexión con la planta'
    ],
    buttonText: 'Reservar ahora',
    popular: true
  },
  {
    name: 'Retiro de Ayahuasca - 4 días y 3 noches',
    price: '450',
    period: 'persona',
    description: 'Una transformación completa con conexión espiritual y naturaleza.',
    features: [
      '3 ceremonias de Ayahuasca con guía chamánica',
      'Alojamiento en habitaciones individuales en un entorno natural',
      'Alimentación basada en ingredientes locales y naturales',
      'Charlas previas, reuniones grupales, caminatas en la selva y baños energéticos',
      'Facilitadores y traductor oficial chamánico',
      'Beneficios: transformación profunda, integración espiritual y conexión con la naturaleza'
    ],
    buttonText: 'Reservar ahora',
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

      {/* Planes de precios */}
      <div id="pricing" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Paquetes</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${plan.popular ? 'ring-2 ring-green-600 relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 bg-green-600 text-white text-center py-2 text-sm font-semibold">
                    Más popular
                  </div>
                )}
                <div className={`px-6 py-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 text-center">{plan.name}</h3>
                  <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold">${plan.price}</span>
                    <span className="text-xl font-medium text-gray-500 self-end mb-1">/{plan.period}</span>
                  </div>
                  <p className="mt-4 text-gray-500 text-center">{plan.description}</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-600 mt-1 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button
                      type="button"
                      className={`w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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