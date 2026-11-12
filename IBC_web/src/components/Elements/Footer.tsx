import { Link } from 'react-router-dom'
import ibcLogo from '../../assets/logos/Nombre-IBC-retransmision-B-1024x373.png'

export default function Footer() {

  return (
    
    <footer className="w-full">
        <div className="ibc-footer-shell flex flex-col items-center justify-center gap-5 bg-ibc-red-dark md:flex-row md:justify-between md:gap-6">

            {/* Logo and copyright */}
            <div className="flex items-center gap-2">
                <img
                    src={ibcLogo}
                    alt="Iglesia Bautista Calvario"
                    className="h-7 w-auto"
                />
                <span className="ml-2 text-xs text-white sm:text-sm">
                    © 2026
                </span>
            </div>

            {/* Links */}
            <div className="ibc-footer-links flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-6">
                <Link
                    to="/terms"
                    className="text-xs font-light text-white transition-colors hover:text-ibc-cream sm:text-sm"
                >
                    Terms & Conditions
                </Link>

                <Link
                    to="/privacy"
                    className="text-xs font-light text-white transition-colors hover:text-ibc-cream sm:text-sm"
                >
                    Privacy Policy
                </Link>
            </div>

        </div>
    </footer>

  )
}
