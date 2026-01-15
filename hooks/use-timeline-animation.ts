"use client"

import { useEffect, useRef, useState } from "react"

export function useTimelineAnimation(itemCount: number) {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Section hasn't entered viewport yet
      if (rect.top > viewportHeight * 0.8) {
        setVisibleItems(0)
        return
      }

      // Section has completely passed
      if (rect.bottom < 0) {
        setVisibleItems(itemCount)
        return
      }

      // Calculate how far we've scrolled through the timeline
      const scrolledIntoView = viewportHeight * 0.8 - rect.top
      const totalScrollableHeight = rect.height + viewportHeight * 0.8
      const scrollProgress = scrolledIntoView / totalScrollableHeight
      
      // Calculate items to show (minimum 1 when section is visible)
      const itemsToShow = Math.max(1, Math.ceil(scrollProgress * itemCount))
      setVisibleItems(Math.min(itemsToShow, itemCount))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Add resize listener in case viewport changes
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [itemCount])

  return { ref, visibleItems }
}
