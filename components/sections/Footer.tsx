'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-[#0B1A2A] text-white py-16">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Seals & Certifications */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Homologação</h3>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-sm">A AeroTime é um Centro de Instrução de Aviação Civil (CIAC) homologada pela ANAC</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <p className="text-sm">Parcerias: PlaneIt, SAGA, AirBP</p>
              </div>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">CNPJ / Sede / Mídias</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>CNPJ: 00.000.000/0001-00</p>
              <p>São Paulo - SP</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-[#00B37E] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#00B37E] transition-colors">Instagram</a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Sobre a AeroTime
              </a>
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Nossos Cursos
              </a>
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Como Funciona
              </a>
              <a href="#projecoes" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Projeções Financeiras
              </a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Termos e política</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                LGPD
              </a>
              <a href="#" className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors">
                Circular de Oferta
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-white/60">
            © 2024 AeroTime. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}