"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, Flame } from "lucide-react"
import Image from "next/image"

const featuredDishes = [
  {
    id: 1,
    name: "Chicken Tikka Pizza",
    description: "Tender chicken tikka with onions, peppers, and our signature sauce",
    price: 299,
    originalPrice: 349,
    image: "/chicken-tikka-pizza-with-peppers.jpg",
    rating: 4.8,
    reviews: 124,
    isVeg: false,
    spiceLevel: 2,
    badges: ["Bestseller", "Chef's Special"],
  },
  {
    id: 2,
    name: "Paneer Makhani Pizza",
    description: "Rich paneer makhani with fresh herbs and mozzarella cheese",
    price: 249,
    originalPrice: 299,
    image: "/margherita-pizza-with-fresh-basil.jpg",
    rating: 4.9,
    reviews: 89,
    isVeg: true,
    spiceLevel: 1,
    badges: ["Popular", "Vegetarian"],
  },
  {
    id: 3,
    name: "Tandoori Chicken Supreme",
    description: "Smoky tandoori chicken with capsicum and red onions",
    price: 349,
    originalPrice: 399,
    image: "/chicken-tikka-pizza-with-peppers.jpg",
    rating: 4.7,
    reviews: 156,
    isVeg: false,
    spiceLevel: 3,
    badges: ["Premium", "Spicy"],
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Featured Dishes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Most Loved Pizzas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with the finest ingredients and traditional recipes that have made us Ratlam's favorite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card
              key={dish.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {dish.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="bg-primary text-primary-foreground font-medium">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${dish.isVeg ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${dish.isVeg ? "bg-green-700" : "bg-red-700"}`}></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(dish.spiceLevel)].map((_, i) => (
                      <Flame key={i} className="w-4 h-4 text-red-500 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{dish.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({dish.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{dish.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{dish.originalPrice}</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
