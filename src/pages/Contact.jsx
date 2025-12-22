import { useState } from "react";
import DataLoader from "../utils/dataLoader";
import { BiPhone, BiSolidBuildingHouse, BiMailSend } from "react-icons/bi";

import Header from "../components/Header";

function Contact() {
  const contactInfo = DataLoader.getContactInfo(); //contact info is an object
  console.log(contactInfo);
  const address = contactInfo.address;
  const phone = contactInfo.phoneNumbers;
  const email = contactInfo.emails;
  const serviceList = DataLoader.getServices();

  const formInitialData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInitialData);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://webhook.site/08e5e06b-c09c-48ac-b800-69340288d3c2",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: formData }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (err) {
      setError("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

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
              {loading && <p className="text-dark mb-4">Enviando...</p>}
              <div className="space-y-6">
                <div>
                  <input
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre y apellido"
                    required
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
                    required
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
                    required
                    maxLength={9}
                  />
                </div>

                <div>
                  <select
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-full hover:border-accent focus:border-accent focus:outline-none transition-all duration-300 bg-white cursor-pointer"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Seleccione un servicio
                    </option>
                    {serviceList.map((service, index) => (
                      <option key={index} value={service.title} required>
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
              {error && (
                <p className="text-red-500 mt-4 font-medium">{error}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
