import React from "react";
import DataLoader from "../utils/dataLoader";
import { BiStar, BiSolidStar } from "react-icons/bi";
function Hero() {
  const services = DataLoader.getServices();
  const testimonials = DataLoader.getTestimonials();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <div className="text-center pt-20 pb-16 px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
            Bienvenidos a{" "}
            <span className="bg-accent bg-clip-text text-transparent">
              Mar<span>Atelier</span>
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Máxima calidad en confección a medida. Diseños exclusivos que
            reflejan tu estilo único.
          </p>
          <a
            href="https://wa.me/34600123456"
            className="inline-block mt-8 bg-primary text-light px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:text-accent transition-all duration-300"
          >
            Agenda tu cita
          </a>
        </div>
      </div>

      {/* Services Preview */}
      <div className="border border-accent m-2"></div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
          Nuestros Servicios Destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-8 ">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="group bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:accent transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent to-transparent opacity-0 group-hover:accent transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-dark leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="border border-accent m-2"></div>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
          Testimonios de Clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 BG-SE">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <BiSolidStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-dark italic mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-bold text-dark text-lg">
                  {testimonial.name}
                </h3>
                <span className="text-dark text-sm">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
