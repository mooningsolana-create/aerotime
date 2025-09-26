'use client'

import { Button } from '@/components/ui/button'
import { Plane, ChevronDown, Users, TrendingUp, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const scrollToProjections = () => {
    document.getElementById('projecoes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden flex items-center">
      {/* Background Image + overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pexels.jpeg')" }}
          aria-hidden
        />
        {/* Overlay para contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/55" aria-hidden />
        {/* Vignette sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" aria-hidden />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-2 text-left space-y-4 sm:space-y-6">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-3 py-1.5 bg-[#00B37E]/20 backdrop-blur-sm border border-[#00B37E]/40 rounded-full text-[#00E0A4] text-xs sm:text-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Plane className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Aviation Partners
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-white font-black leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(24px, 4.5vw, 48px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Você nasceu pra voar. Agora pode liderar quem vai decolar.
              </motion.h1>

              {/* Subhead */}
              <motion.p
                className="text-[#F0F8FF] text-base sm:text-lg leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Torne-se franqueado AeroTime, a escola que forma quem voa. Um modelo de alto impacto para apaixonados por aviação com visão empreendedora.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  className="bg-[#00B37E] hover:bg-[#00A36C] text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg group w-full sm:w-auto"
                  onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Plane className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Quero abrir minha escola de aviação
                </Button>

                <Button
                  variant="ghost"
                  className="text-white hover:text-[#00E0A4] hover:bg-white/10 px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto border border-white/30 hover:border-[#00B37E]/50 rounded-lg"
                  onClick={scrollToProjections}
                >
                  Ver projeções financeiras
                  <ChevronDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>

              {/* Trust */}
              <motion.div
                className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-[#E0F0FF]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {['A AeroTime é um Centro de Instrução de Aviação Civil (CIAC) homologada pela ANAC', 'Suporte integral', 'Território exclusivo'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00B37E] rounded-full" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right stats */}
            <div className="lg:col-span-1">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  { icon: Users, number: '1000+', label: 'Pilotos e Comissários Formados' },
                  { icon: TrendingUp, number: '25%', label: 'ROI Médio Anual' },
                  { icon: Award, number: '95%', label: 'Taxa de Aprovação' },
                  { icon: Clock, number: '15', label: 'Anos de Experiência' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00B37E]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00B37E]/40 transition-colors duration-300">
                        <stat.icon className="w-5 h-5 text-[#00E0A4]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00E0A4] transition-colors duration-300">
                          {stat.number}
                        </div>
                        <div className="text-xs text-[#E0F0FF] font-semibold leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator (desktop) */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={scrollToProjections}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-xs font-medium mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Descubra mais
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="p-1.5 rounded-full border border-white/30 group-hover:border-white/50 backdrop-blur-sm transition-colors duration-300"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}