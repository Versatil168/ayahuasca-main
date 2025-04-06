import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  interface Testimonial {
    id: number;
    name: string;
    image: string;
    content: string;
    rating: number;
  }
  

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    image: null as File | null,
    content: "",
    rating: 5,
  });
  

  // Cargar los testimonios desde el backend
  useEffect(() => {
    fetch("https://ayahuascamurayariperu.com/testimonios.php") // Reemplaza con tu dominio
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error al cargar testimonios:", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("content", formData.content);
    form.append("rating", formData.rating.toString());
    if (formData.image) {
      form.append("image", formData.image);
    }

    // Enviar nuevo testimonio al backend
    fetch("https://ayahuascamurayariperu.com/testimonios.php", {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Testimonio enviado con éxito");
          setFormData({
            name: "",
            image: null,
            content: "",
            rating: 5,
          });
          // Recargar los testimonios después de enviar el nuevo
          fetch("https://ayahuascamurayariperu.com/testimonios.php")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
        } else {
          alert("Error al enviar testimonio");
        }
      });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Opiniones de nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre lo que dicen sobre nuestros servicios
          </p>
        </div>

        {/* Formulario para nuevos testimonios */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-4">Deja tu testimonio</h3>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />

          {/* Añadido el texto y label para el campo de la imagen */}
          <label className="block mb-2 text-sm text-gray-600">Por favor subir foto suya</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full mb-2 p-2 border rounded"
          />

          <textarea
            name="content"
            placeholder="Escribe tu testimonio..."
            value={formData.content}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n} estrellas</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Enviar Testimonio
          </button>
        </form>



        {/* Carrusel */}
        <div className="relative mt-10 overflow-hidden max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-full p-6 sm:p-10">
                <div className="bg-white rounded-xl p-8 shadow-md text-center">
                  <img
                    className="h-20 w-20 sm:h-24 sm:w-24 mx-auto rounded-full object-cover"
                    src={t.image || "/default.jpg"}
                    alt={t.name}
                  />
                  <h4 className="mt-4 text-xl font-bold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500"></p>
                  <div className="mt-2 flex justify-center">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-base sm:text-lg text-gray-700 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botones */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 text-white bg-black/20 p-2 sm:p-3 rounded-full hover:bg-black/40 transition"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 text-white bg-black/20 p-2 sm:p-3 rounded-full hover:bg-black/40 transition"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
