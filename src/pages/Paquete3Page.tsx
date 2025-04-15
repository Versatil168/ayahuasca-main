import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Paquete3Page = () => {
    const [activeMonth, setActiveMonth] = useState<string | null>(null);

    const toggleMonth = (month: string | null) => {
        setActiveMonth(activeMonth === month ? null : month);
    };
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero Banner */}
            <div
                className="w-full h-72 bg-cover bg-center rounded-lg mb-8 shadow-lg"
                style={{ backgroundImage: "url('/Banner4.png')" }}
            />

            <motion.h1
                className="text-4xl font-bold text-green-700 mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Retiro de Ayahuasca - 4 días y 3 noches
            </motion.h1>

            <motion.p
                className="mb-4 text-lg text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Un retiro profundo y transformador para reconectar contigo mismo, sanar y explorar tu consciencia.
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
                                <strong>Conexión Profunda con tu Interior:</strong> La ayahuasca facilita una introspección profunda, ayudándote a comprender tus emociones, deseos y miedos más profundos.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Sanación Emocional y Física:</strong> Durante el retiro, experimentas un proceso de purificación y sanación, liberando bloqueos emocionales y físicos.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Apoyo Espiritual y Guiado:</strong> Contamos con chamanes experimentados y guías espirituales para acompañarte a lo largo del viaje, garantizando una experiencia segura y enriquecedora.
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
                        <li><strong>4:00 pm:</strong> Charla de orientación con los participantes antes de la ceremonia.</li>
                        <li><strong>6:00 pm:</strong> Tiempo libre para descansar y prepararse mentalmente.</li>
                        <li><strong>8:00 pm:</strong> Primera ceremonia de ayahuasca.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 2</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno ligero para recuperarse de la ceremonia nocturna.</li>
                        <li><strong>10:00 am:</strong> Caminata guiada de integración con conexión a la naturaleza.</li>
                        <li><strong>1:00 pm:</strong> Almuerzo comunitario y descanso.</li>
                        <li><strong>4:00 pm:</strong> Círculo de conversación con los guías.</li>
                        <li><strong>8:00 pm:</strong> Segunda ceremonia de ayahuasca.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 3</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno e integración de la experiencia.</li>
                        <li><strong>11:00 am:</strong> Actividad opcional de meditación o descanso.</li>
                        <li><strong>1:00 pm:</strong> Almuerzo ligero y tiempo personal.</li>
                        <li><strong>4:00 pm:</strong> Preparación para la última ceremonia.</li>
                        <li><strong>8:00 pm:</strong> Tercera ceremonia de ayahuasca.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 4</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno grupal y círculo de cierre.</li>
                        <li><strong>11:00 am:</strong> Palabras finales de los chamanes y despedida.</li>
                        <li><strong>12:00 pm:</strong> Retorno a Iquitos.</li>
                    </ul>
                </motion.section>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <img src="/P4.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                    <img src="/P8.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                    <img src="/P2.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                </div>


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
                        Fechas disponibles para los retiros de Ayahuasca (4 días y 3 noches) - 2025
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
                                                <li>Del 17 de abril al 20 de abril de 2025</li>
                                                <li>Del 24 de abril al 27 de abril de 2025</li>
                                                <li>Del 28 de abril al 1 de mayo de 2025</li>
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
                                                <li>Del 5 de mayo al 8 de mayo de 2025</li>
                                                <li>Del 13 de mayo al 16 de mayo de 2025</li>
                                                <li>Del 20 de mayo al 23 de mayo de 2025</li>
                                                <li>Del 28 de mayo al 31 de mayo de 2025</li>
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
                                                <li>Del 4 de junio al 7 de junio de 2025</li>
                                                <li>Del 10 de junio al 13 de junio de 2025</li>
                                                <li>Del 12 de junio al 15 de junio de 2025</li>
                                                <li>Del 20 de junio al 23 de junio de 2025</li>
                                                <li>Del 27 de junio al 30 de junio de 2025</li>
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
                                                <li>Del 2 de julio al 5 de julio de 2025</li>
                                                <li>Del 8 de julio al 11 de julio de 2025</li>
                                                <li>Del 17 de julio al 20 de julio de 2025</li>
                                                <li>Del 24 de julio al 27 de julio de 2025</li>
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
                                                <li>Del 4 de agosto al 7 de agosto de 2025</li>
                                                <li>Del 12 de agosto al 15 de agosto de 2025</li>
                                                <li>Del 17 de agosto al 20 de agosto de 2025</li>
                                                <li>Del 27 de agosto al 30 de agosto de 2025</li>
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
                                                <li>Del 3 de septiembre al 6 de septiembre de 2025</li>
                                                <li>Del 10 de septiembre al 13 de septiembre de 2025</li>
                                                <li>Del 17 de septiembre al 20 de septiembre de 2025</li>
                                                <li>Del 22 de septiembre al 25 de septiembre de 2025</li>
                                                <li>Del 26 de septiembre al 29 de septiembre de 2025</li>
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
                                                <li>Del 3 de octubre al 6 de octubre de 2025</li>
                                                <li>Del 8 de octubre al 11 de octubre de 2025</li>
                                                <li>Del 16 de octubre al 19 de octubre de 2025</li>
                                                <li>Del 23 de octubre al 26 de octubre de 2025</li>
                                                <li>Del 29 de octubre al 1 de noviembre de 2025</li>
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
                                                <li>Del 6 de noviembre al 9 de noviembre de 2025</li>
                                                <li>Del 13 de noviembre al 16 de noviembre de 2025</li>
                                                <li>Del 20 de noviembre al 23 de noviembre de 2025</li>
                                                <li>Del 27 de noviembre al 30 de noviembre de 2025</li>
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
                                                <li>Del 4 de diciembre al 7 de diciembre de 2025</li>
                                                <li>Del 10 de diciembre al 13 de diciembre de 2025</li>
                                                <li>Del 17 de diciembre al 20 de diciembre de 2025</li>
                                                <li>Del 27 de diciembre al 30 de diciembre de 2025</li>
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

export default Paquete3Page;
