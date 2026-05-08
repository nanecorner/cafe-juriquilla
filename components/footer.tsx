import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-semibold text-card mb-4 block">
              Café Juriquilla
            </Link>
            <p className="text-secondary/70 max-w-md leading-relaxed">
              Café de especialidad en el corazón de Juriquilla. Tostado con pasión, 
              servido con amor. Tu nuevo lugar favorito te espera.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-card mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-secondary/70 hover:text-card transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-secondary/70 hover:text-card transition-colors text-sm">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-secondary/70 hover:text-card transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-secondary/70 hover:text-card transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-card mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-card" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-card" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/50 text-sm">
            © 2024 Café Juriquilla. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-secondary/50 hover:text-card transition-colors text-sm">
              Privacidad
            </Link>
            <Link href="#" className="text-secondary/50 hover:text-card transition-colors text-sm">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
