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
        initial={{ y: -140 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-[2.1rem]">
          <div className="flex items-center justify-between h-[5.6rem] lg:h-[7rem]">
            {/* Logo */}
            <a href="/" className="flex items-center" aria-label="Página inicial">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-[2.8rem] lg:h-[3.5rem] w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-[2.8rem]">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-[1.225rem] font-medium transition-colors hover:text-[#00B37E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B37E] ${
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
                className="bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold px-[2.1rem] py-[1.05rem] rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Plane className="mr-2 h-[1.4rem] w-[1.4rem]" />
                Quero abrir minha escola
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-[0.7rem] rounded-md transition-colors ${
                isScrolled ? 'text-[#00294C] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Alternar menu mobile"
            >
              {isMobileMenuOpen ? <X className="h-[2.1rem] w-[2.1rem]" /> : <Menu className="h-[2.1rem] w-[2.1rem]" />}
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
              <div className="px-[2.1rem] py-[1.4rem] space-y-[1.4rem]">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="block w-full text-left text-[#0B1A2A] hover:text-[#00B37E] font-medium py-[0.7rem] text-[1.225rem] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={handleCtaClick}
                  className="w-full bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold py-[1.05rem] rounded-2xl mt-[1.4rem]"
                >
                  <Plane className="mr-2 h-[1.4rem] w-[1.4rem]" />
                  Quero abrir minha escola
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating CTA for Mobile */}
      <motion.div
        initial={{ y: 140 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed bottom-[1.4rem] left-[1.4rem] right-[1.4rem] z-40"
      >
        <Button
          onClick={handleCtaClick}
          size="lg"
          className="w-full bg-[#00B37E] hover:bg-[#00E0A4] text-white font-semibold py-[1.4rem] rounded-2xl shadow-lg"
        >
          <Plane className="mr-2 h-[1.4rem] w-[1.4rem]" />
          Quero abrir minha escola de aviação
        </Button>
      </motion.div>
    </>
  )
}
