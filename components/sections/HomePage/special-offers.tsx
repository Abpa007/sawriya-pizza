import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, Percent } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Tuesday Special",
    description: "Buy One Get One Free on all Medium Pizzas",
    discount: "50% OFF",
    validUntil: "Every Tuesday",
    icon: Gift,
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Family Combo",
    description: "2 Large Pizzas + Garlic Bread + 2 Drinks",
    discount: "₹799 Only",
    validUntil: "Limited Time",
    icon: Percent,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Happy Hours",
    description: "20% off on all orders between 2-5 PM",
    discount: "20% OFF",
    validUntil: "Daily 2-5 PM",
    icon: Clock,
    color: "bg-purple-500",
  },
]

export function SpecialOffers() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-primary font-semibold">
            Special Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Delicious Deals Await</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save more while enjoying your favorite pizzas with our exclusive offers and combos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const IconComponent = offer.icon
            return (
              <Card
                key={offer.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`${offer.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    <IconComponent className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <div className="text-2xl font-bold">{offer.discount}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-card-foreground mb-4 leading-relaxed">{offer.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Valid: {offer.validUntil}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Grab Offer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
