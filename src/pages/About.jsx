import React from "react";
import Header from "../components/Header";
import DataLoader from "../utils/dataLoader";
function About() {
  const aboutInfo = DataLoader.getAboutInfo();
  return (
    <>
      <Header name="Nosotros" />
      <section className="max-w-6xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-10">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-dark border-l-4 border-primary pl-4">
                Nuestra Historia
              </h3>
              <p className="text-base text-dark leading-7">
                {aboutInfo.history}
              </p>
            </div>

            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-dark border-l-4 border-primary pl-4">
                Misión y Visión
              </h3>
              <div className="space-y-4">
                <p className="text-base text-dark leading-7">
                  {aboutInfo.mission}
                </p>
                <p className="text-base text-dark leading-7">
                  {aboutInfo.vision}
                </p>
              </div>
            </div>

            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4 text-dark border-l-4 border-primary pl-4">
                Valores
              </h3>
              <p className="text-base text-dark leading-7">
                {aboutInfo.values}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group">
            {aboutInfo.image_url && (
              <div className="sticky top-8 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={aboutInfo.image_url}
                  alt="About Us"
                  className="w-full h-auto rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
