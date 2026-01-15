"use client"

export default function Footer() {
  return (
    <footer className="bg-wedding-dark border-t border-wedding-gold/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="text-3xl mb-4 inline-block">💍</span>
        </div>
        <h2 className="text-3xl font-serif text-wedding-gold mb-2 tracking-wide">Joba & Suto</h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-6" />
        <p className="text-wedding-light/80 mb-8 text-lg font-light italic">We look forward to celebrating with you!</p>
        <p className="text-wedding-light/50 text-sm font-light">© 2026 Wedding Celebration · All Rights Reserved</p>
      </div>
    </footer>
  )
}
