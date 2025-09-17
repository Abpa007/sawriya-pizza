import { HeroSection } from "@/components/sections/HomePage/hero-section"
import { FeaturedDishes } from "@/components/sections/HomePage/featured-dishes"
import { TestimonialsSection } from "@/components/sections/HomePage/testimonials-section"
import { SpecialOffers } from "@/components/sections/HomePage/special-offers"
import { LocationContact } from "@/components/sections/HomePage/location-contact"
// import { Navigation } from "@/components/sections/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Page() {
  return (
    <>
      {/* <Navigation navLinks={navLinks} totalItems={2} isLoggedIn={false} /> */}

      <main className="min-h-screen">
        <HeroSection />
        <FeaturedDishes />
        <SpecialOffers />
        <TestimonialsSection />
        <LocationContact />

        {/* Final Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience the Best Pizza in Ratlam?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Sanwariya Pizza their favorite dining destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call to Order
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
