import { FiScissors } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";

import DataLoader from "../utils/dataLoader";
function Navbar() {
  const routeList = DataLoader.getRoutes();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 bg-primary border-b border-primary shadow-md px-4 py-3 rounded-full">
        {/*Container */}
        <div className="flex grid-cols-2 justify-between items-center">
          {/*Logo */}
          <Link to="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center rounded-full bg-accent p-2">
            <FiScissors size={24} className="text-primary" />

          </span>
            <h1 className="text-xl font-elegant font-semibold text-light">
              <span className="font-elegant ">Mar</span>Atelier
            </h1>
          </Link>

          {/*DESKTOP NAVIGATION */}
          <div className="hidden md:flex space-x-6">
            <div className="flex justify-center space-x-4">
              {routeList.map((route, index) => {
                if (route.name === "Home") return null;
                return (
                  <Link
                    key={index}
                    to={route.path}
                    className="text-light hover:text-accent  px-3 py-2 text-sm font-medium relative group transition-colors duration-200"
                  >
                    {route.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/*MOBILE NAVIGATION */}
          {/*Menu */}

          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMobileOpen ? <BiX size={24} /> : <BiMenu size={24} />}
            </button>
            {isMobileOpen && (
              <div className="flex flex-col p-4 space-y-4 bg-white shadow-md">
                {routeList.map((route, index) => {
                  if (route.name === "Home") return null;
                  return (
                    <Link
                      key={index}
                      to={route.path}
                      className="text-gray hover:text-primary block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      {route.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
