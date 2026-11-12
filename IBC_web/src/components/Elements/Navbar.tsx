import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ibcLogo from "../../assets/logos/Nombre-IBC-retransmision-B-1024x373.png";

  function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const pathLocation = useLocation();


    const SCROLL_THRESHOLD = 15; 

    useEffect(() => {
      lastScrollY.current = window.scrollY;

      const handleScroll = () => {
        const currentY = window.scrollY;
        const difference = currentY - lastScrollY.current;

        if (currentY <= 70) {
          setHidden(false);
          lastScrollY.current = currentY;
          return;
        }

        if (menuOpen) return;

    
        if (Math.abs(difference) > SCROLL_THRESHOLD) {
          if (difference > 0) {
            // Bajando: ocultamos
            setHidden(true);
          } else {
            // Subiendo: mostramos
            setHidden(false);
          }
        
          lastScrollY.current = currentY;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    useEffect(() => {
      setMenuOpen(false);
    }, [pathLocation]);
    
    const theme = {
      pathTrue: 'w-full',
      pathFalse: "origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
      text: 'text-sm text-white transition-colors duration-300 group-hover:text-ibc-blue'
    }

  return (
    
    <nav className={`fixed top-0 inset-x-0 z-50 transition-transform duration-500 backdrop-blur-md ${hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="ibc-navbar-shell bg-ibc-gray mx-auto flex items-center justify-between">

        <Link to="/" className="font-display text-2xl font-bold flex items-center gap-2">
          <img src={ibcLogo} alt="Iglesia Bautista Calvario" className="h-8 w-auto" />
        </Link>

        {/* Burger Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-0 shadow-lg backdrop-blur-md
          overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <div className="ibc-navbar-menu flex flex-col gap-1 bg-ibc-red-dark">
            <Link to="/conoce" className="py-2 text-lg transition-colors hover:text-ibc-blue">Conócenos</Link>
            <Link to="/recursos" className="py-2 text-lg transition-colors hover:text-ibc-blue">Recursos</Link>
            <Link to="/ministerios" className="py-2 text-lg transition-colors hover:text-ibc-blue">Ministerios</Link>
            <Link to="/involucramiento" className="py-2 text-lg transition-colors hover:text-ibc-blue">Involúcrate</Link>
            <Link to="/visita" className="py-2 text-lg transition-colors hover:text-ibc-blue">Visítanos</Link>
          </div>
        </div>
        
        {/* Menu Escritorio */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8">
            <div className="group flex flex-col w-fit">
              <Link 
                to="/conoce" 
                className={theme.text}
               >Conócenos
              </Link>
              <span className={`block h-0.5 bg-ibc-cream ${pathLocation.pathname === '/conoce' ? theme.pathTrue : theme.pathFalse}`}></span>
            </div>
            <div className="group flex flex-col w-fit">
              <Link 
                to="/recursos" 
                className={theme.text}
               >Recursos
              </Link>
              <span className={`block h-0.5 bg-ibc-cream ${pathLocation.pathname === '/recursos' ? theme.pathTrue : theme.pathFalse}`}></span>
            </div>
            <div className="group flex flex-col w-fit">
              <Link 
                to="/ministerios" 
                className={theme.text}
               >Ministerios
              </Link>
              <span className={`block h-0.5 bg-ibc-cream ${pathLocation.pathname === '/ministerios' ? theme.pathTrue : theme.pathFalse}`}></span>
            </div>
            <div className="group flex flex-col w-fit">
              <Link 
                to="/involucramiento" 
                className={theme.text}
               >Involúcrate
              </Link>
              <span className={`block h-0.5 bg-ibc-cream ${pathLocation.pathname === '/involucramiento' ? theme.pathTrue : theme.pathFalse}`}></span>
            </div>
            <div className="group flex flex-col w-fit">
              <Link 
                to="/visita" 
                className={theme.text}
               >Visítanos
              </Link>
              <span className={`block h-0.5 bg-ibc-cream ${pathLocation.pathname === '/visita' ? theme.pathTrue : theme.pathFalse}`}></span>
            </div>
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
