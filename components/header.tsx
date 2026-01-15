"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onInvitationClick: () => void
}

export default function Header({ onInvitationClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-wedding-dark/98 backdrop-blur-lg z-50 border-b border-wedding-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl">💍</span>
          <div className="text-2xl font-bold text-wedding-gold tracking-wide">Joba & Suto</div>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="/#event" className="text-wedding-light/70 hover:text-wedding-gold transition font-medium">
            Event
          </a>
          <Link href="/guests" className="text-wedding-light/70 hover:text-wedding-gold transition font-medium">
            Guests
          </Link>
          <a href="/#menu" className="text-wedding-light/70 hover:text-wedding-gold transition font-medium">
            Menu
          </a>
          <a href="/#itinerary" className="text-wedding-light/70 hover:text-wedding-gold transition font-medium">
            Timeline
          </a>
        </nav>
        <Button
          onClick={onInvitationClick}
          className="!bg-wedding-gold !text-black hover:!bg-wedding-gold/90 font-semibold shadow-lg hover:shadow-wedding-gold/30 transition border-0"
        >
          📥 Download
        </Button>
      </div>
    </header>
  )
}
