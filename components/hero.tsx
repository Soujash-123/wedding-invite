"use client"

export default function Hero() {
  return (
    <div className="relative h-screen bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-wedding-gold rounded-full blur-sm" />
        <div className="absolute -bottom-20 right-20 w-80 h-80 border-4 border-wedding-gold rounded-full blur-sm" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border-2 border-wedding-gold rounded-full opacity-5" />
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-wedding-gold rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-wedding-gold mb-3 animate-glow text-balance tracking-wider">
          THE WEDDING OF
        </h1>

        <div className="mb-10">
          <p className="text-5xl md:text-6xl text-wedding-light mb-4 tracking-wide">Joba</p>
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
            <span className="text-wedding-gold text-3xl">&</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
          </div>
          <p className="text-5xl md:text-6xl text-wedding-light tracking-wide">Suto</p>
        </div>

        <p className="text-wedding-light/90 text-lg mb-8 max-w-2xl leading-relaxed">
          Together with their families request the honor of your presence
          <br />
          at the celebration of their love
        </p>

        <div className="space-y-3 border-t border-b border-wedding-gold/30 py-6">
          <p className="text-wedding-gold text-xs uppercase tracking-[0.3em]">Saturday</p>
          <p className="text-wedding-light text-4xl">17th January, 2026</p>
          <p className="text-wedding-gold text-lg tracking-wide">8:00 PM · Event Starting</p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
    </div>
  )
}
