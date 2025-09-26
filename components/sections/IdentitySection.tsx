'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export function IdentitySection() {
  return (
    <section className="py-24 bg-[#0B1A2A] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Você nasceu pra voar.
            </h2>
            
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Já trabalhou no setor, sonhou em voar ou simplesmente não tira os olhos do céu? Agora pode liderar a formação de quem vai decolar.
              </p>
              <p>
                A AeroTime foi criada por profissionais apaixonados, para quem quer protagonismo na aviação.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image with Parallax */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileInView={{ y: [-20, 20] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Card className="overflow-hidden border-[#E6EDF5]/20 shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/pexels2.jpeg"
                    alt="Simulador de voo profissional"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}