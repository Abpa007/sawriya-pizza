import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sawariya-restaurent-front-image.png"
          alt="Sanwariya Pizza storefront"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/20 rounded-2xl py-12">
        <div className="flex items-center justify-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-3 text-sm font-medium bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
            Rated #1 in Ratlam
          </span>
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance leading-tight text-white drop-shadow-lg">
          Authentic Indian Pizzas
          <span className="block text-primary drop-shadow-lg">Made with Love</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-pretty max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
          Experience the perfect fusion of traditional Indian flavors and classic Italian pizza. Family recipes passed
          down through generations, served fresh daily.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            View Our Menu
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground px-10 py-4 text-lg font-semibold bg-black/60 backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300"
          >
            Order Online
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { number: "25+", label: "Pizza Varieties" },
            { number: "15", label: "Years Experience" },
            { number: "1000+", label: "Happy Customers" },
          ].map((stat, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
