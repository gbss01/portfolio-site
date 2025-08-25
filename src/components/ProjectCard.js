import React from "react";
import './ProjectCard.css';

export default function ProjectCard({ project, title, description }) {
  // Se veio um objeto project, pega dele, se não, usa title/description direto
  const cardTitle = project?.title || title;
  const cardDesc = project?.description || description;

  return (
    <div className="project-card">
      <h3>{cardTitle}</h3>
      {/* dangerouslySetInnerHTML permite usar <span> dentro da string */}
      <p dangerouslySetInnerHTML={{ __html: cardDesc }} />
      <div className="contact-section">
        <h4>Entre em contato:</h4>
        <p>WhatsApp: (19) 98712-8846</p>
        <p>Email: gabriel.r.santos2015@gmail.com</p>
        <p>LinkedIn: <a href="linkedin.com/in/gabriel-ribeiro-dos-santos-470702133" target="_blank" rel="noopener noreferrer">gabriel</a></p>
        <p>GitHub: <a href="https://github.com/gbss01" target="_blank" rel="noopener noreferrer">gbss01</a></p>
      </div>
    </div>
  );
}
