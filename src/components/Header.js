import Image from "next/image";
import Link from "next/link";
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/"> {/* sempre volta pro topo */}
          <Image src="/logo.png" alt="Logo" width={120} height={120} />
        </Link>
      </div>

      <nav className="nav">
        <a href="#hero">Home</a>        {/* vai para a seção do topo */}
        <a href="#contact">Contato</a>  {/* vai para a seção de contato */}
      </nav>
    </header>
  );
}
