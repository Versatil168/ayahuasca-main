import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const CuscoPaquete1: React.FC = () => {

  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  
      const toggleMonth = (month: string | null) => {
          setActiveMonth(activeMonth === month ? null : month);
      };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Banner */}
      <div
        className="w-full h-72 bg-cover bg-center rounded-lg mb-8 shadow-lg"
        style={{ backgroundImage: "url('/Banner5.png')" }}
      />

      <motion.h1
        className="text-4xl font-bold text-green-700 mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Valle Sagrado de los Incas - 1 día
      </motion.h1>

      <motion.p
        className="mb-4 text-lg text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Este paquete ofrece una ceremonia espiritual guiada, en un entorno natural lleno de energía y tradición.
      </motion.p>
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
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Itinerario</h2>
        <ul className="list-decimal pl-6 space-y-2 text-gray-600">
          <li><strong>4:00 p.m:</strong> Recojo de pasajeros (lugar a coordinar).</li>
          <li><strong>5:00 p.m:</strong> Llegada al templo de ceremonia.</li>
          <li><strong>5:30 p.m:</strong> Charla de orientación antes de la ceremonia.</li>
          <li><strong>6:00 p.m:</strong> Supervisión médica (medición de la presión a cargo del personal médico especializado).</li>
          <li><strong>6:30 p.m:</strong> Meditación.</li>
          <li><strong>7:00 p.m:</strong> Ceremonia de Ayahuasca.</li>
          <li><strong>8:00 a.m (día siguiente):</strong> Desayuno (no incluido en el paquete, el pago será de forma voluntaria).</li>
        </ul>
      </motion.section>

      {/* Galería de Imágenes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <img src="/Ceremonia.png" className="h-48 w-full object-cover rounded-lg shadow" alt="Ceremonia" />
        <img src="/Galeria/Foto5.jpg" className="h-48 w-full object-cover rounded-lg shadow" alt="Galería 1" />
        <img src="/Imagen1_Paquete.png" className="h-48 w-full object-cover rounded-lg shadow" alt="Galería 2" />
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
              <li>Ropa cómoda y ligera (evita ropa ajustada)</li>
              <li>Chaqueta o abrigo ligero (para la noche)</li>
              <li>Calzado cómodo (preferiblemente sin tacón)</li>
              <li>Traje de baño (si el paquete incluye actividades acuáticas)</li>
              <li>Sombrero o gorra (para protección solar durante el día)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Equipamiento</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mochila pequeña (para llevar tus pertenencias personales)</li>
              <li>Linterna (para moverte por la noche)</li>
              <li>Botella de agua reutilizable (mantente hidratado)</li>
              <li>Repelente de insectos (es importante durante la estancia en la selva)</li>
              <li>Protector solar (si el itinerario incluye actividades al aire libre)</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-gray-600 mt-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Artículos de Higiene Personal</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Artículos de tocador básicos (cepillo de dientes, pasta, etc.)</li>
              <li>Toalla de secado rápido (en caso de necesitarla)</li>
              <li>Papel higiénico (por si acaso, ya que no siempre se dispone de él)</li>
              <li>Botiquín básico (medicamentos personales, analgésicos, etc.)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Otros</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Snacks saludables (para la energía durante la experiencia)</li>
              <li>Un libro de lectura o cuaderno (para reflexiones después de la ceremonia)</li>
              <li>Un sombrero o pañuelo para cubrir la cabeza (según comodidad)</li>
              <li>Un objeto personal de meditación o espiritualidad (opcional)</li>
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
        transition={{ duration: 1 }}
      >
        <a
          href="https://wa.link/gqdggj"
          target="_blank"
          className="w-full py-3 px-4 rounded-md text-white bg-green-600 text-center font-medium hover:bg-green-700 transition duration-200"
        >
          Reservar ahora
        </a>
      </motion.section>

      {/* Botón flotante para móviles */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:hidden z-50">
        <a
          href="https://wa.link/gqdggj"
          className="block py-3 px-4 rounded-md text-white bg-green-600 text-center font-bold shadow-lg hover:bg-green-700 transition"
        >
          Reservar ahora
        </a>
      </div>
    </div>
  );
};

export default CuscoPaquete1;
