import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Flame, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Manually define the featured dishes with all properties the component uses
const featuredDishes = [
  {
    id: 1,
    name: "Special Cheese Burst Pizza",
    description: "Onion, Capsicum, Sweet Corn, Red Paprika, Tandoori Sauce, Cheese, Black Olive, Paneer Masale Me",
    price: "₹202.50",
    image: "/pizza/special-cheese-burst-pizza.jpg",
    rating: 4.8,
    cookTime: "15-20 min",
    spiceLevel: "Medium",
    popular: true,
    vegetarian: true,
  },
  {
    id: 3,
    name: "Paneer Tikka Pizza",
    description: "Fresh paneer tikka with capsicum, onions, and special tikka sauce on a thin crust.",
    price: "₹202.50",
    image: "/pizza/paneer-tikka-pizza.jpg",
    rating: 4.7,
    cookTime: "12-15 min",
    spiceLevel: "Mild",
    popular: true,
    vegetarian: true,
  },
  {
    id: 9,
    name: "Punjabi Tadka Pizza [Medium]",
    description: "Onion, Capsicum, Tandoori Sauce, Cheese, Red Paprika, Garlic Sauce",
    price: "₹135",
    image: "/pizza/punjabi-tadka-pizza.jpg",
    rating: 4.9,
    cookTime: "10-12 min",
    spiceLevel: "Hot",
    popular: true,
    vegetarian: true,
  },
];

const getSpiceIcon = (level?: string) => {
  switch (level) {
    case "Hot":
      return <Flame className="w-3 h-3 text-red-500 dark:text-red-400" />;
    case "Medium":
      return <Flame className="w-3 h-3 text-orange-500 dark:text-orange-400" />;
    case "Mild":
      return <Flame className="w-3 h-3 text-yellow-500 dark:text-yellow-400" />;
    default:
      return null;
  }
};

export function FeaturedDishes() {
  return (
    <section className="py-16 bg-card dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground dark:text-white mb-4">
            Our Signature Pizzas
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Handcrafted with the finest ingredients and authentic Indian spices. Each pizza tells a story of tradition
            and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-background dark:bg-gray-800 border-none">
              <div className="relative w-full h-48">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {dish.popular && (
                  <div className="absolute top-3 left-3 z-10 bg-primary dark:bg-orange-400 text-primary-foreground dark:text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 z-10 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 dark:bg-gray-800/90">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-foreground dark:text-white">{dish.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-xl mb-2 text-foreground dark:text-white">{dish.name}</h3>
                <p className="text-muted-foreground dark:text-gray-400 text-sm mb-4 line-clamp-2">{dish.description}</p>

                <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{dish.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getSpiceIcon(dish.spiceLevel)}
                    <span>{dish.spiceLevel}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-primary dark:text-orange-400">{dish.price}</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 dark:bg-orange-400 dark:hover:bg-orange-500">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400/10"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}