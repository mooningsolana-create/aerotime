'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Plane, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const handleCtaClick = () => {
    // Track CTA click event for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'header_cta'
      })
    }
    handleScrollTo('formulario')
  }

  const menuItems = [
    { label: 'Posicionamento', id: 'posicionamento' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Projeções', id: 'projecoes' },
    { label: 'Processo', id: 'processo' },
    { label: 'Contato', id: 'formulario' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00B37E] to-[#00E0A4] rounded-lg flex items-center justify-center">
                  <Plane className="h-6 w-6 text-[#00294C]" />
                </div>
                <span className={`text-xl font-bold ${
                  isScrolled ? 'text-[#00294C]' : 'text-white'
                }`}>
                  Aerotime
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#00B37E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B37E] ${
                    isScrolled ? 'text-[#0B1A2A] hover:text-[#00B37E]' : 'text-white/90 hover:text-[#00E0A4]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={handleCtaClick}
                size="lg"
                className="bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Plane className="mr-2 h-4 w-4" />
                Quero abrir minha escola
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-[#00294C] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#E6EDF5]"
            >
              <div className="px-6 py-4 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="block w-full text-left text-[#0B1A2A] hover:text-[#00B37E] font-medium py-2 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold py-3 rounded-2xl mt-4"
                >
                  <Plane className="mr-2 h-4 w-4" />
                  Quero abrir minha escola
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating CTA for Mobile */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40"
      >
        <Button
          onClick={handleCtaClick}
          size="lg"
          className="w-full bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold py-4 rounded-2xl shadow-lg"
        >
          <Plane className="mr-2 h-4 w-4" />
          Quero abrir minha escola de aviação
        </Button>
      </motion.div>
    </>
  )
}