import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="max-w-5xl w-full px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen del jefe */}
        <div className="flex-shrink-0">
          <img
            src="/Jefe.png"
            alt="Chamán de la empresa"
            className="w-72 md:w-80 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Descripción */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-900">
            Roger Vicente Murayari Rodríguez
          </h3>

          {/* Etiqueta de cargo */}
          <span className="mt-2 inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
            Chamán
          </span>

          <p className="text-lg text-gray-600 mt-3">
            Roger Murayari es un maestro curandero y palero, hijo de uno de los más
            renombrados maestros ayahuasqueros y paleros de la selva amazónica peruana.
            Nació en 1974 en el centro poblado de Tamshiyacu, ubicado al margen izquierdo
            del río Amazonas, y desde muy niño aprendió de la medicina ancestral de sus
            padres, abuelos y bisabuelos. Su vida espiritual proviene de un linaje de
            maestros ayahuasqueros y curanderos. Adquirió los conocimientos y técnicas de
            curación de sus padres, consolidando así un legado de curanderos y paleros.
            Además, obtuvo la energía curativa a través de dietas con plantas medicinales
            como lupuna, mariri caspi, caupuri, raya casha, cumaceba, chuchuazi, catahuas,
            ayahumas, chinta pijuayo, entre otras.
          </p>

          {/* Botón para ir a AboutPage */}
          <button
            onClick={() => {
              navigate("/sobre-nosotros");
              window.scrollTo(0, 0);
            }}
            className="mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Conocer más
          </button>
        </div>
      </div>
    </section>
  );
}
