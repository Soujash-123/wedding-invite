"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface GuestManagementProps {
  guestData: any
}

export default function GuestManagement({ guestData }: GuestManagementProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const inviteeGroups = guestData?.invitees || []

  const filteredGroups = useMemo(() => {
    if (!searchTerm) return inviteeGroups
    return inviteeGroups
      .map((group: any) => ({
        ...group,
        members: group.members.filter((member: any) => member.name.toLowerCase().includes(searchTerm.toLowerCase())),
      }))
      .filter((group: any) => group.members.length > 0)
  }, [searchTerm, inviteeGroups])

  const totalInvitees = inviteeGroups.reduce((sum: number, group: any) => sum + group.members.length, 0)
  const confirmedCount = inviteeGroups.reduce(
    (sum: number, group: any) => sum + group.members.filter((m: any) => m.confirmed).length,
    0,
  )

  return (
    <section id="guests" className="py-20 bg-gradient-to-b from-wedding-dark via-wedding-gray/50 to-wedding-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-wedding-gold mb-4 tracking-wide">Guest List</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-4" />
          <p className="text-wedding-light/70 text-lg">Join us in celebrating with our cherished families</p>
        </div>

        <div className="mb-8 max-w-xl mx-auto">
          <Input
            placeholder="Search guest name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-wedding-dark border-wedding-gold/50 text-wedding-light placeholder-wedding-light/50 text-center py-6 text-lg focus:border-wedding-gold transition-all"
          />
        </div>

        <div className="grid gap-6 mb-12">
          {filteredGroups.map((group: any, idx: number) => (
            <Card
              key={idx}
              className="bg-wedding-gray border-wedding-gold/40 hover:border-wedding-gold/70 transition-all duration-300 p-10 shadow-xl hover:shadow-wedding-gold/20"
            >
              <h3 className="text-2xl text-wedding-gold mb-6 pb-4 border-b border-wedding-gold/30 tracking-wide">
                {group.group}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {group.members.map((member: any, memberIdx: number) => (
                  <div
                    key={memberIdx}
                    className="flex items-center gap-3 p-4 rounded bg-wedding-dark/50 border border-wedding-gold/20 hover:border-wedding-gold/40 transition-all"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${member.confirmed ? "bg-wedding-gold shadow-lg shadow-wedding-gold/50" : "bg-wedding-light/30"}`}
                    />
                    <span className="text-wedding-light flex-1">{member.name}</span>
                    {member.self && (
                      <span className="text-xs bg-wedding-gold/30 text-wedding-gold px-3 py-1 rounded-full font-medium">Self</span>
                    )}
                    <span
                      className={`text-xs font-semibold tracking-wide ${member.confirmed ? "text-wedding-gold" : "text-wedding-light/50"}`}
                    >
                      {member.confirmed ? "Confirmed" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <Card className="bg-wedding-gray border-wedding-gold/40 p-8 text-center shadow-xl hover:shadow-wedding-gold/20 transition-all">
            <p className="text-wedding-gold/80 text-xs uppercase tracking-[0.2em] mb-3">Total Invitees</p>
            <p className="text-5xl font-bold text-wedding-gold">{totalInvitees}</p>
          </Card>
          <Card className="bg-wedding-gray border-wedding-gold/40 p-8 text-center shadow-xl hover:shadow-wedding-gold/20 transition-all">
            <p className="text-wedding-gold/80 text-xs uppercase tracking-[0.2em] mb-3">Confirmed</p>
            <p className="text-5xl font-bold text-wedding-gold">{confirmedCount}</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
