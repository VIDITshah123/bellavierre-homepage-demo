import { useRef, useEffect } from 'react'

/**
 * Custom hook to apply 3D perspective tilt and dynamic cursor-following spotlight glare
 * to cards and interactive surfaces.
 */
export function useTilt(maxTilt = 8, scale = 1.02) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId = null

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        const rotateX = (0.5 - y) * maxTilt * 2
        const rotateY = (x - 0.5) * maxTilt * 2

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`
        el.style.transition = 'transform 0.1s ease-out'

        // Apply dynamic spotlight variable
        el.style.setProperty('--mouse-x', `${(x * 100).toFixed(1)}%`)
        el.style.setProperty('--mouse-y', `${(y * 100).toFixed(1)}%`)
      })
    }

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
      el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [maxTilt, scale])

  return ref
}
