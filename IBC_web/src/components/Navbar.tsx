import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathLocation = useLocation();

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      if (currentY <= 70) {
        setHidden(false);
      } else {
        // Si el menú móvil está abierto, no escondemos el navbar
        setHidden(scrollingDown && !menuOpen);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]); // Añadido menuOpen como dependencia para pausar la ocultación si está desplegado

  useEffect(() => {
    setMenuOpen(false);
  }, [pathLocation]);

  return (
    /* CAMBIO AQUÍ: Se usa '-translate-y-full' para esconderlo hacia ARRIBA */
    <nav className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 backdrop-blur-md ${hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="ibc-navbar-shell bg-red-m mx-auto flex items-center justify-between">

        <Link to="/" className="font-display text-2xl font-bold flex items-center gap-2">
          <img src='' alt="logo" className="h-8 w-auto"/>
        </Link>

        {/* Menú Desplegable Móvil (Funciona perfecto porque hereda el contexto del contenedor fixed) */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-0 shadow-lg backdrop-blur-md
          overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="ibc-navbar-menu flex flex-col gap-1 text-white bg-gray-d">
            <Link to="/conoce" className="py-2 text-base transition-colors hover:text-black">Conócenos</Link>
            <Link to="/recursos" className="py-2 text-base transition-colors hover:text-black">Recursos</Link>
            <Link to="/ministerios" className="py-2 text-base transition-colors hover:text-black">Ministerios</Link>
            <Link to="/involucramiento" className="py-2 text-base transition-colors hover:text-black">Involúcrate</Link>
            <Link to="/visita" className="py-2 text-base transition-colors hover:text-black">Visítanos</Link>
          </div>
        </div>
        
        {/* Menu Escritorio */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8 text-black">
            <Link to="/conoce" className={`text-sm transition-colors text-gray-l hover:text-black`}>Conócenos</Link>
            <Link to="/recursos" className={`text-sm transition-colors text-gray-l hover:text-black`}>Recursos</Link>
            <Link to="/ministerios" className={`text-sm transition-colors text-gray-l hover:text-black`}>Ministerios</Link>
            <Link to='/involucramiento' className={`text-sm transition-colors text-gray-l hover:text-black`}>Involúcrate</Link>
            <Link to="/visita" className={`text-sm transition-colors text-gray-l hover:text-black`}>Visítanos</Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 h-9 w-9 grid place-items-center rounded-full transition-colors hover:cursor-pointer hover:bg-red-d/30`}>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
