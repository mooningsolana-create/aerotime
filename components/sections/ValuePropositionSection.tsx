'use client'

import { motion } from 'framer-motion'
import { CircleDollarSign, MapPin, ShieldCheck, TrendingUp, BadgeCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  { icon: CircleDollarSign, title: "Royalties baixos", description: "Mais lucro na unidade, com suporte ativo da rede." },
  { icon: MapPin, title: "Território exclusivo", description: "Atuação sem concorrência de rede." },
  { icon: ShieldCheck, title: "Suporte 360°", description: "Implantação, operação, marketing e gestão." },
  { icon: TrendingUp, title: "Alta demanda nacional", description: "A aviação cresce e faltam profissionais." },
  { icon: BadgeCheck, title: "Marca reconhecida", description: "Credibilidade validada por quem realmente voa." }
]

export function ValuePropositionSection() {
  return (
    <section id="diferenciais" className="pt-24 pb-10 bg-white">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#00294C] mb-4">
            Por que a AeroTime
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#E6EDF5]">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-[#00B37E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00B37E]/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <benefit.icon className="h-8 w-8 text-[#00B37E]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#00294C] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0B1A2A] leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#E6EDF5]">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="w-16 h-16 bg-[#00B37E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00B37E]/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <benefit.icon className="h-8 w-8 text-[#00B37E]" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#00294C] mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-[#0B1A2A] leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}