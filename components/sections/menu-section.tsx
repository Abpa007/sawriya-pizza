// // components/sections/menu-section.tsx
// import { MenuCard } from "@/components/menu-card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { fetchFeaturedItems } from "@/lib/api"; // Assuming a new utility function

// // This component will be a server component, so no "use client"
// export async function MenuSection(products: any) {
//   try {
//     // Fetch only featured products using a new API function
//     const featuredProducts = await fetchFeaturedItems();

//     return (
//       <section className="py-16 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12 relative">
//             <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-primary/20 dark:text-orange-300/20 font-serif">Taste</span>
//             <h2 className="font-playfair font-bold text-3xl md:text-5xl text-foreground dark:text-white mb-3 relative">
//               Our Delicious Menu
//               <span className="block h-1 w-24 bg-primary dark:bg-orange-400 mx-auto mt-3"></span>
//             </h2>
//             <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
//               Explore our carefully crafted selection of authentic Indian
//               pizzas, appetizers, and more.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//             {featuredProducts.map((product: any) => (
//               <MenuCard key={product._id} product={product} />
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Link href="/menu">
//               <Button
//                 size="lg"
//                 className="bg-primary dark:bg-orange-400 hover:bg-primary/90 dark:hover:bg-orange-500"
//               >
//                 View Full Menu
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   } catch (error) {
//     // Graceful error display if data fetching fails
//     return (
//       <section className="py-16 text-center">
//         <h2 className="text-3xl font-bold text-red-500 mb-4">
//           Error Loading Menu
//         </h2>
//         <p className="text-muted-foreground">
//           We apologize, but we could not load the menu at this time.
//         </p>
//       </section>
//     );
//   }
// }









"use client"

import { MenuCard } from "@/components/menu-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useMemo } from "react"
import { Search, Filter, X, ChefHat, Pizza, Coffee, Salad, IceCream, Utensils } from "lucide-react"

const mockProducts = [
  {
    _id: "1",
    name: "Margherita Supreme",
    description: "Fresh mozzarella, basil, and tomato sauce on our signature thin crust",
    price: 299,
    image: "/menu-items/margherita-pizza-with-fresh-basil.jpg",
    rating: 4.8,
    spiceLevel: "Mild",
    isBestseller: true,
    isVeg: true,
    category: "pizzas",
  },
  {
    _id: "2",
    name: "Spicy Chicken Tikka",
    description: "Tender chicken tikka with onions, peppers, and spicy sauce",
    price: 399,
    image: "/menu-items/chicken-tikka-pizza-with-peppers.jpg",
    rating: 4.6,
    spiceLevel: "Hot",
    isBestseller: false,
    isVeg: false,
    category: "pizzas",
  },
  {
    _id: "3",
    name: "Garlic Bread Sticks",
    description: "Crispy bread sticks with garlic butter and herbs",
    price: 149,
    image: "/menu-items/garlic-bread-sticks-with-herbs.jpg",
    rating: 4.4,
    spiceLevel: "Mild",
    isBestseller: false,
    isVeg: true,
    category: "sides",
  },
  {
    _id: "4",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: 49,
    image: "/menu-items/masala-chai-in-traditional-cup.jpg",
    rating: 4.7,
    spiceLevel: "Medium",
    isBestseller: true,
    isVeg: true,
    category: "beverages",
  },
  {
    _id: "5",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with parmesan and croutons",
    price: 199,
    image: "/menu-items/fresh-caesar-salad-with-croutons.jpg",
    rating: 4.3,
    spiceLevel: "Mild",
    isBestseller: false,
    isVeg: true,
    category: "salads",
  },
  {
    _id: "6",
    name: "Kulfi Ice Cream",
    description: "Traditional Indian ice cream with cardamom and pistachios",
    price: 89,
    image: "/menu-items/kulfi-ice-cream-with-pistachios.jpg",
    rating: 4.5,
    spiceLevel: "Mild",
    isBestseller: false,
    isVeg: true,
    category: "desserts",
  },
]

const categories = [
  { id: "all", name: "All Items", icon: ChefHat, count: mockProducts.length },
  { id: "pizzas", name: "Pizzas", icon: Pizza, count: mockProducts.filter((p) => p.category === "pizzas").length },
  { id: "sides", name: "Sides", icon: Utensils, count: mockProducts.filter((p) => p.category === "sides").length },
  {
    id: "beverages",
    name: "Beverages",
    icon: Coffee,
    count: mockProducts.filter((p) => p.category === "beverages").length,
  },
  { id: "salads", name: "Salads", icon: Salad, count: mockProducts.filter((p) => p.category === "salads").length },
  {
    id: "desserts",
    name: "Desserts",
    icon: IceCream,
    count: mockProducts.filter((p) => p.category === "desserts").length,
  },
]

const filters = [
  { id: "bestseller", name: "Bestsellers", active: false },
  { id: "veg", name: "Vegetarian", active: false },
  { id: "spicy", name: "Spicy", active: false },
]

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply active filters
    if (activeFilters.includes("bestseller")) {
      filtered = filtered.filter((product) => product.isBestseller)
    }
    if (activeFilters.includes("veg")) {
      filtered = filtered.filter((product) => product.isVeg)
    }
    if (activeFilters.includes("spicy")) {
      filtered = filtered.filter((product) => product.spiceLevel === "Hot" || product.spiceLevel === "Medium")
    }

    return filtered
  }, [searchQuery, activeCategory, activeFilters])

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
    setActiveCategory("all")
  }

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 relative">
          <span className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl text-accent/20 font-serif">
            Taste
          </span>
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-foreground mb-3 relative">
            Our Delicious Menu
            <span className="block h-1 w-16 md:w-24 bg-accent mx-auto mt-3"></span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore our carefully crafted selection of authentic Indian pizzas, appetizers, and more.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 rounded-xl transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-1 bg-accent/10 text-accent border-accent/20">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-card border border-border rounded-xl p-4 max-w-2xl mx-auto shadow-lg">
              <div className="flex flex-wrap gap-2 mb-4">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(filter.id)}
                    className={`text-sm transition-all duration-200 ${
                      !activeFilters.includes(filter.id) ? "hover:border-accent hover:text-accent" : ""
                    }`}
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
              {activeFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 gap-2 md:gap-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-card text-card-foreground border-border hover:border-accent hover:shadow-md hover:scale-102"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium whitespace-nowrap">{category.name}</span>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      activeCategory === category.id
                        ? "bg-primary-foreground text-primary border border-primary-foreground/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {category.count}
                  </Badge>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {activeCategory === "all" ? "All Items" : categories.find((c) => c.id === activeCategory)?.name}
              <span className="text-muted-foreground ml-2">({filteredProducts.length} items)</span>
            </h3>
            {(searchQuery || activeFilters.length > 0 || activeCategory !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear all
              </Button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <MenuCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>

        <div className="text-center bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-3">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Explore our complete menu with over 50+ delicious options
          </p>
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
