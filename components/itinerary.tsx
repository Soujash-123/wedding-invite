"use client"

import { Card } from "@/components/ui/card"
import { useTimelineAnimation } from "@/hooks/use-timeline-animation"

const events = [
  {
    time: "8:00 PM",
    title: "Welcome & Seating",
    description: "Guests arrive and get seated with soft instrumental background music",
    icon: "🕗",
  },
  {
    time: "8:10 PM",
    title: "Ring Engagement Ceremony",
    description: "Exchange of rings and blessings from elders with photo & video capture",
    icon: "💍",
  },
  {
    time: "8:25 PM",
    title: "Mala Bodol",
    description: "Garland exchange with light moments and family photos",
    icon: "🌼",
  },
  {
    time: "8:40 PM",
    title: "Sindoor Daan",
    description: "Ritual performed respectfully with calm devotional music",
    icon: "🔴",
  },
  {
    time: "8:55 PM",
    title: "Cake Cutting (Anniversary)",
    description: "Anniversary cake cutting with photos and cake distribution",
    icon: "🎂",
  },
  {
    time: "9:10 PM",
    title: "Cake Cutting (Birthday)",
    description: "Birthday cake cutting with birthday song and wishes",
    icon: "🎉",
  },
  {
    time: "9:25 PM",
    title: "Musical Event",
    description: "Live music / DJ begins with relaxed mood",
    icon: "🎶",
  },
  {
    time: "9:30 PM+",
    title: "Dinner Opens (Free Flow)",
    description: "Buffet dinner opens with guests dining at their convenience",
    icon: "🍽️",
  },
  {
    time: "10:00 PM+",
    title: "Open Celebration",
    description: "Open dance floor with high-energy music and free mingling",
    icon: "🕙",
  },
]

export default function Itinerary() {
  const { ref, visibleItems } = useTimelineAnimation(events.length)

  return (
    <section id="itinerary" className="py-20 bg-wedding-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-wedding-gold mb-4 tracking-wide">Event Itinerary</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-2" />
          <p className="text-wedding-light/70 text-lg">Timeline of celebrations</p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line - lights up progressively */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-wedding-gold/20" />
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-wedding-gold via-wedding-gold to-wedding-gold/50 transition-all duration-700 shadow-[0_0_20px_rgba(244,196,48,0.6)]"
              style={{ 
                height: `${(visibleItems / events.length) * 100}%`
              }}
            />
          </div>

          <div className="space-y-8">
            {events.map((event, idx) => {
              const isVisible = idx + 1 <= visibleItems
              return (
                <div 
                  key={idx} 
                  className="relative"
                >
                  <div 
                    className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-700 transform ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <div 
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-700 ${
                          isVisible 
                            ? "bg-wedding-gold border-wedding-gold shadow-[0_0_20px_rgba(244,196,48,0.8)] scale-110" 
                            : "bg-wedding-gray border-wedding-gold/20 scale-75"
                        }`}
                      >
                        {isVisible && (
                          <div className="absolute inset-0 rounded-full bg-wedding-gold animate-ping opacity-75" />
                        )}
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <Card className={`bg-wedding-gray border-wedding-gold/40 p-8 transition-all duration-700 shadow-xl ${
                        isVisible ? "border-wedding-gold/70 shadow-wedding-gold/20" : ""
                      }`}>
                        <div className="text-4xl mb-4">{event.icon}</div>
                        <p className="text-wedding-gold text-xs uppercase tracking-[0.2em] mb-3">
                          {event.time}
                        </p>
                        <h3 className="text-2xl text-wedding-light mb-3 tracking-wide">{event.title}</h3>
                        <p className="text-wedding-light/80 leading-relaxed">{event.description}</p>
                      </Card>
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
