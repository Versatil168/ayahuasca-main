// src/components/Testimonials.tsx
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  subscribeToTestimonials, 
  addTestimonial, 
  Testimonial 
} from "../services/firebase";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    rating: 5,
  });

  // Subscribe to testimonials in real-time
  useEffect(() => {
    const unsubscribe = subscribeToTestimonials((testimonials) => {
      setTestimonials(testimonials);
    });

    return () => unsubscribe(); // Clean up subscription on component unmount
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.content) {
      alert("Por favor, complete los campos obligatorios");
      return;
    }

    setIsSubmitting(true);
    try {
      // Add testimonial to Firestore
      await addTestimonial({
        name: formData.name,
        content: formData.content,
        rating: formData.rating,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        content: "",
        rating: 5,
      });

      alert("¡Testimonio enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar testimonio:", error);
      alert("Error al enviar testimonio. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
            disabled={isSubmitting}
            className={`bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar Testimonio"}
          </button>
        </form>

        {/* Carrusel */}
        <div className="relative mt-10 overflow-hidden max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          {testimonials.length > 0 ? (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="min-w-full p-6 sm:p-10">
                    <div className="bg-white rounded-xl p-8 shadow-md text-center">
                      <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xl font-bold">
                          {t.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <h4 className="mt-4 text-xl font-bold text-gray-900">
                        {t.name}
                      </h4>
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

              {/* Botones de navegación */}
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
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">Aún no hay testimonios. ¡Sé el primero en compartir tu experiencia!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}