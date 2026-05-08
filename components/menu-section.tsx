import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const menuCategories = [
  {
    title: "Café de Especialidad",
    image: "/images/coffee-cup.jpg",
    items: [
      { name: "Espresso", price: "$45" },
      { name: "Americano", price: "$55" },
      { name: "Cappuccino", price: "$65" },
      { name: "Latte", price: "$70" },
      { name: "Flat White", price: "$70" },
      { name: "V60 Pour Over", price: "$85" },
    ]
  },
  {
    title: "Bebidas Frías",
    image: "/images/cold-drinks.jpg",
    items: [
      { name: "Cold Brew", price: "$75" },
      { name: "Iced Latte", price: "$75" },
      { name: "Frappé de Café", price: "$80" },
      { name: "Matcha Latte", price: "$85" },
      { name: "Chai Latte Frío", price: "$75" },
    ]
  },
  {
    title: "Panadería Artesanal",
    image: "/images/pastries.jpg",
    items: [
      { name: "Croissant de Mantequilla", price: "$55" },
      { name: "Pan de Chocolate", price: "$60" },
      { name: "Concha Artesanal", price: "$35" },
      { name: "Rol de Canela", price: "$65" },
      { name: "Muffin del Día", price: "$50" },
    ]
  }
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">
            Nuestro Menú
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4 text-balance">
            Sabores que inspiran
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada bebida es preparada con dedicación, utilizando granos de origen único 
            tostados en nuestra propia microtostaduría.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card">
              <div className="aspect-[16/10] relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="text-foreground font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
