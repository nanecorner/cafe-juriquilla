"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "El mejor café de Juriquilla sin duda. El ambiente es perfecto para trabajar y los baristas siempre tienen excelentes recomendaciones.",
    author: "María González",
    role: "Diseñadora Freelance"
  },
  {
    quote: "Me encanta venir aquí cada mañana. El V60 es increíble y los croissants están recién horneados. Se nota la pasión en cada detalle.",
    author: "Carlos Ramírez",
    role: "Emprendedor"
  },
  {
    quote: "Un oasis en Juriquilla. La calidad del café es excepcional y el personal siempre te hace sentir bienvenido.",
    author: "Ana Martínez",
    role: "Profesora Universitaria"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-8 opacity-30" />
          
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 text-balance">
            {`"${testimonials[current].quote}"`}
          </blockquote>
          
          <div className="mb-10">
            <p className="font-medium text-lg">{testimonials[current].author}</p>
            <p className="text-primary-foreground/70 text-sm">{testimonials[current].role}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
