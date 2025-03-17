"use client"

import { useState, useEffect } from "react"
import { ChevronUpIcon } from "@heroicons/react/24/outline"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  )
}

