import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Hardcoded data with details for both locations
const locations = [
  {
    name: "Do Batti Location",
    address: "Chopati, Do Batti Road, Do Batti, Ratlam - 457001",
    phone: "+91 79474 31101",
    hours: "Open until 10:00 PM",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.219106093514!2d75.0437435759714!3d23.332105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634e56598c919d%3A0xb21473950c4e1160!2sSanwariya%20Pizza!5e0!3m2!1sen!2sin!4v1699981234567!5m2!1sen!2sin"
  },
  {
    name: "Sagod Road Location",
    address: "Sagod Rd, Kalimi Colony, Laxman Pura, Ratlam, Madhya Pradesh 457001",
    phone: "+91 93997 85543",
    hours: "Open until 11:30 PM",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.625390709923!2d74.99222637597116!3d23.3155700759815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634ebdf8b75965%3A0xb1b698099b65e900!2sSanwariya%20Pizza!5e0!3m2!1sen!2sin!4v1699981234567!5m2!1sen!2sin"
  }
];

// The FAQ data you provided earlier
const faqs = [
  {
    question: "Is your restaurant purely vegetarian?",
    answer: "Yes, we are a 100% pure vegetarian restaurant. All of our dishes are prepared without meat, fish, or eggs, ensuring a delightful experience for all our vegetarian guests.",
  },
  {
    question: "Do you have Jain food options?",
    answer: "Yes, we have a separate menu section dedicated to Jain-friendly dishes. These items are prepared with special care and do not contain any root vegetables.",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, we offer home delivery within a specific radius of each of our two locations. For precise delivery details and charges, please call the nearest branch directly.",
  },
  {
    question: "Can I customize my pizza?",
    answer: "Absolutely! We offer customization options for many of our pizzas. For special requests, please speak to our staff when you place your order to ensure we can meet your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit/debit cards, UPI payments, and digital wallets like Paytm, PhonePe, and Google Pay for your convenience.",
  },
  {
    question: "Do you have a loyalty program?",
    answer: "Yes, we value our regular customers! Ask our staff about our loyalty program and special offers on your next visit.",
  },
];

export default function ContactForm() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-card dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-foreground dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Have a question, special request, or want to book a table? We'd love
            to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-background dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-foreground dark:text-white">
              Our Locations & Hours
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 mt-2">
              Find a Sanwariya Pizza near you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {locations.map((loc, index) => (
              <Card
                key={index}
                className="shadow-lg border-none bg-card dark:bg-gray-800 h-full"
              >
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-foreground dark:text-white mb-3">
                      {loc.name}
                    </h3>
                    <div className="flex items-start space-x-3 mb-2 text-sm">
                      <MapPin className="w-5 h-5 text-primary dark:text-orange-400 flex-shrink-0" />
                      <p className="text-muted-foreground dark:text-gray-400">
                        {loc.address}
                      </p>
                    </div>
                    <div className="flex items-start space-x-3 text-sm">
                      <Phone className="w-5 h-5 text-primary dark:text-orange-400 flex-shrink-0" />
                      <Link
                        href={`tel:${loc.phone}`}
                        className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-orange-400 transition-colors"
                      >
                        {loc.phone}
                      </Link>
                    </div>
                    <div className="flex items-start space-x-3 mt-2 text-sm">
                      <Clock className="w-5 h-5 text-primary dark:text-orange-400 flex-shrink-0" />
                      <p className="text-muted-foreground dark:text-gray-400">
                        {loc.hours}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 aspect-video rounded-lg overflow-hidden border-2 border-border dark:border-gray-700">
                    <iframe
                      src={loc.mapLink}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 text-lg">
              Quick answers to common questions about our restaurant and
              services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="shadow-lg border-none hover:shadow-xl transition-shadow bg-background dark:bg-gray-800"
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}