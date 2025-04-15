import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Paquete2Page = () => {
    const [activeMonth, setActiveMonth] = useState<string | null>(null);

    const toggleMonth = (month: string | null) => {
        setActiveMonth(activeMonth === month ? null : month);
    };
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero Banner */}
            <div
                className="w-full h-72 bg-cover bg-center rounded-lg mb-8 shadow-lg"
                style={{ backgroundImage: "url('/Banner3.png')" }}
            />

            <motion.h1
                className="text-4xl font-bold text-green-700 mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Retiro de Ayahuasca - 3 días y 2 noches
            </motion.h1>

            <motion.p
                className="mb-4 text-lg text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Una experiencia espiritual guiada para una conexión profunda.
            </motion.p>

            <div className="space-y-8">
                {/* Beneficios */}
                <motion.section
                    className="bg-green-50 p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Beneficios del Retiro</h2>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Conexión Profunda con tu Interior:</strong> Aprovecha la oportunidad para explorar tu ser interior y obtener claridad sobre tus deseos, miedos y objetivos de vida. La ayahuasca, conocida por sus propiedades visionarias, te ayudará a desbloquear nuevas perspectivas y descubrir tu verdadero yo.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Sanación Emocional y Física:</strong> El retiro te ofrece una experiencia de desintoxicación y purificación. La ayahuasca facilita el proceso de limpieza emocional y física, permitiéndote liberar cargas del pasado y restaurar el equilibrio interno.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Apoyo durante tu estancia y Seguridad:</strong> Nuestros chamanes y guías espirituales están altamente capacitados y comprometidos con tu bienestar. Te acompañarán durante cada paso del viaje, asegurando que tu experiencia sea segura, significativa y enriquecedora.
                            </span>
                        </li>
                    </ul>
                </motion.section>

                {/* Itinerario */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Itinerario</h2>

                    <h3 className="text-xl font-medium text-gray-700">Día 1</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>10:00 am:</strong> Recojo de sus respectivos hoteles y traslado a través del Río Amazonas.</li>
                        <li><strong>12:00 pm:</strong> Llegada a la comunidad de Tamshiyacu y reunión de bienvenida con los chamanes.</li>
                        <li><strong>1:00 pm:</strong> Almuerzo con los participantes.</li>
                        <li><strong>3:00 pm:</strong> Bienvenida al Centro Ayahuasca Murayari y presentación del lugar.</li>
                        <li><strong>4:00 pm:</strong> Charla de orientación con los participantes previa antes de la ceremonia de ayahuasca.</li>
                        <li><strong>6:00 pm:</strong> Tiempo libre para descansar y prepararse mentalmente.</li>
                        <li><strong>8:00 pm:</strong> Primera ceremonia de ayahuasca.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 2</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno ligero para recuperarse de la ceremonia nocturna.</li>
                        <li><strong>10:00 am:</strong> Caminata de integración con conexión a la naturaleza.</li>
                        <li><strong>1:00 pm:</strong> Almuerzo comunitario y descanso.</li>
                        <li><strong>4:00 pm:</strong> Círculo de conversación y preparación emocional.</li>
                        <li><strong>8:00 pm:</strong> Segunda ceremonia de ayahuasca.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 3</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno grupal e integración final.</li>
                        <li><strong>11:00 am:</strong> Palabras de cierre por los guías y despedida.</li>
                        <li><strong>12:00 pm:</strong> Retorno a Iquitos.</li>
                    </ul>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        <img src="/P8.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                        <img src="/P5.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                        <img src="/P3.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                    </div>
                </motion.section>

                {/* Cosas que debes traer */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Cosas que debes traer</h2>

                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Ropa</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Ropa cómoda y ligera</li>
                                <li>Chaqueta o abrigo para la noche</li>
                                <li>Sandalias y calzado cerrado</li>
                                <li>Traje de baño</li>
                                <li>Sombrero o gorra</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Equipamiento</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Mochila pequeña</li>
                                <li>Linterna con pilas</li>
                                <li>Botella de agua</li>
                                <li>Repelente para insectos</li>
                                <li>Bloqueador solar</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-gray-600 mt-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Artículos de Higiene Personal</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Jabón y shampoo biodegradables</li>
                                <li>Toalla ligera</li>
                                <li>Papel higiénico</li>
                                <li>Medicinas personales</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Otros</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Snacks naturales</li>
                                <li>Cuaderno de notas</li>
                                <li>Objetos personales significativos</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-green-50 p-6 rounded-lg shadow-md mt-10"
                >
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">
                        Fechas disponibles para los retiros de Ayahuasca (3 días y 2 noches) - 2025
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        {/* Tabla de Fechas */}
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Mes</th>
                                    <th className="py-2 px-4 border-b text-left">Fechas Disponibles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Abril */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("abril")}>
                                    <td className="py-2 px-4 border-b">ABRIL 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "abril" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 17 de abril al 19 de abril de 2025</li>
                                                <li>Del 24 de abril al 26 de abril de 2025</li>
                                                <li>Del 28 de abril al 30 de abril de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Mayo */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("mayo")}>
                                    <td className="py-2 px-4 border-b">MAYO 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "mayo" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 5 de mayo al 7 de mayo de 2025</li>
                                                <li>Del 13 de mayo al 15 de mayo de 2025</li>
                                                <li>Del 20 de mayo al 22 de mayo de 2025</li>
                                                <li>Del 28 de mayo al 30 de mayo de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Junio */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("junio")}>
                                    <td className="py-2 px-4 border-b">JUNIO 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "junio" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 04 de junio al 06 de junio de 2025</li>
                                                <li>Del 10 de junio al 12 de junio de 2025</li>
                                                <li>Del 13 de junio al 15 de junio de 2025</li>
                                                <li>Del 20 de junio al 22 de junio de 2025</li>
                                                <li>Del 27 de junio al 29 de junio de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Julio */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("julio")}>
                                    <td className="py-2 px-4 border-b">JULIO 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "julio" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 2 de julio al 4 de julio de 2025</li>
                                                <li>Del 8 de julio al 10 de julio de 2025</li>
                                                <li>Del 17 de julio al 19 de julio de 2025</li>
                                                <li>Del 24 de julio al 26 de julio de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Agosto */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("agosto")}>
                                    <td className="py-2 px-4 border-b">AGOSTO 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "agosto" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 4 de agosto al 6 de agosto de 2025</li>
                                                <li>Del 12 de agosto al 14 de agosto de 2025</li>
                                                <li>Del 17 de agosto al 19 de agosto de 2025</li>
                                                <li>Del 27 de agosto al 29 de agosto de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Septiembre */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("septiembre")}>
                                    <td className="py-2 px-4 border-b">SEPTIEMBRE 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "septiembre" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 3 de septiembre al 5 de septiembre de 2025</li>
                                                <li>Del 10 de septiembre al 12 de septiembre de 2025</li>
                                                <li>Del 17 de septiembre al 19 de septiembre de 2025</li>
                                                <li>Del 22 de septiembre al 24 de septiembre de 2025</li>
                                                <li>Del 26 de septiembre al 28 de septiembre de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Octubre */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("octubre")}>
                                    <td className="py-2 px-4 border-b">OCTUBRE 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "octubre" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 3 de octubre al 5 de octubre de 2025</li>
                                                <li>Del 8 de octubre al 10 de octubre de 2025</li>
                                                <li>Del 16 de octubre al 18 de octubre de 2025</li>
                                                <li>Del 23 de octubre al 25 de octubre de 2025</li>
                                                <li>Del 29 de octubre al 31 de octubre de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Noviembre */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("noviembre")}>
                                    <td className="py-2 px-4 border-b">NOVIEMBRE 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "noviembre" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 6 de noviembre al 8 de noviembre de 2025</li>
                                                <li>Del 13 de noviembre al 15 de noviembre de 2025</li>
                                                <li>Del 20 de noviembre al 22 de noviembre de 2025</li>
                                                <li>Del 27 de noviembre al 29 de noviembre de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                                {/* Diciembre */}
                                <tr className="cursor-pointer" onClick={() => toggleMonth("diciembre")}>
                                    <td className="py-2 px-4 border-b">DICIEMBRE 2025</td>
                                    <td className="py-2 px-4 border-b">Reservas Abiertas</td>
                                </tr>
                                {activeMonth === "diciembre" && (
                                    <tr>
                                        <td colSpan={2} className="py-2 px-4">
                                            <ul className="list-disc pl-6">
                                                <li>Del 4 de diciembre al 6 de diciembre de 2025</li>
                                                <li>Del 10 de diciembre al 12 de diciembre de 2025</li>
                                                <li>Del 17 de diciembre al 19 de diciembre de 2025</li>
                                                <li>Del 27 de diciembre al 29 de diciembre de 2025</li>
                                            </ul>

                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Botón principal */}
                <motion.section
                    className="mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                >
                    <a
                        href="https://wa.link/7aezt3"
                        target="_blank"
                        className="w-full py-3 px-4 rounded-md text-white bg-green-600 text-center font-medium hover:bg-green-700 transition duration-200"
                    >
                        Reservar ahora
                    </a>
                </motion.section>
            </div>

            {/* Botón flotante para móviles */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:hidden z-50">
                <a
                    href="https://wa.link/7aezt3"
                    className="block py-3 px-4 rounded-md text-white bg-green-600 text-center font-bold shadow-lg hover:bg-green-700 transition"
                >
                    Reservar ahora
                </a>
            </div>
        </div>
    );
};

export default Paquete2Page;
