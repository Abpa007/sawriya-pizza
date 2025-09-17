import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sawariya-restaurent-front-image.png"
          alt="Sanwariya Pizza storefront"
          layout="fill"
          objectFit="cover"
          quality={80} // Optimized quality
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-1 mb-4">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="ml-2 text-sm opacity-90">Rated #1 in Ratlam</span>
        </div>

        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
          Authentic Indian Pizzas
          <span className="block text-primary dark:text-orange-400">Made with Love</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
          Experience the perfect fusion of traditional Indian flavors and classic Italian pizza. Family recipes passed
          down through generations, served fresh daily.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/menu" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg dark:bg-orange-400 dark:hover:bg-orange-500">
              View Our Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/menu" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              Order Online
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary dark:text-orange-400 mb-2">25+</div>
            <div className="text-sm opacity-80">Pizza Varieties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary dark:text-orange-400 mb-2">15</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary dark:text-orange-400 mb-2">1000+</div>
            <div className="text-sm opacity-80">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}