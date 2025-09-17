// 'use client';

// import {
//   Card,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Star, Flame, Leaf } from "lucide-react";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { addItemToCart } from "@/lib/store/features/cartSlice";
// import { useState } from "react";

// // ---
// // CORRECTED INTERFACE: Matches the MongoDB Product model
// // ---
// interface Product {
//   _id: string; // The ID from MongoDB
//   name: string;
//   description: string;
//   price: number; // The price is a number
//   image?: string;
//   rating?: number;
//   spiceLevel?: string;
//   isBestseller?: boolean;
//   isVeg?: boolean;
// }

// // ---
// // CORRECTED COMPONENT
// // ---
// interface MenuCardProps {
//   product: Product;
// }

// // NOTE: This component is a client component, so it cannot be `async`.
// export function MenuCard({ product }: MenuCardProps) {
//   const dispatch = useDispatch();
//   const [isAdding, setIsAdding] = useState(false);

//   const handleAddToCart = async () => {
//     setIsAdding(true);
//     const itemToAdd = {
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//     };
//     dispatch(addItemToCart(itemToAdd));
//     // Simulate a network delay or a promise from an API call
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     setIsAdding(false);
//   };

//   const getSpiceIcon = (level: string) => {
//     switch (level) {
//       case "Hot":
//         return <Flame className="w-3 h-3 text-red-500" />;
//       case "Medium":
//         return <Flame className="w-3 h-3 text-orange-500" />;
//       case "Mild":
//         return <Flame className="w-3 h-3 text-yellow-500" />;
//       default:
//         return null;
//     }
//   };

//   const formattedPrice = new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//   }).format(product.price);

//   return (
//     <Card className="group relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 max-w-sm mx-auto">
//       {product.image && (
//         <div className="relative w-full aspect-[4/3] overflow-hidden">
//           <Image
//             src={product.image || "/placeholder.svg?height=300&width=400&query=delicious food product"}
//             alt={product.name}
//             fill
//             className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />

//           {/* Gradient overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

//           {/* Top badges with improved positioning and fixed contrast */}
//           <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20 max-w-[calc(100%-6rem)]">
//             {product.isBestseller && (
//               <Badge className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg border-0 text-xs px-2 py-1">
//                 🔥 Bestseller
//               </Badge>
//             )}
//             {product.isVeg && (
//               <Badge className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg border-0 text-xs px-2 py-1 flex items-center gap-1">
//                 <Leaf className="w-3 h-3" />
//                 Veg
//               </Badge>
//             )}
//           </div>

//           {/* Rating badge with improved design */}
//           {product.rating && (
//             <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg z-20">
//               <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
//               <span className="text-sm font-semibold text-gray-900 dark:text-white">{product.rating}</span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Content section with better spacing */}
//       <div className="p-4 sm:p-5 space-y-4">
//         {/* Header section */}
//         <div className="space-y-2">
//           <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">
//             {product.name}
//           </CardTitle>
//           <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
//             {product.description}
//           </CardDescription>
//         </div>

//         {/* Spice level indicator with better visual design */}
//         {product.spiceLevel && (
//           <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
//             {getSpiceIcon(product.spiceLevel)}
//             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//               {product.spiceLevel} Spice Level
//             </span>
//           </div>
//         )}

//         {/* Footer with price and button */}
//         <div className="flex items-center justify-between gap-3 pt-2">
//           <div className="flex flex-col">
//             <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{formattedPrice}</span>
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             disabled={isAdding}
//             className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 sm:px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base min-w-[100px] sm:min-w-[120px]"
//           >
//             {isAdding ? (
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                 <span className="hidden sm:inline">Adding...</span>
//               </div>
//             ) : (
//               <span>Add to Cart</span>
//             )}
//           </Button>
//         </div>
//       </div>
//     </Card>
//   )
// }



"use client"

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Flame, Leaf, Heart, Eye, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { addItemToCart } from "@/lib/store/features/cartSlice"
import { useDispatch } from "react-redux"

// ---
// CORRECTED INTERFACE: Matches the MongoDB Product model
// ---
interface Product {
  _id: string // The ID from MongoDB
  name: string
  description: string
  price: number // The price is a number
  image?: string
  rating?: number
  spiceLevel?: string
  isBestseller?: boolean
  isVeg?: boolean
}

// ---
// CORRECTED COMPONENT
// ---
interface MenuCardProps {
  product: Product
}

// NOTE: This component is a client component, so it cannot be `async`.
export function MenuCard({ product }: MenuCardProps) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true);
    const itemToAdd = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    dispatch(addItemToCart(itemToAdd));
    // Simulate a network delay or a promise from an API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const getSpiceIcon = (level: string) => {
    switch (level) {
      case "Hot":
        return <Flame className="w-3 h-3 text-red-500" />
      case "Medium":
        return <Flame className="w-3 h-3 text-orange-500" />
      case "Mild":
        return <Flame className="w-3 h-3 text-yellow-500" />
      default:
        return null
    }
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price)

  return (
    <Card className="group relative overflow-hidden bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-2 max-w-sm mx-auto">
      {product.image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=400&query=delicious food product"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              variant="secondary"
              onClick={toggleFavorite}
              className="rounded-full w-10 h-10 p-0 bg-white/95 hover:bg-accent hover:text-accent-foreground shadow-lg backdrop-blur-sm transition-all duration-200"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setShowQuickView(true)}
              className="rounded-full w-10 h-10 p-0 bg-white/95 hover:bg-accent hover:text-accent-foreground shadow-lg backdrop-blur-sm transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>

          {/* Top badges with improved styling */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20 max-w-[calc(100%-6rem)]">
            {product.isBestseller && (
              <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg border-0 text-xs px-2 py-1">
                🔥 Bestseller
              </Badge>
            )}
            {product.isVeg && (
              <Badge className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg border-0 text-xs px-2 py-1 flex items-center gap-1">
                <Leaf className="w-3 h-3" />
                Veg
              </Badge>
            )}
          </div>

          {/* Rating badge */}
          {product.rating && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg z-20">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 sm:p-5 space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-lg sm:text-xl font-bold text-card-foreground line-clamp-2 leading-tight group-hover:text-accent transition-colors duration-300">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </CardDescription>
        </div>

        {product.spiceLevel && (
          <div className="flex items-center gap-2 p-2 bg-secondary rounded-lg border border-border/50">
            {getSpiceIcon(product.spiceLevel)}
            <span className="text-sm font-medium text-secondary-foreground">{product.spiceLevel} Spice Level</span>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-accent">{formattedPrice}</span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 sm:px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg text-sm sm:text-base min-w-[100px] sm:min-w-[120px] group"
          >
            {isAdding ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                <span className="hidden sm:inline">Adding...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span>Add to Cart</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}
