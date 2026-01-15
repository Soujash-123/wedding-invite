"use client"

import { useState } from "react"
import Header from "@/components/header"
import GuestManagement from "@/components/guest-management"
import InvitationModal from "@/components/invitation-modal"
import Footer from "@/components/footer"

export default function GuestsPage() {
  const [showInvitationModal, setShowInvitationModal] = useState(false)

  const guestData = {
    invitees: [
      {
        group: "Banerjee Family - Kamal",
        members: [
          { name: "Sudipta Bandopadhyay", confirmed: true },
          { name: "Sarmishta Bandopadhyay", confirmed: true },
          { name: "Sristi Bandopadhyay", confirmed: false },
          { name: "Lizzie Bandopadhyay", confirmed: true, self: true },
        ],
      },
      {
        group: "Banerjee Family - Howrah",
        members: [
          { name: "Sathi Banerjee", confirmed: true },
          { name: "Suchitro Banerjee", confirmed: true },
          { name: "Rupanjali Banerjee", confirmed: true },
          { name: "Sagnik Banerjee", confirmed: true },
        ],
      },
      {
        group: "Bhattacharya Family - Patuli",
        members: [
          { name: "Biswajit Bhattacharya", confirmed: false },
          { name: "Sudeshna Bhattacharya", confirmed: true },
          { name: "Samridhhi Bhattacharya", confirmed: false },
          { name: "Sumedha Bhattacharya", confirmed: true },
        ],
      },
      {
        group: "Satpathi Family",
        members: [
          { name: "Sucharita Satpathi", confirmed: true },
          { name: "Ananya Satpathi", confirmed: true, self: true },
        ],
      },
      {
        group: "Ghoshal Family",
        members: [
          { name: "Shyamal Ghoshal", confirmed: false },
          { name: "Sampa Ghoshal", confirmed: false },
          { name: "Sampan Ghoshal", confirmed: true },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-wedding-dark text-wedding-light">
      <Header onInvitationClick={() => setShowInvitationModal(true)} />
      <div className="pt-24">
        <GuestManagement guestData={guestData} />
      </div>
      <Footer />
      <InvitationModal isOpen={showInvitationModal} onClose={() => setShowInvitationModal(false)} />
    </div>
  )
}
