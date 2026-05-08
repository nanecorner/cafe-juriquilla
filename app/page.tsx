import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <MenuSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
