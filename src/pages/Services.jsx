import React from "react";
import { RxRadiobutton } from "react-icons/rx";
import DataLoader from "../utils/dataLoader";
import Header from "../components/Header";
function Services() {
  const services = DataLoader.getServices();
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header name="Servicios" />
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 border border-accent/20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden group">
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between bg-linear-to-br from-white to-rose-50/30">
                  <div>
                    <h3 className="text-3xl font-bold text-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-dark text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="inline-block bg-primary text-white px-6 py-3 rounded-full mb-6 shadow-md">
                      <span className="text-sm font-medium">Desde: </span>
                      <span className="text-xl font-bold">
                        {service.priceRange.min} {service.priceRange.currency}
                      </span>
                    </div>

                    {/* Features */}
                    {service.features && (
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-gray-700"
                          >
                            <RxRadiobutton className="text-accent text-xl mr-3 mt-1 " />
                            <span className="text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            className="inline-block bg-primary text-light px-10 py-4 rounded-full font-bold text-lg hover:text-accent hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            href="/contact"
          >
            Consultar ahora
          </a>
        </div>
      </section>
    </div>
  );
}
export default Services;
