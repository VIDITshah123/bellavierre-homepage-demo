import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse), not touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = -100
    let mouseY = -100
    let followerX = -100
    let followerY = -100
    let rafId = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Smooth lerp animation for the follower circle
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.16
      followerY += (mouseY - followerY) * 0.16

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      }

      rafId = requestAnimationFrame(animateFollower)
    }

    rafId = requestAnimationFrame(animateFollower)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Detect clickable elements to expand cursor
    const handleElementOver = (e) => {
      if (e.target.closest('.hero-rating-grid')) {
        setIsHovered(false)
        return
      }
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], [role="tab"], .property-card, .why-choose-card, .expert-agent-card, .feature-service-pane')
      setIsHovered(!!target)
    }

    document.addEventListener('mouseover', handleElementOver)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleElementOver)
    }
  }, [isVisible])

  return (
    <div className={`custom-cursor-container ${isVisible ? 'is-visible' : ''}`} aria-hidden="true">
      <div
        ref={cursorRef}
        className={`custom-cursor-dot ${isHovered ? 'cursor-hover' : ''}`}
      />
      <div
        ref={followerRef}
        className={`custom-cursor-follower ${isHovered ? 'follower-hover' : ''}`}
      />
    </div>
  )
}
