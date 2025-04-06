import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "¿Qué es la Ayahuasca?",
    description:
      "La ayahuasca es una bebida psicodélica utilizada en rituales chamánicos en la Amazonía.",
    image: "/Ayahuasca_Bebida.png",
  },
  {
    id: 2,
    name: "¿Qué tipo de visiones observas con la Ayahuasca?",
    description:
      "Las visiones pueden incluir formas geométricas, animales espirituales y recuerdos profundos.",
    image: "/Visiones.png",
  },
  {
    id: 3,
    name: "¿Cómo debo prepararme para una ceremonia de ayahuasca?",
    description:
      "Debes seguir una dieta especial, evitar el alcohol y preparar tu mente con intención.",
    image: "/Sesion.png",
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Datos Curiosos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            "Infórmate sobre Ayahuasca"
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col h-full"
            >
              {/* Imagen del producto */}
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenedor de contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>

                {selectedProduct === product.id && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-md flex-grow">
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                )}

                <div className="mt-auto">
                  <button
                    onClick={() =>
                      setSelectedProduct(
                        selectedProduct === product.id ? null : product.id
                      )
                    }
                    className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                  >
                    {selectedProduct === product.id
                      ? "Ocultar Detalles"
                      : "Ver Detalles"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
