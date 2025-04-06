import React, { useState } from 'react';

// Datos simulados para la galería
const galleryImages = [
  {
    id: 1,
    src: '/Galeria/Foto1.jpg',
    category: 'preparación',
    title: 'Recolección'
  },
  {
    id: 2,
    src: '/Galeria/Foto2.jpg',
    category: 'convivencia',
    title: 'Clientes Contentos 1'
  },
  {
    id: 3,
    src: '/Galeria/Foto3.jpg',
    category: 'ceremonia',
    title: 'Ceremonia 1'
  },
  {
    id: 4,
    src: '/Galeria/Foto4.jpg',
    category: 'ceremonia',
    title: 'Ceremonia 2'
  },
  {
    id: 5,
    src: '/Galeria/Foto5.jpg',
    category: 'ceremonia',
    title: 'Ceremonia 3'
  },
  {
    id: 6,
    src: '/Galeria/Foto6.jpg',
    category: 'ceremonia',
    title: 'Ceremonia 4'
  },
  {
    id: 7,
    src: '/Galeria/Foto7.jpg',
    category: 'convivencia',
    title: 'Clientes Contentos 2'
  },
  {
    id: 8,
    src: '/Galeria/Foto8.jpg',
    category: 'ceremonia',
    title: 'Ceremonia de Curación 1'
  },
  {
    id: 9,
    src: '/Galeria/Foto9.jpg',
    category: 'ceremonia',
    title: 'Ceremonia de Curación 2'
  },
  {
    id: 10,
    src: '/Galeria/Foto10.jpg',
    category: 'ceremonia',
    title: 'Ceremonia de Curación 3'
  },
  {
    id: 11,
    src: '/Galeria/Foto11.jpg',
    category: 'convivencia',
    title: 'Grabaciones'
  },
  {
    id: 12,
    src: '/Galeria/Foto12.jpg',
    category: 'convivencia',
    title: 'Noche de Convivencia'
  },
  {
    id: 13,
    src: '/Galeria/Foto13.jpg',
    category: 'convivencia',
    title: 'Clientes Contentos 2'
  },
  {
    id: 14,
    src: '/Galeria/Foto14.jpg',
    category: 'ceremonia',
    title: 'Reunión'
  },
  {
    id: 15,
    src: '/Galeria/Foto15.jpg',
    category: 'ceremonia',
    title: 'Reunión'
  },
  {
    id: 16,
    src: '/Galeria/Foto16.jpg',
    category: 'ceremonia',
    title: 'Ceremonia de Ejemplo'
  },
  {
    id: 17,
    src: '/Galeria/Foto17.jpg',
    category: 'convivencia',
    title: 'Evento 1'
  },
  {
    id: 18,
    src: '/Galeria/Foto18.jpg',
    category: 'convivencia',
    title: 'Evento 2'
  },
  {
    id: 19,
    src: '/Galeria/Foto19.jpg',
    category: 'convivencia',
    title: 'Evento 3'
  },
  {
    id: 20,
    src: '/Galeria/Foto20.jpg',
    category: 'preparación',
    title: 'Preparados 1'
  },
  {
    id: 21,
    src: '/Galeria/Foto21.jpg',
    category: 'preparación',
    title: 'Preparados 2'
  },
  {
    id: 22,
    src: '/Galeria/Foto22.jpg',
    category: 'preparación',
    title: 'Preparados 3'
  },
  {
    id: 23,
    src: '/Galeria/Foto23.jpg',
    category: 'preparación',
    title: 'Preparados 4'
  },
  {
    id: 24,
    src: '/Galeria/Foto24.jpg',
    category: 'preparación',
    title: 'Preparados 5'
  },
  {
    id: 25,
    src: '/Galeria/Foto25.jpg',
    category: 'preparación',
    title: 'Preparados 6'
  },
  {
    id: 26,
    src: '/Galeria/Foto26.jpg',
    category: 'preparación',
    title: 'Preparados 7'
  },
  {
    id: 27,
    src: '/Galeria/Foto27.jpg',
    category: 'preparación',
    title: 'Preparados 8'
  },
  {
    id: 28,
    src: '/Galeria/Foto28.jpg',
    category: 'preparación',
    title: 'Preparados 9'
  },
  {
    id: 29,
    src: '/Galeria/Foto29.jpg',
    category: 'preparación',
    title: 'Preparados 10'
  },
  {
    id: 30,
    src: '/Galeria/Foto30.jpg',
    category: 'baños',
    title: 'Baños 1'
  },
  {
    id: 31,
    src: '/Galeria/Foto31.jpg',
    category: 'baños',
    title: 'Baños 2'
  },
  {
    id: 32,
    src: '/Galeria/Foto32.jpg',
    category: 'baños',
    title: 'Baños 2'
  },
  {
    id: 33,
    src: '/Galeria/Foto33.jpg',
    category: 'baños',
    title: 'Baños 3'
  },


];

// Categorías únicas para el filtro
const categories = ['todos', 'baños', 'preparación', 'ceremonia', 'convivencia'];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar imágenes por categoría
  const filteredImages = selectedCategory === 'todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const currentImage = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Galería</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Explora nuestra colección de imágenes destacadas
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex flex-wrap justify-center bg-white rounded-lg shadow-sm p-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-1 text-sm font-medium rounded-md transition-colors ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleImageClick(image.id)}
          >
            <div className="relative h-48">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
              <p className="text-sm text-gray-500 capitalize">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar imagen expandida */}
      {isModalOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;