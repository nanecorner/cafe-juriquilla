import { Coffee, Leaf, Clock, Wifi } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Café de Origen",
    description: "Granos selectos de las mejores regiones cafetaleras de México, tostados semanalmente."
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Leches vegetales caseras y jarabes naturales preparados diariamente."
  },
  {
    icon: Clock,
    title: "Horario Extendido",
    description: "Abiertos de 7:00 AM a 10:00 PM. Tu espacio de trabajo y descanso."
  },
  {
    icon: Wifi,
    title: "WiFi de Alta Velocidad",
    description: "Conexión rápida y estable para trabajar o estudiar con tu café favorito."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
