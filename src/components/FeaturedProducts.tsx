import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "¿Qué es la Ayahuasca?",
    description: `La ayahuasca es una bebida ancestral usada por pueblos indígenas de la Amazonía (Perú, Brasil, Colombia, Ecuador) con fines espirituales, medicinales y rituales. Hoy también se usa para terapias y autoexploración.
  
  Está hecha de dos plantas:
  - *Banisteriopsis caapi* (una liana con IMAOs).
  - *Psychotria viridis* (una hoja con DMT, alucinógeno).
  
  Efectos comunes: visiones intensas, emociones profundas, recuerdos, introspección y vómitos o diarrea (la “purga”), parte del proceso de limpieza.
  
  ---
  
  **Significado espiritual y cultural**
  
  En quechua, "ayahuasca" puede traducirse como "liana de los espíritus" o "liana de la muerte" ("aya" = espíritu o muerto, "huasca" = liana).
  
  Se usa en ceremonias guiadas por chamanes o curanderos, quienes consideran que la planta permite entrar en contacto con otras dimensiones, espíritus, y obtener conocimiento o guía.
  
  ---
  
  **En la actualidad**
  
  Fuera del contexto tradicional, la ayahuasca ha ganado popularidad en el mundo occidental como herramienta de exploración espiritual, sanación psicológica (como en casos de depresión, ansiedad o trauma) y crecimiento personal. Sin embargo, su uso debe hacerse con cuidado, respeto y preferiblemente en contextos guiados por personas con experiencia.`,
    image: "/Ayahuasca_Bebida.png"
  }
  ,
  {
    id: 2,
    name: "¿Qué tipo de visiones observas con la Ayahuasca?",
    description: `Las visiones con ayahuasca varían según la persona, pero hay patrones comunes:

1. Formas geométricas: patrones coloridos en movimiento.
2. Naturaleza: selva, animales (serpientes, jaguares), ríos, plantas.
3. Seres espirituales: guías, ancestros o la “madre ayahuasca”.
4. Recuerdos personales: traumas, infancia, emociones profundas.
5. Escenarios místicos: galaxias, templos, dimensiones irreales.
6. Transformaciones: sentirse como planta, animal o energía; morir y renacer simbólicamente.`,
    image: "/Visiones.png",
  },
  {
    id: 3,
    name: "¿Cómo debo prepararme para una ceremonia de ayahuasca?",
    description: `La preparación para una ceremonia de ayahuasca debe ser física, mental, emocional y espiritual.

1. Intención: Reflexiona sobre lo que quieres sanar o entender.

2. Dieta: Al menos 7 días antes, evita carne, alcohol, café, lácteos, comida procesada y actividad sexual. Consume frutas, verduras y agua pura.

3. Mente y emociones: Medita, respira, escribe tus emociones y evita contenidos negativos.

4. Espíritu: Conéctate contigo y la naturaleza, escucha música medicina, reza o camina en silencio.

5. Guía: Asegúrate de participar con un facilitador con experiencia y buenas referencias.

6. Durante: Confía en el proceso, no resistas las emociones y mantén presente tu intención.

7. Después: Descansa, integra lo vivido escribiendo o conversando, y cuida de ti en los días posteriores.`,
    image: "/Sesion.png",
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Datos Curiosos
          </h2>
          <p className="mt-4 text-xl text-gray-500">"Infórmate sobre Ayahuasca"</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {selectedProduct === product.id && (
                  <div className="mt-2 mb-4 bg-gray-100 rounded-md p-4 overflow-y-auto max-h-60 text-sm whitespace-pre-line text-gray-800">
                    {product.description}
                  </div>
                )}

                {/* Botón */}
                <button
                  onClick={() =>
                    setSelectedProduct(
                      selectedProduct === product.id ? null : product.id
                    )
                  }
                  className="mt-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                >
                  {selectedProduct === product.id
                    ? "Ocultar Detalles"
                    : "Ver Detalles"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
