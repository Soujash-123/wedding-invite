"use client"

import { useState } from "react"
import Preloader from "@/components/preloader"
import Header from "@/components/header"
import Hero from "@/components/hero"
import EventDetails from "@/components/event-details"
import Itinerary from "@/components/itinerary"
import InvitationModal from "@/components/invitation-modal"
import Menu from "@/components/menu"
import Footer from "@/components/footer"

export default function Home() {
  const [showInvitationModal, setShowInvitationModal] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      <div className={`min-h-screen bg-wedding-dark text-wedding-light transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}>
        <Header onInvitationClick={() => setShowInvitationModal(true)} />
        <Hero />
        <EventDetails />
        <Menu />
        <Itinerary />
        <Footer />
        <InvitationModal isOpen={showInvitationModal} onClose={() => setShowInvitationModal(false)} />
      </div>
    </>
  )
}
