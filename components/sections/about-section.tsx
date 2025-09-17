// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Award, Heart, Clock } from "lucide-react";
// import Image from "next/image";

// // Hardcoded data for the About page section
// const aboutInfo = {
//   storyTitle: "Our Story of Flavor & Tradition",
//   storyText1: "For over 15 years, Sanwariya Pizza has been serving Ratlam with authentic Indian-Italian fusion cuisine. What started as a small family dream has grown into the city's most beloved pizza destination.",
//   storyText2: "We believe in using only the freshest ingredients, traditional spices, and time-honored cooking methods. Every pizza is hand-tossed with love and baked to perfection in our traditional clay oven.",
//   stats: {
//     happyFamilies: "1000+",
//     recipes: "Three generations of recipes",
//     award: "Best Pizza in Ratlam 2023",
//   },
//   values: [
//     {
//       title: "Made with Love",
//       description: "Every dish is prepared with care and passion, just like home-cooked meals.",
//       icon: Heart,
//     },
//     {
//       title: "Always Fresh",
//       description: "We source fresh ingredients daily and prepare everything from scratch.",
//       icon: Clock,
//     },
//     {
//       title: "Quality First",
//       description: "We never compromise on quality, using only the finest ingredients available.",
//       icon: Award,
//     },
//   ],
// };

// export function AboutSection() {
//   return (
//     <section className="py-16 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div>
//             <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-6">
//               {aboutInfo.storyTitle}
//             </h2>
//             <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
//               {aboutInfo.storyText1}
//             </p>
//             <p className="text-muted-foreground mb-8 leading-relaxed">
//               {aboutInfo.storyText2}
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <Users className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-1">Family Owned</h3>
//                 <p className="text-sm text-muted-foreground">{aboutInfo.stats.recipes}</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <Award className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-foreground mb-1">Award Winning</h3>
//                 <p className="text-sm text-muted-foreground">{aboutInfo.stats.award}</p>
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative">
//             <Image
//               src="/indian-family-restaurant-kitchen-traditional-pizza.jpg"
//               alt="Our Kitchen"
//               width={800}
//               height={600}
//               className="w-full h-96 object-cover rounded-lg shadow-lg"
//             />
//             <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
//               <div className="flex items-center space-x-3">
//                 <Heart className="w-8 h-8" />
//                 <div>
//                   <div className="font-bold text-2xl">{aboutInfo.stats.happyFamilies}</div>
//                   <div className="text-sm opacity-90">Happy Families</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Values */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {aboutInfo.values.map((value) => (
//             <Card key={value.title} className="text-center border-none shadow-sm">
//               <CardContent className="p-6">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <value.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="font-playfair font-bold text-xl mb-3 text-foreground">{value.title}</h3>
//                 <p className="text-muted-foreground">{value.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  Heart,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  ChefHat,
  Flame,
  Trophy,
  Calendar,
  Quote,
} from "lucide-react"
import Image from "next/image"

const aboutData = {
  hero: {
    title: "Where Tradition Meets Taste",
    subtitle: "Serving Ratlam's finest Indian-Italian fusion for over 15 years",
    description:
      "Experience the perfect blend of authentic Indian spices and traditional Italian techniques, crafted with love by our family for yours.",
  },
  story: {
    title: "Our Story of Flavor & Tradition",
    text1:
      "For over 15 years, Sanwariya Pizza has been serving Ratlam with authentic Indian-Italian fusion cuisine. What started as a small family dream has grown into the city's most beloved pizza destination.",
    text2:
      "We believe in using only the freshest ingredients, traditional spices, and time-honored cooking methods. Every pizza is hand-tossed with love and baked to perfection in our traditional clay oven.",
    timeline: [
      { year: "2008", event: "Founded by the Sanwariya family with a single clay oven" },
      { year: "2015", event: "Expanded to include traditional Indian fusion recipes" },
      { year: "2020", event: "Introduced online ordering and home delivery" },
      { year: "2023", event: "Won 'Best Pizza in Ratlam' award" },
    ],
  },
  values: [
    {
      title: "Made with Love",
      description: "Every dish is prepared with care and passion, just like home-cooked meals.",
      icon: Heart,
    },
    {
      title: "Always Fresh",
      description: "We source fresh ingredients daily and prepare everything from scratch.",
      icon: Clock,
    },
    {
      title: "Quality First",
      description: "We never compromise on quality, using only the finest ingredients available.",
      icon: Award,
    },
    {
      title: "Traditional Methods",
      description: "Our clay oven and time-honored techniques create authentic flavors.",
      icon: ChefHat,
    },
  ],
  team: [
    {
      name: "Rajesh Sanwariya",
      role: "Founder & Head Chef",
      description: "With 20+ years of culinary expertise, Rajesh brings authentic flavors to every dish.",
      image: "/indian-chef-in-traditional-kitchen.jpg",
    },
    {
      name: "Priya Sanwariya",
      role: "Operations Manager",
      description: "Ensures every customer receives the warmest hospitality and finest service.",
      image: "/indian-woman-restaurant-manager.jpg",
    },
    {
      name: "Arjun Sanwariya",
      role: "Innovation Chef",
      description: "The creative mind behind our unique fusion recipes and seasonal specials.",
      image: "/young-indian-chef-creating-pizza.jpg",
    },
  ],
  achievements: [
    { title: "Best Pizza in Ratlam", year: "2023", icon: Trophy },
    { title: "1000+ Happy Families Served", year: "2024", icon: Users },
    { title: "15 Years of Excellence", year: "2008-2023", icon: Calendar },
    { title: "4.8/5 Customer Rating", year: "2024", icon: Star },
  ],
  testimonials: [
    {
      name: "Amit Sharma",
      text: "The best pizza in Ratlam! The fusion of Indian spices with Italian techniques is absolutely incredible.",
      rating: 5,
      location: "Ratlam",
    },
    {
      name: "Sneha Patel",
      text: "A family favorite for years. The clay oven gives such an authentic taste that you can't find anywhere else.",
      rating: 5,
      location: "Ratlam",
    },
    {
      name: "Vikram Singh",
      text: "Outstanding service and even better food. The Sanwariya family treats every customer like family.",
      rating: 5,
      location: "Ratlam",
    },
  ],
  contact: {
    address: "123 Main Street, Ratlam, Madhya Pradesh",
    phone: "+91 98765 43210",
    email: "hello@sanwariyapizza.com",
  },
}

export function AboutSection() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {aboutData.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-pretty">{aboutData.hero.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{aboutData.hero.description}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Visit Us Today
              </Button>
            </div>
            <div className="relative">
              <Image
                // src="/indian-family-restaurant-kitchen-traditional-pizza.jpg"
                src="/a.jpeg"
                alt="Sanwariya Pizza Kitchen"
                width={800}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Flame className="w-8 h-8" />
                  <div>
                    <div className="font-bold text-2xl">15+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{aboutData.story.title}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{aboutData.story.text1}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{aboutData.story.text2}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              {aboutData.story.timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-primary/20 shadow-sm">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <p className="text-foreground">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Sanwariya Pizza
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition that motivates us to serve you better every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers who love our food
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Taste of Tradition</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today and discover why Sanwariya Pizza has been Ratlam's favorite for over 15 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Order Online Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Visit Our Restaurant
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span className="text-sm opacity-90">{aboutData.contact.address}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <span className="text-sm opacity-90">{aboutData.contact.phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <span className="text-sm opacity-90">{aboutData.contact.email}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
