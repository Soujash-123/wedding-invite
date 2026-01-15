"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const familyInvitations = [
  {
    names: ["Sudipta Bandopadhyay", "Sarmishta Bandopadhyay", "Sristi Bandopadhyay", "Lizzie Bandopadhyay"],
    videoFile: "Invitation-Sudipta.mp4",
  },
  {
    names: ["Sathi Banerjee", "Suchitro Banerjee", "Rupanjali Banerjee", "Sagnik Banerjee"],
    videoFile: "Invitation-Sathi.mp4",
  },
  {
    names: ["Biswajit Bhattacharya", "Sudeshna Bhattacharya", "Samridhhi Bhattacharya", "Sumedha Bhattacharya"],
    videoFile: "Invitation-Biswajit.mp4",
  },
  {
    names: ["Sucharita Satpathi", "Ananya Satpathi"],
    videoFile: "Invitation-Sucharita.mp4",
  },
  {
    names: ["Shyamal Ghoshal", "Sampa Ghoshal", "Sampan Ghoshal"],
    videoFile: "Invitation-Shyamal.mp4",
  },
]

interface InvitationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvitationModal({ isOpen, onClose }: InvitationModalProps) {
  const [nameInput, setNameInput] = useState("")
  const [error, setError] = useState("")

  if (!isOpen) return null

  const handleDownload = () => {
    const trimmedName = nameInput.trim()
    
    if (!trimmedName) {
      setError("Please enter your name")
      return
    }

    // Find matching family
    const matchedFamily = familyInvitations.find(family =>
      family.names.some(name => 
        name.toLowerCase().includes(trimmedName.toLowerCase()) ||
        trimmedName.toLowerCase().includes(name.toLowerCase())
      )
    )

    if (!matchedFamily) {
      setError("Name not found. Please check the spelling or contact the hosts.")
      return
    }

    // Trigger download
    const link = document.createElement("a")
    link.href = `/videos/${matchedFamily.videoFile}`
    link.download = matchedFamily.videoFile
    link.click()
    
    setError("")
    setNameInput("")
    setTimeout(onClose, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleDownload()
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <Card className="bg-wedding-gray border-wedding-gold/50 max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-wedding-gold">Download Invitation</h2>
          <button onClick={onClose} className="text-wedding-light/60 hover:text-wedding-light text-2xl">
            ✕
          </button>
        </div>

        <p className="text-wedding-light mb-6">Enter your name to download your personalized invitation video:</p>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your full name..."
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value)
              setError("")
            }}
            onKeyPress={handleKeyPress}
            className="bg-wedding-dark border-wedding-gold/50 text-wedding-light placeholder-wedding-light/50 py-6 text-lg focus:border-wedding-gold transition-all"
          />
          
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <Button
            onClick={handleDownload}
            className="!bg-wedding-gold !text-black hover:!bg-wedding-gold/90 w-full py-6 text-lg font-semibold border-0"
          >
            📥 Download Invitation
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-wedding-gold/20">
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-wedding-gold/30 text-wedding-gold hover:bg-wedding-dark bg-transparent"
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}
