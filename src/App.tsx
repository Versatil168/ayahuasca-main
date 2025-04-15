import { Routes, Route } from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton';
import Translator from './components/Translator';

// Layouts
import MainLayout from './layouts/MainLayout';

// Páginas
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import PackagesPage from './pages/PackagesPage';

// Servicios específicos
import BañoFlorecimiento from './pages/BañoFlorecimiento';
import LimpiezaEnergias from './pages/LimpiezaEnergias';
import CuracionesPlantas from './pages/CuracionesPlantas';
import CeremoniaAyahuasca from './pages/CeremoniaAyahuasca';

// Paquetes específicos
import Paquete1Page from './pages/Paquete1Page';
import Paquete2Page from './pages/Paquete2Page';
import Paquete3Page from './pages/Paquete3Page';
import CuscoPaquete1 from './pages/CuscoPaquete1';

function App() {
  return (
    <>
      {/* Componente de traducción (invisible) */}
      <Translator />

      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/sobre-nosotros" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/resenas" element={<MainLayout><ReviewsPage /></MainLayout>} />
        <Route path="/galeria" element={<MainLayout><GalleryPage /></MainLayout>} />
        <Route path="/servicios" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/paquetes" element={<MainLayout><PackagesPage /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/reservar" element={<MainLayout><BookingPage /></MainLayout>} />
        <Route path="/baño-florecimiento" element={<MainLayout><BañoFlorecimiento /></MainLayout>} />
        <Route path="/limpieza-energias" element={<MainLayout><LimpiezaEnergias /></MainLayout>} />
        <Route path="/curaciones-plantas" element={<MainLayout><CuracionesPlantas /></MainLayout>} />
        <Route path="/ceremonia-ayahuasca" element={<MainLayout><CeremoniaAyahuasca /></MainLayout>} />
        <Route path="/paquete-1" element={<MainLayout><Paquete1Page /></MainLayout>} />
        <Route path="/paquete-2" element={<MainLayout><Paquete2Page /></MainLayout>} />
        <Route path="/paquete-3" element={<MainLayout><Paquete3Page /></MainLayout>} />
        <Route path="/cusco-paquete-1" element={<MainLayout><CuscoPaquete1 /></MainLayout>} />
        <Route path="*" element={
          <MainLayout>
            <div className="flex flex-col items-center justify-center py-20">
              <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
              <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
              <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
              <a href="/" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Volver al inicio
              </a>
            </div>
          </MainLayout>
        } />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;
