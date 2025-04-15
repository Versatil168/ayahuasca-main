import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Paquete1Page = () => {
    const [activeMonth, setActiveMonth] = useState<string | null>(null);

    const toggleMonth = (month: string | null) => {
        setActiveMonth(activeMonth === month ? null : month);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero Banner */}
            <div
                className="w-full h-72 bg-cover bg-center rounded-lg mb-8 shadow-lg"
                style={{ backgroundImage: "url('/Banner1.png')" }}
            />

            <motion.h1
                className="text-4xl font-bold text-green-700 mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Retiro de Ayahuasca - 2 días y 1 noche
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
                                <strong>Conexión Profunda con tu Interior:</strong> Explora tu ser interior, desbloquea nuevas perspectivas y descubre tu verdadero yo.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Sanación Emocional y Física:</strong> Libera cargas del pasado y restaura el equilibrio con la ayuda de la ayahuasca.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <BsCheckCircle className="text-green-500 mt-1" />
                            <span>
                                <strong>Apoyo durante tu estancia y Seguridad:</strong> Chamanes experimentados te acompañarán para una experiencia segura y significativa.
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
                        <li><strong>10:00 am:</strong> Recojo de hoteles y traslado por el Río Amazonas.</li>
                        <li><strong>12:00 pm:</strong> Llegada a Tamshiyacu y bienvenida con los chamanes.</li>
                        <li><strong>1:00 pm:</strong> Almuerzo con los participantes.</li>
                        <li><strong>3:00 pm:</strong> Llegada al Centro Ayahuasca Murayari.</li>
                        <li><strong>4:00 pm:</strong> Charla de orientación antes de la ceremonia.</li>
                        <li><strong>6:00 pm:</strong> Tiempo libre para descansar y prepararse.</li>
                        <li><strong>8:00 pm:</strong> Primera ceremonia de ayahuasca.</li>
                    </ul>
                    <h3 className="text-xl font-medium text-gray-700 mt-6">Día 2</h3>
                    <ul className="list-decimal pl-6 space-y-1 text-gray-600">
                        <li><strong>9:00 am:</strong> Desayuno grupal.</li>
                        <li><strong>10:00 am:</strong> Conversación e integración de la experiencia.</li>
                        <li><strong>12:00 pm:</strong> Finalización del retiro.</li>
                    </ul>
                </motion.section>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <img src="/P1.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                    <img src="/P7.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
                    <img src="/P3.PNG" className="h-48 w-full object-cover rounded-lg shadow" />
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
                                <li>Ropa ligera y transpirable</li>
                                <li>Chaqueta o abrigo ligero</li>
                                <li>Calzado cómodo y resistente</li>
                                <li>Traje de baño</li>
                                <li>Sombrero o gorra</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Equipamiento</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Mochila de día</li>
                                <li>Linterna de mano o frontal</li>
                                <li>Botella de agua reutilizable</li>
                                <li>Repelente de insectos</li>
                                <li>Protector solar</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-gray-600 mt-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Artículos de Higiene Personal</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Artículos de tocador</li>
                                <li>Toalla de secado rápido</li>
                                <li>Papel higiénico</li>
                                <li>Botiquín básico</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Otros</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Snacks saludables</li>
                                <li>Cámara fotográfica</li>
                                <li>Un libro de lectura</li>
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
                        Fechas disponibles para los retiros de Ayahuasca (2 días y 1 noche) - 2025
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
                                                <li>Del 17 de abril al 18 de abril</li>
                                                <li>Del 18 de abril al 19 de abril</li>
                                                <li>Del 24 de abril al 25 de abril</li>
                                                <li>Del 25 de abril al 26 de abril</li>
                                                <li>Del 28 de abril al 29 de abril</li>
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
                                                <li>Del 5 de mayo al 6 de mayo</li>
                                                <li>Del 13 de mayo al 14 de mayo</li>
                                                <li>Del 20 de mayo al 21 de mayo</li>
                                                <li>Del 14 de mayo al 15 de mayo</li>
                                                <li>Del 28 de mayo al 29 de mayo</li>
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
                                                <li>Del 3 de junio al 4 de junio</li>
                                                <li>Del 10 de junio al 11 de junio</li>
                                                <li>Del 17 de junio al 18 de junio</li>
                                                <li>Del 27 de junio al 28 de junio</li>
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
                                                <li>Del 2 de julio al 3 de julio</li>
                                                <li>Del 8 de julio al 9 de julio</li>
                                                <li>Del 17 de julio al 18 de julio</li>
                                                <li>Del 24 de julio al 25 de julio</li>
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
                                                <li>Del 4 de agosto al 5 de agosto</li>
                                                <li>Del 12 de agosto al 13 de agosto</li>
                                                <li>Del 17 de agosto al 18 de agosto</li>
                                                <li>Del 27 de agosto al 28 de agosto</li>
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
                                                <li>Del 3 de septiembre al 4 de septiembre</li>
                                                <li>Del 10 de septiembre al 11 de septiembre</li>
                                                <li>Del 17 de septiembre al 18 de septiembre</li>
                                                <li>Del 22 de septiembre al 23 de septiembre</li>
                                                <li>Del 26 de septiembre al 27 de septiembre</li>
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
                                                <li>Del 3 de octubre al 4 de octubre</li>
                                                <li>Del 8 de octubre al 9 de octubre</li>
                                                <li>Del 16 de octubre al 17 de octubre</li>
                                                <li>Del 23 de octubre al 24 de octubre</li>
                                                <li>Del 29 de octubre al 30 de octubre</li>
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
                                                <li>Del 6 de noviembre al 7 de noviembre</li>
                                                <li>Del 13 de noviembre al 14 de noviembre</li>
                                                <li>Del 20 de noviembre al 21 de noviembre</li>
                                                <li>Del 22 de noviembre al 23 de noviembre</li>
                                                <li>Del 27 de noviembre al 28 de noviembre</li>
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
                                                <li>Del 4 de diciembre al 5 de diciembre</li>
                                                <li>Del 10 de diciembre al 11 de diciembre</li>
                                                <li>Del 17 de diciembre al 18 de diciembre</li>
                                                <li>Del 22 de diciembre al 23 de diciembre</li>
                                                <li>Del 27 de diciembre al 28 de diciembre</li>
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

export default Paquete1Page;
