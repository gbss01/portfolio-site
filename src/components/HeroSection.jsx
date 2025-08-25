// src/components/HeroSection.jsx
"use client";  // <-- obrigatório para usar no App Router se houver interatividade
import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const heroImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg"
  ];

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Transforme suas ideias em 
            <span> sites profissionais</span>
          </h1>
          <p>
            Desenvolvimento de soluções modernas, rápidas e responsivas
            para dar vida às suas ideias.
          </p>
        </div>

        <div className="hero-images">
          {heroImages.map((img, index) => (
            <img key={index} src={img} alt={`projeto ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
