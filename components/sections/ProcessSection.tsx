'use client'

import { motion, useScroll } from 'framer-motion'
import { FileText, UserCheck, Handshake, Settings, Flag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useRef } from 'react'

const steps = [
  { icon: FileText,  title: "Preenchimento do Formulário",             number: 1 },
  { icon: UserCheck, title: "Análise de Perfil & Reunião Estratégica", number: 2 },
  { icon: Handshake, title: "Apresentação Financeira e Contratual",    number: 3 },
  { icon: Settings,  title: "Treinamento & Implantação",               number: 4 },
  { icon: Flag,      title: "Inauguração com suporte 360°",           number: 5 }
]

export function ProcessSection() {
  const [showStickyButton, setShowStickyButton] = useState(false)

  // Refs para medir a área e os badges (1 e 5)
  const wrapRef = useRef<HTMLDivElement>(null)
  const firstBadgeRef = useRef<HTMLDivElement>(null)
  const lastBadgeRef = useRef<HTMLDivElement>(null)

  // Altura máxima que a linha pode crescer (depois da medição)
  const [maxHeight, setMaxHeight] = useState(0)
  // Top a partir do qual a linha começa (alinhado ao centro do badge 1)
  const [progressTop, setProgressTop] = useState(0)
  // Altura atual da linha (progresso)
  const [progressHeight, setProgressHeight] = useState(0)

  // Progresso de scroll dentro da seção (0 → 1)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    // Ajuste fino do momento em que começa/termina o progresso
    offset: ['start 80%', 'end 20%']
  })

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('process-step-3')
      if (!el) return
      const rect = el.getBoundingClientRect()
      setShowStickyButton(rect.top <= window.innerHeight && rect.bottom >= 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mede distâncias reais entre os centros dos badges 1 e 5
  useEffect(() => {
    const STOP_GAP_PX = 8 // folga para "parar antes do final" da bolinha 5

    const measure = () => {
      if (!wrapRef.current || !firstBadgeRef.current || !lastBadgeRef.current) return

      const wrapRect = wrapRef.current.getBoundingClientRect()
      const wrapTopAbs = wrapRect.top + window.scrollY

      const firstRect = firstBadgeRef.current.getBoundingClientRect()
      const lastRect  = lastBadgeRef.current.getBoundingClientRect()

      const firstCenterAbs = firstRect.top + window.scrollY + firstRect.height / 2
      const lastBottomAbs  = lastRect.top  + window.scrollY + lastRect.height

      // Onde começa a linha dentro do wrapper
      const topWithinWrapper = firstCenterAbs - wrapTopAbs
      setProgressTop(topWithinWrapper)

      // Altura máxima: até um pouco antes do final do badge 5
      const max = (lastBottomAbs - STOP_GAP_PX) - firstCenterAbs
      setMaxHeight(Math.max(0, Math.floor(max)))
    }

    measure()
    // Recalcula em resize/orientação e quando fontes/layout estabilizam
    const ro = new ResizeObserver(measure)
    if (wrapRef.current) ro.observe(wrapRef.current)
    window.addEventListener('resize', measure)
    const id = window.setTimeout(measure, 0) // pós-paint

    return () => {
      window.removeEventListener('resize', measure)
      window.clearTimeout(id)
      ro.disconnect()
    }
  }, [])

  // Atualiza a altura da linha conforme o scroll (limitada por maxHeight)
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setProgressHeight(Math.min(maxHeight, Math.max(0, v * maxHeight)))
    })
    return () => unsub()
  }, [scrollYProgress, maxHeight])

  return (
    <section id="processo" className="py-16 lg:py-20 bg-[#F5F7FB] relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#00B37E]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#00E0A4]/4 rounded-full blur-2xl"></div>
        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,179,126,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,179,126,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00294C] mb-4">
            Abrir sua escola é possível.
          </h2>
          <p className="text-lg text-[#0B1A2A]/70 font-medium">
            E o céu? É só o começo.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Wrapper que serve de referência para o scroll progress */}
          <div className="relative" ref={wrapRef}>
            {/* Trilho cinza (vai do topo ao fundo do wrapper) */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full" />

            {/* Linha de progresso que cresce com o scroll e para antes do fim do #5 */}
            <div
              className="absolute left-6 w-0.5 rounded-full bg-gradient-to-b from-[#00B37E] to-[#00E0A4]"
              style={{ top: progressTop, height: progressHeight }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  id={index === 2 ? 'process-step-3' : undefined}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Badge do número (refs no 1º e 5º) */}
                  <motion.div
                    ref={index === 0 ? firstBadgeRef : index === steps.length - 1 ? lastBadgeRef : undefined}
                    className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#00B37E] group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#00B37E] font-bold text-lg">{step.number}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#00B37E]/30"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.4, opacity: [0, 0.6, 0] }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>

                  {/* Cartão do passo */}
                  <div className="ml-6 flex-1">
                    <Card className="relative bg-white/90 backdrop-blur-sm border border-slate-200/60 hover:shadow-lg hover:border-[#00B37E]/30 transition-all duration-300 group">
                      {/* Filete superior animado */}
                      <motion.div
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00B37E] to-[#00E0A4] rounded-t-lg"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-[#00B37E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00B37E]/15 transition-colors duration-300">
                            <step.icon className="h-5 w-5 text-[#00B37E]" />
                          </div>
                          <h3 className="text-lg font-bold text-[#00294C] group-hover:text-[#00B37E] transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              className="bg-[#00B37E] hover:bg-[#00E0A4] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00B37E]/20"
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero iniciar meu processo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      {showStickyButton && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <Button
            className="w-full bg-[#00B37E] hover:bg-[#00E0A4] text-white py-4 text-lg font-semibold rounded-xl shadow-xl"
            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero iniciar meu processo
          </Button>
        </motion.div>
      )}
    </section>
  )
}