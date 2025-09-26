'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap, BadgeCheck, Rocket, Star, Phone, Clock, Trophy, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const differentials = [
  {
    icon: ShieldCheck,
    title: "Uma das franquias pioneiras com foco exclusivo em formação aeronáutica certificada",
    highlight: "PIONEIRA",
    badge: "Certificado ANAC"
  },
  {
    icon: GraduationCap,
    title: "Formação para Comissário de voo, Piloto privado de avião e Piloto comercial de avião",
    highlight: "3 CURSOS",
    badge: "Completo"
  },
  {
    icon: BadgeCheck,
    title: "Metodologia reconhecida nacionalmente e avaliada com +97% de satisfação",
    highlight: "97%",
    badge: "Top Rated"
  },
  {
    icon: Rocket,
    title: "Expansão acelerada com suporte estratégico desde a implantação",
    highlight: "SUPORTE 360°",
    badge: "Premium"
  }
]

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < end) {
          return prev + Math.ceil((end - prev) / 20)
        }
        return end
      })
    }, 50)

    return () => clearInterval(timer)
  }, [end])

  return <span>{count}{suffix}</span>
}

export function PositioningSection() {
  return (
    <section id="posicionamento" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] relative">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 49%, #00B37E 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, #00B37E 50%, transparent 51%)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Stats Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 mb-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00B37E] mb-2">
                REF
              </div>
              <div className="text-sm sm:text-base text-[#00E0A4] font-semibold tracking-wide">
                EM FORMAÇÃO
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-[#00B37E]/30"></div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                <Counter end={1000} suffix="+" />
              </div>
              <div className="text-sm sm:text-base text-slate-300 font-semibold">
                FORMADOS
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-[#00B37E]/30"></div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00B37E] mb-2">
                <Counter end={15} />
              </div>
              <div className="text-sm sm:text-base text-slate-300 font-semibold">
                ANOS MERCADO
              </div>
            </div>
          </div>

        </motion.div>

        {/* Main Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 max-w-6xl mx-auto leading-tight">
            Não somos 'mais uma rede'. Somos a referência em formação aeronáutica aplicada.
          </h1>
          
          <div className="max-w-4xl mx-auto text-base sm:text-lg text-slate-300 space-y-4 font-normal leading-relaxed">
            <p>
              Enquanto outros insistem no ensino tradicional, a AeroTime forma quem faz o mundo se mover por cima das nuvens.
            </p>
            <p>
              Agora, isso pode ser seu negócio.
            </p>
          </div>

          {/* Rating */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-200 font-medium">97% de satisfação dos alunos</span>
          </motion.div>
          
          {/* Linha de reforço */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-[#00E0A4] font-semibold text-lg">O céu é só o começo.</p>
          </motion.div>
        </motion.div>

        {/* Cards Grid - Professional institutional design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 lg:mb-20">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/8 backdrop-blur-sm border border-[#00B37E]/30 rounded-2xl hover:bg-white/12 hover:border-[#00B37E]/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                
                {/* Professional badge - properly positioned */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-[#00B37E] to-[#00E0A4] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl shadow-sm">
                  {item.badge}
                </div>

                <CardContent className="p-6 lg:p-8 pt-10">
                  <div className="flex flex-col space-y-6">
                    
                    {/* Icon section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00B37E]/20 to-[#00E0A4]/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <item.icon className="h-8 w-8 text-[#00B37E]" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl lg:text-3xl font-bold text-[#00B37E] leading-none">
                            {item.highlight}
                          </div>
                          <div className="w-8 h-0.5 bg-[#00B37E]/50 mt-1"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title with better spacing */}
                    <div className="border-l-4 border-[#00B37E]/40 pl-4">
                      <p className="text-white font-medium text-base lg:text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B37E]/20 via-[#00E0A4]/40 to-[#00B37E]/20"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Corporate style */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-[#00B37E]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Seja a escola franqueada da sua região
              </h2>
              <p className="text-slate-300 font-normal text-lg leading-relaxed">
                Garanta exclusividade territorial e suporte completo para decolar seu negócio
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button 
                className="bg-[#00B37E] hover:bg-[#00E0A4] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg min-w-[200px]"
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Trophy className="mr-2 h-5 w-5" />
                Quero ser uma escola franqueada AeroTime
              </Button>
              
              <Button 
                variant="outline"
                className="bg-transparent border-2 border-[#00B37E] text-[#00B37E] hover:bg-[#00B37E] hover:text-white px-6 py-4 text-lg font-semibold rounded-lg transition-all duration-300 min-w-[200px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Falar com consultor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress indicator - simplified */}
      <motion.div 
        className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 z-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex items-center gap-2 text-white text-sm font-medium">
          <TrendingUp className="w-4 h-4 text-[#00B37E]" />
          <span>67% territórios ocupados</span>
        </div>
      </motion.div>
    </section>
  )
}