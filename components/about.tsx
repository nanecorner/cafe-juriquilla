import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/barista.jpg"
                alt="Barista preparando café"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Pasión por el café desde 2018
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Café Juriquilla nació del sueño de crear un espacio donde la comunidad pudiera 
                disfrutar del mejor café de especialidad en un ambiente cálido y acogedor.
              </p>
              <p>
                Trabajamos directamente con productores de Chiapas, Oaxaca y Veracruz, 
                seleccionando los mejores granos que tostamos semanalmente en pequeños 
                lotes para garantizar la máxima frescura.
              </p>
              <p>
                Nuestros baristas están certificados y apasionados por compartir 
                el arte del café de especialidad con cada visitante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-4xl font-medium text-foreground">6+</p>
                <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-foreground">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Orígenes de café</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-foreground">5k+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
