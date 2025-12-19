import React from "react";
import DataLoader from "../utils/dataLoader";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const appData = DataLoader.getContactInfo();
  const socialMedia = appData.socialMedia;
  const iconsMap = {
    FaFacebookF: FaFacebookF,
    FaTwitter: FaTwitter,
    FaInstagram: FaInstagram,
    FaWhatsapp: FaWhatsapp,
  };

  console.log(socialMedia);
return (
    <footer className="mt-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-light mb-4">
              MarAtelier
            </h3>
            <p className="text-light leading-relaxed">
              Máxima calidad en confección a medida. Diseños exclusivos que reflejan tu estilo único.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-light hover:text-accent transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/services" className="text-light hover:text-accent transition-colors duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/about" className="text-light hover:text-accent transition-colors duration-200">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light hover:text-accent transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Síguenos</h4>
            <div className="flex gap-3">

              <FaFacebookF
                size={24}
                className="text-light hover:text-accent transition-colors duration-200 cursor-pointer"
              />
              <FaTwitter
                size={24}
                className="text-light hover:text-accent transition-colors duration-200 cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="text-light hover:text-accent transition-colors duration-200 cursor-pointer"
              />
              <FaWhatsapp
                size={24}
                className="text-light hover:text-accent transition-colors duration-200 cursor-pointer"
              />
             
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light opacity-30 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light text-sm">
            &copy; {new Date().getFullYear()} MarAtelier. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-light hover:text-accent transition-colors duration-200">
              Privacidad
            </a>
            <a href="/terms" className="text-light hover:text-accent transition-colors duration-200">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
