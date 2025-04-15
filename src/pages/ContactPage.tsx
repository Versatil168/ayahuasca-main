import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton'; // Adjust the path as necessary


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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Segunda Ubicación */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ubicación Cuzco</h2>
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
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
        </div>

        {/* Segunda Ubicación en otro lugar */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ubicación Iquitos</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1094.2746440862045!2d-73.25054736331124!3d-3.73096171077987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea689d39f22e55%3A0xe6a0546ed1a0a02a!2sAwkipuma%20Healing%20Center%20-%20Ayahuasca%20Retreat%20in%20Peru!5e1!3m2!1sen!2spe!4v1744261645811!5m2!1sen!2spe"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bloque del Horario de Atención centrado debajo de las ubicaciones */}
      <div className="flex justify-center mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Horario de Atención</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="text-gray-600">Lunes - Sábado:</div>
            <div className="text-gray-900">7:00 - 19:00</div>
            <div className="text-gray-600">Domingo:</div>
            <div className="text-gray-900">7:00 - 14:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
