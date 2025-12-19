import React from "react";

export default function Header({ name }) {
  return (
    <>
      <header className="relative bg-light overflow-hidden rounded-b-3xl shadow-md mb-12">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-light rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-fade-in">
            <h1 className="text-5xl md:text-7xl text-dark font-bold mb-4 tracking-tight">
              {name}
            </h1>
            <div className="h-1 w-40 bg-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </header>
    </>
  );
}
