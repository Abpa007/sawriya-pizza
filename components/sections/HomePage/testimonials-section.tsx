"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Ratlam",
    rating: 5,
    comment:
      "The best pizza in town! The fusion of Indian spices with Italian base is absolutely divine. My family's favorite weekend treat.",
    avatar: "/indian-woman-smiling.png",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Ratlam",
    rating: 5,
    comment:
      "Sanwariya Pizza has been our go-to place for celebrations. The quality is consistent and the taste is unmatched. Highly recommended!",
    avatar: "/indian-man-smiling.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ratlam",
    rating: 5,
    comment:
      "Love the vegetarian options! The paneer makhani pizza is my absolute favorite. Fresh ingredients and amazing flavors every time.",
    avatar: "/indian-woman-happy.jpg",
    date: "3 weeks ago",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who keep coming back for more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.comment}"</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">4.8/5 Average Rating</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
