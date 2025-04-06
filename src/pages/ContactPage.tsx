import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contáctanos</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
          <p className="text-gray-600">+51 960 695 965</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
            <Mail className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">rovirmu@hotmail.com </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
            <MapPin className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
          <p className="text-gray-600">asd</p>
          <p className="text-gray-600">Cusco, Perú</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Asunto del mensaje"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57378.217995202176!2d-71.93924905!3d-13.5300193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2sCusco!5e1!3m2!1sen!2spe!4v1743823248808!5m2!1sen!2spe"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Horario de Atención</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-600">Lunes - Viernes:</div>
              <div className="text-gray-900">9:00 - 18:00</div>
              <div className="text-gray-600">Sábado:</div>
              <div className="text-gray-900">10:00 - 14:00</div>
              <div className="text-gray-600">Domingo:</div>
              <div className="text-gray-900">Cerrado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
