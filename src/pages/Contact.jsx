import React, { useState } from "react";
import DataLoader from "../utils/dataLoader";
import { BsHouse } from "react-icons/bs";
import {
  BiPhone,
  BiSolidBuildingHouse,
  BiMessageAltDetail,
  BiMailSend,
} from "react-icons/bi";
import Header from "../components/Header";

function Contact() {
  const contactInfo = DataLoader.getContactInfo(); //contact info is an object
  console.log(contactInfo);
  const address = contactInfo.address;
  const phone = contactInfo.phoneNumbers;
  const email = contactInfo.emails;
const serviceList = DataLoader.getServices();

  const formData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Formulario enviado!");
  }

  return (
    <div>
      <Header name="Contacto" />
      {/*Info */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl font-bold text-dark mb-8">Ubicanos en :</h1>

            {address && (
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 p-6 bg-light rounded-2xl shadow-md hover:shadow-xl">
                  <BiSolidBuildingHouse
                    className="inline-block mr-2 text-primary"
                    size={24}
                  />
                  <div className="w-full text-dark">
                    <p className="text-lg">{address.city}</p>
                    <p className="text-lg">{address.street}</p>
                    <p className="text-lg">{address.zip}</p>
                  </div>
                </div>
              </div>
            )}
            {phone && phone.length > 0 && (
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="p-6 bg-light rounded-2xl shadow-md hover:shadow-xl ">
                  <div className="flex items-start gap-4">
                    <BiPhone className="text-primary mt-1" size={32} />
                    <div className="w-full">
                      {phone.map((number, index) => (
                        <a
                          key={index}
                          href={`tel:${number.number}`}
                          className="block text-lg text-dark hover:text-accent transition-colors mb-2 font-medium"
                        >
                          {number.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {email && email.length > 0 && (
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="p-6 bg-light rounded-2xl shadow-md hover:shadow-xl ">
                  <div className="flex items-start gap-4">
                    <BiMailSend className="text-primary mt-1" size={32} />
                    <div className="w-full text-dark">
                      {email.map((emailAddress, index) => (
                        <a
                          key={index}
                          href={`mailto:${emailAddress.address}`}
                          className="block text-lg text-dark hover:text-accent transition-colors mb-2 font-medium"
                        >
                          {emailAddress.address}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Form  */}

          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold mb-2 text-dark">Formulario</h2>
            <div className="border-l-inherit border-accent mb-8 w-20"></div>

            <div className="bg-light rounded-2xl p-8 border border-gray-200 shadow-md">
              <div className="space-y-6">
                <div>
                  <input
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre y apellido"
                  />
                </div>

                <div>
                  <input
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                  />
                </div>

                <div>
                  <input
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                  />
                </div>

                <div>
                  <select
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300 bg-white cursor-pointer"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Seleccione un servicio
                    </option>
                    {serviceList.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-dark block mb-3 font-medium text-lg"
                  >
                    Mensaje:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-2xl hover:border-accent focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-primary font-bold text-light px-8 py-4 rounded-full hover:shadow-xl hover:text-accent transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
