import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

// Data based on all the information you provided
const contactInfo = {
  doBatti: {
    address: "Chopati, Do Batti Road, Do Batti, Ratlam - 457001",
    phone: "+91 79474 31101",
    hours: "Open until 10:00 PM",
  },
  sagodRoad: {
    address: "Sagod Rd, Kalimi Colony, Laxman Pura, Ratlam, Madhya Pradesh 457001",
    phone: "+91 93997 85543",
    hours: "Open until 11:30 PM",
  },
  email: "info@sanwariyapizza.com",
};

export function Footer() {
  const isCurrentlyOpen = true; // For a real app, this would be a dynamic check
  const now = new Date();
  const currentHour = now.getHours();

  const doBattiIsOpen = currentHour >= 17 && currentHour < 22; // 5 PM to 10 PM
  const sagodRoadIsOpen = currentHour >= 17 && currentHour < 23; // 5 PM to 11 PM

  return (
    <footer className="bg-gray-900 text-gray-100 dark:bg-gray-950 dark:text-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Socials */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary dark:bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl dark:text-gray-900">S</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-2xl">Sanwariya Pizza</h3>
                <p className="text-sm opacity-80">Ratlam</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6">
              Serving authentic Indian pizzas with love and tradition since 2008. Your favorite family restaurant in the
              heart of Ratlam.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="/menu" className="opacity-80 hover:opacity-100 transition-opacity">Menu</Link></li>
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Locations</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80 flex-shrink-0" />
                <div>
                  <p className="font-medium">Do Batti Location</p>
                  <span className="opacity-80 block">{contactInfo.doBatti.address}</span>
                  <Link href={`tel:${contactInfo.doBatti.phone}`} className="opacity-80 hover:opacity-100 transition-opacity block mt-1">
                    {contactInfo.doBatti.phone}
                  </Link>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sagod Rd Location</p>
                  <span className="opacity-80 block">{contactInfo.sagodRoad.address}</span>
                  <Link href={`tel:${contactInfo.sagodRoad.phone}`} className="opacity-80 hover:opacity-100 transition-opacity block mt-1">
                    {contactInfo.sagodRoad.phone}
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="opacity-80">Do Batti:</span>
                <span className={`font-medium ${doBattiIsOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {doBattiIsOpen ? 'Open Now' : 'Closed'}
                </span>
                <span className="opacity-80">5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-80">Sagod Rd:</span>
                <span className={`font-medium ${sagodRoadIsOpen ? 'text-green-400' : 'text-red-400'}`}>
                  {sagodRoadIsOpen ? 'Open Now' : 'Closed'}
                </span>
                <span className="opacity-80">5:00 PM - 11:30 PM</span>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                <Mail className="w-5 h-5 opacity-80 text-primary dark:text-orange-400" />
                <Link href={`mailto:${contactInfo.email}`} className="opacity-80 hover:opacity-100 transition-opacity">
                  {contactInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Sanwariya Pizza Ratlam. All rights reserved. Made with ❤️ for our community.</p>
        </div>
      </div>
    </footer>
  );
}