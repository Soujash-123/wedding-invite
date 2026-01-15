"use client"

import { useEffect, useState } from "react"

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Total time: 3 rotations with 30ms pause each = ~2130ms + fade
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Call onComplete after fade out animation
      setTimeout(onComplete, 500)
    }, 2130)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-9xl animate-ring-rotate">💍</div>
    </div>
  )
}
