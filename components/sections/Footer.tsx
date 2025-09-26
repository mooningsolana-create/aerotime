'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-[#0B1A2A] text-white py-16">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Homologação ANAC (apenas logo) */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">Homologação</h3>
            <a
              href="https://www.gov.br/anac/pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition p-4"
              aria-label="Ver site da ANAC"
              title="ANAC — Agência Nacional de Aviação Civil"
            >
              <div className="aspect-[3/1] w-full grid place-items-center">
                <img
                  src="/anac.png"
                  alt="Logo ANAC"
                  className="max-h-10 md:max-h-12 w-auto opacity-90 group-hover:opacity-100 transition"
                />
              </div>
            </a>

            {/* Parcerias (AirBP) */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-white/70">
                Parcerias
              </h4>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="aspect-[3/1] w-full grid place-items-center">
                  <img
                    src="/airbp.svg"
                    alt="Parceiro AirBP"
                    className="max-h-10 md:max-h-12 w-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dados da franqueadora */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Dados da franqueadora</h3>

            <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 space-y-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">CNPJ</span>
                  <span className="font-medium tabular-nums bg-white/10 px-2 py-1 rounded-md">
                    00.000.000/0001-00
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/60">Sede</span>
                  <span className="font-medium">São Paulo — SP</span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/15 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/15 transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <div className="space-y-2">
              <a
                href="#sobre"
                className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors"
              >
                Sobre
              </a>
              <a
                href="#cursos"
                className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors"
              >
                Nossos Cursos
              </a>
              <a
                href="#como-funciona"
                className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#projecoes"
                className="block text-sm text-white/80 hover:text-[#00B37E] transition-colors"
              >
                Projeções Financeiras
              </a>
            </div>
          </motion.div>

          {/* Termos e política */}
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
            © 2025. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
