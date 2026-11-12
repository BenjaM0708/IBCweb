import { Link } from 'react-router-dom'
import ibcLogo from '../assets/logos/Nombre-IBC-retransmision-B-1024x373.png'

export default function Footer() {

  return (
    <footer className='w-full'>
        <div className="ibc-footer-shell bg-ibc-red-dark flex flex-col md:flex-row items-center justify-between gap-6">
    
                        {/* Logo and copyright */}
                        <div className="flex items-center gap-2">
                            <img src={ibcLogo} alt="Iglesia Bautista Calvario" className="h-7 w-auto" />
                            <span className="text-brand-light/40 text-sm ml-2">© 2026</span>
                        </div>
    
                        {/* Links */}
                        <div className="ibc-footer-links flex items-center gap-6">
                            <Link to="/terms" className="text-sm font-light text-white hover:text-ibc-cream transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link to="/privacy" className="text-sm font-light text-white hover:text-ibc-cream transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
    
        </div>
    </footer>
  )
}
