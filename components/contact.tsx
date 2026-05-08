import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">
              Visítanos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Te esperamos en Juriquilla
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Estamos ubicados en el corazón de Juriquilla, a solo unos minutos 
              del centro comercial y las principales plazas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Dirección</p>
                  <p className="text-muted-foreground text-sm">
                    Blvd. Juriquilla 3000, Local 15<br />
                    Juriquilla, Querétaro 76226
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Teléfono</p>
                  <p className="text-muted-foreground text-sm">+52 442 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">hola@cafejuriquilla.mx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Horario</p>
                  <p className="text-muted-foreground text-sm">
                    Lun - Vie: 7:00 AM - 10:00 PM<br />
                    Sáb - Dom: 8:00 AM - 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <p className="text-muted-foreground text-sm">@cafejuriquilla</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14917.943857391725!2d-100.45!3d20.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sJuriquilla%2C%20Quer%C3%A9taro!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Café Juriquilla"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
