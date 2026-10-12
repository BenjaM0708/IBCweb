import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <footer className='w-full'>
        <div className="ibc-footer-shell bg-red-d flex flex-col md:flex-row items-center justify-between gap-6">
    
                        {/* Logo and copyright */}
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center">
                                <img src="" alt="IBC logo" className="h-5 w-auto" />
                            </div>
                            <span className="font-display text-brand-light font-semibold">IBC</span>
                            <span className="text-brand-light/40 text-sm ml-2">© 2026</span>
                        </div>
    
                        {/* Links */}
                        <div className="ibc-footer-links flex items-center gap-6">
                            <Link to="/terms" className="text-brand-light text-sm hover:text-brand-light/40 transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link to="/privacy" className="text-brand-light text-sm hover:text-black/90 transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
    
        </div>
    </footer>
  )
}
