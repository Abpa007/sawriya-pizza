// components/ui/navigation.tsx
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingCart, Utensils } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { useAuth } from "@/hooks/use-auth"; // Assuming this hook exists

const primaryPhoneNumber = "+91 79474 31101";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth(); // Get auth state from hook

  // Use useMemo for performance optimization
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="bg-background/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50 border-b border-border dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Utensils className="w-8 h-8 text-primary dark:text-orange-400" />
            <div>
              <h1 className="font-playfair font-bold text-xl text-foreground dark:text-white">Sanwariya Pizza</h1>
              <p className="text-xs text-muted-foreground dark:text-gray-300">Ratlam</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href={`tel:${primaryPhoneNumber}`}
              className="flex items-center space-x-1 text-sm text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{primaryPhoneNumber}</span>
            </Link>

            <Link href="/cart">
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {!isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button
                    size="sm"
                    className="bg-primary dark:bg-orange-400 hover:bg-primary/90 dark:hover:bg-orange-500 text-primary-foreground dark:text-gray-900"
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/profile">
                  <Button variant="ghost" size="sm">
                    Profile
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button
                    size="sm"
                    className="bg-primary dark:bg-orange-400 hover:bg-primary/90 dark:hover:bg-orange-500"
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/cart">
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="sm" className="bg-primary dark:bg-orange-400 hover:bg-primary/90 dark:hover:bg-orange-500">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              {/* Main navigation links */}
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Cart and account section */}
              <div className="pt-3 border-t border-border dark:border-gray-800 space-y-3">
                <Link
                  href="/cart"
                  className="flex items-center justify-between text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>

                {!isLoggedIn ? (
                  <>
                    <Link
                      href="/login"
                      className="block text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/profile"
                    className="block text-foreground dark:text-white hover:text-primary dark:hover:text-orange-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                )}
              </div>

              {/* Contact and CTA section */}
              <div className="pt-3 border-t border-border dark:border-gray-800 space-y-3">
                <Link
                  href={`tel:${primaryPhoneNumber}`}
                  className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>{primaryPhoneNumber}</span>
                </Link>
                <Link href="/menu" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary dark:bg-orange-400 hover:bg-primary/90 dark:hover:bg-orange-500">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
