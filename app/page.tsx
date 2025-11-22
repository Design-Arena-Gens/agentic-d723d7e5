'use client';

import { Clock, Package, CreditCard, MapPin, Phone, Store, Zap } from 'lucide-react';

export default function Home() {
  const services = [
    { icon: Store, title: 'Fondas & Restaurantes', desc: 'Tu comida favorita directo a tu hogar' },
    { icon: Package, title: 'Tiendas & Mercados', desc: 'Despensa y productos del día' },
    { icon: Zap, title: 'Farmacias', desc: 'Medicamentos cuando los necesites' },
    { icon: Store, title: 'Ferreterías', desc: 'Herramientas y materiales' },
  ];

  const features = [
    { icon: Clock, title: 'Disponible 24/7', desc: 'Servicio las 24 horas, todos los días' },
    { icon: CreditCard, title: 'Efectivo o Transferencia', desc: 'Paga como prefieras' },
    { icon: MapPin, title: 'Cobertura Regional', desc: 'Zaragoza, Puebla y municipios cercanos' },
    { icon: Phone, title: 'Atención Personalizada', desc: 'Contacto directo por WhatsApp' },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/522331252947', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⚜️</div>
            <div>
              <h1 className="text-2xl font-bold text-purple-700">MAYIN EXPRESS</h1>
              <p className="text-xs text-gray-600">Una empresa de GRUPO MAYIN</p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-6">
            🚀 Tu aliado en Zaragoza, Puebla
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Entregas a Domicilio
            <span className="text-purple-600"> 24/7</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Lo que necesites, de cualquier local o tienda, hasta la puerta de tu casa.
            <br />
            Sin importar la hora. Rápido, confiable y pensado para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Hacer un Pedido
            </button>
            <a
              href="#servicios"
              className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 transition-all"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegir MAYIN EXPRESS?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-amber-50"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">
          📦 ¿Qué entregamos?
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Compramos y entregamos de cualquier local en la región
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-purple-100 hover:border-purple-300"
            >
              <div className="bg-gradient-to-br from-purple-600 to-amber-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Contáctanos</h4>
              <p className="text-purple-100">
                Mándanos un mensaje por WhatsApp al 233 125 2947
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Dinos qué necesitas</h4>
              <p className="text-purple-100">
                Cuéntanos qué producto quieres y de dónde
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Recibe en tu casa</h4>
              <p className="text-purple-100">
                Lo llevamos hasta tu puerta, rápido y seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para tu primera entrega?
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Estamos disponibles 24/7 para atenderte
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            <Phone className="w-6 h-6" />
            Contactar por WhatsApp
          </button>
          <p className="mt-6 text-gray-700 font-semibold">
            📱 233 125 2947
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <span className="text-2xl">⚜️</span>
                <h4 className="text-xl font-bold">MAYIN EXPRESS</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Una empresa de GRUPO MAYIN
              </p>
              <p className="text-gray-400 text-sm">
                Tu mejor aliado en Zaragoza, Puebla
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Contáctanos:</p>
              <p className="text-xl font-semibold">📱 233 125 2947</p>
              <p className="text-gray-400 text-sm mt-2">
                Efectivo y Transferencias
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 GRUPO MAYIN. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
