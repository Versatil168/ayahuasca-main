// src/pages/PackagesPage.tsx
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: 'Retiro de Ayahuasca - 2 días y 1 noche en la selva amazónica',
        price: '200',
        period: 'persona',
        description: 'Una experiencia espiritual guiada para una conexión profunda.',
        features: [
            '1 ceremonia de Ayahuasca guiada por un chamán',
            'Alojamiento en habitaciones cómodas con mosquitero y baño',
            'Desayuno y almuerzo vegetariano para mejor preparación',
            'Preparación previa, orientación y seguimiento después de la ceremonia',
            'Beneficios: conexión interna, sanación emocional y equilibrio físico'
        ],
        buttonText: 'Más información',
        popular: false
    },
    {
        name: 'Retiro de Ayahuasca - 3 días y 2 noches en la selva amazónica',
        price: '300',
        period: 'persona',
        description: 'Un retiro más profundo para una purificación espiritual.',
        features: [
            '2 ceremonias de Ayahuasca con chamanes experimentados',
            'Dieta vegetariana para optimizar la experiencia',
            'Preparación previa y orientación posterior',
            'Entorno seguro en la selva de Iquitos con posibilidad de exploración',
            'Beneficios: purificación espiritual profunda y mayor conexión con la planta'
        ],
        buttonText: 'Más información',
        popular: true
    },
    {
        name: 'Retiro de Ayahuasca - 4 días y 3 noches en la selva amazónica',
        price: '400',
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
        buttonText: 'Más información',
        popular: false
    }
];

const packageLinks: { [key: string]: string } = {
    'Retiro de Ayahuasca - 2 días y 1 noche en la selva amazónica': '/paquete-1',
    'Retiro de Ayahuasca - 3 días y 2 noches en la selva amazónica': '/paquete-2',
    'Retiro de Ayahuasca - 4 días y 3 noches en la selva amazónica': '/paquete-3',
};

const cuzcoLinks: { [key: string]: string } = {
    'Valle sagrado de los incas - 1 día': '/cusco-paquete-1',
};



const cuzcoPlans = [
    {
        name: 'Valle sagrado de los incas - 1 día',
        price: '150',
        period: 'persona',
        description: 'Ceremonia espiritual guiada en el Valle Sagrado de los Incas.',
        features: [
            'Recojo de pasajeros en punto a coordinar',
            'Acceso al templo ceremonial',
            'Charla de orientación antes de la ceremonia',
            'Supervisión médica a cargo de personal especializado',
            'Sesión de meditación guiada',
            'Participación en la ceremonia de Ayahuasca',
            'Opción de desayuno al finalizar (pago voluntario)'
        ],
        buttonText: 'Más información',
        popular: true
    }
];




const PackagesPage: React.FC = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Sección Paquetes Cuzco */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Paquetes Cuzco</h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        Explora lo mejor del legado inca y la majestuosidad de Machu Picchu
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {cuzcoPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${plan.popular ? 'ring-2 ring-yellow-500 relative' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 bg-yellow-500 text-white text-center py-2 text-sm font-semibold">
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
                                    <Link
                                        to={cuzcoLinks[plan.name]}
                                        className={`block text-center w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${plan.popular ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                                    >
                                        {plan.buttonText}
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección Paquetes Selva */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Paquetes Selva</h2>
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
                                    <Link
                                        to={packageLinks[plan.name]}
                                        className={`block text-center w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};


export default PackagesPage;