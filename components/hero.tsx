import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="Interior de Café Juriquilla"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-secondary/80 uppercase tracking-[0.3em] text-sm mb-4">
          Juriquilla, Querétaro
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-card mb-6 text-balance">
          Café Juriquilla
        </h1>
        <p className="text-secondary/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Donde cada taza cuenta una historia. Café de especialidad tostado con pasión,
          en el corazón de Juriquilla.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 px-8 py-6 text-base"
          >
            <a href="#menu">Ver Menú</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
