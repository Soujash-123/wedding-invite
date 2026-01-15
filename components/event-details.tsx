"use client"

import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function EventDetails() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="event" className="py-20 bg-wedding-dark border-y border-wedding-gold/20">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-wedding-gold mb-4 tracking-wide">Event Details</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-wedding-gray border-wedding-gold/40 p-10 shadow-xl hover:shadow-wedding-gold/20 transition-all duration-300">
            <h3 className="text-2xl text-wedding-gold mb-6 tracking-wide">📅 Date & Time</h3>
            <p className="text-wedding-light text-lg leading-relaxed">
              Saturday, 17th January 2026
              <br />
              <span className="text-wedding-gold">8:00 PM</span> · Event Starting
            </p>
          </Card>

          <Card className="bg-wedding-gray border-wedding-gold/40 p-10 shadow-xl hover:shadow-wedding-gold/20 transition-all duration-300">
            <h3 className="text-2xl text-wedding-gold mb-6 tracking-wide">📍 Venue</h3>
            <p className="text-wedding-light text-lg leading-relaxed">
              Block-B Flat 309
              <br />
              Narmada Complex
              <br />
              778 Sonarpur Station Road
              <br />
              Kolkata
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
