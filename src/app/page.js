import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      {/* Seção do topo */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Card de apresentação + contato dentro do mesmo card */}
      <section id="contact">
        <ProjectCard
          title="Olá, sou Gabriel Ribeiro"
          description="Sou estudante de Engenharia de Software e desenvolvedor, focado em criar <span>websites profissionais</span> e <span>aplicativos Android</span>. Estou sempre me aprimorando para entregar projetos modernos, eficientes e com design de qualidade."
        />
      </section>
    </main>
  );
}
