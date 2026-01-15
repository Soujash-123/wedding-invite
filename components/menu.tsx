"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const menuItems = [
  {
    category: "Appetizers",
    icon: "🍢",
    items: ["Kebabs", "Tandoori"],
  },
  {
    category: "Main Course",
    icon: "🍛",
    items: ["Mutton Biryani + Chicken Chaap", "Chinese: Mixed Fried Rice + Chilli Chicken"],
  },
  {
    category: "Beverages",
    icon: "🥤",
    items: ["Cold Drinks", "Alcoholic Beverages"],
  },
]

export default function Menu() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="menu" className="py-20 bg-wedding-dark border-y border-wedding-gold/20">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-wedding-gold mb-4 tracking-wide">Wedding Menu</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-2" />
          <p className="text-wedding-light/70 text-lg">A feast to remember</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((section, idx) => (
            <Card
              key={idx}
              className="bg-gradient-to-br from-wedding-gray to-wedding-dark border-wedding-gold/40 hover:border-wedding-gold/70 p-10 transition-all duration-300 shadow-xl hover:shadow-wedding-gold/20"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-wedding-gold/20">
                <span className="text-4xl">{section.icon}</span>
                <h3 className="text-2xl text-wedding-gold tracking-wide">{section.category}</h3>
              </div>
              <ul className="space-y-4 pl-8">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-wedding-light flex items-center gap-3 relative">
                    <span className="absolute -left-6 w-2 h-2 bg-wedding-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
