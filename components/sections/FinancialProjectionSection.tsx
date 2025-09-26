'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, DollarSign, Calendar, BarChart3 } from 'lucide-react'

const Counter = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
  return <span>{prefix}{end.toLocaleString('pt-BR')}{suffix}</span>
}

export function FinancialProjectionSection() {
  return (
    <section id="projecoes" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Professional background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient spotlight */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at center 20%, #00B37E 0%, transparent 50%)'
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating geometric elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-slate-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-slate-100 rounded-lg opacity-20 rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-slate-100 opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00294C] mb-8 max-w-4xl mx-auto leading-tight">
            Modelo validado. Retorno que cabe no plano de voo.
          </h2>
        </motion.div>

        {/* Main highlight - Lucro */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative inline-block">
            {/* Multiple glowing effects */}
            <motion.div 
              className="absolute inset-0 bg-[#00B37E]/8 rounded-3xl blur-3xl"
              animate={{ 
                scale: [0.9, 1.2, 0.9],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute inset-0 bg-[#00E0A4]/6 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1.1, 0.8, 1.1],
                opacity: [0.4, 0.1, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/60 overflow-hidden">
              
              {/* Animated border glow */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(0,179,126,0.1), transparent, rgba(0,224,164,0.1), transparent)',
                  backgroundSize: '400% 400%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Subtle sparkles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#00B37E] rounded-full opacity-40"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${30 + Math.sin(i) * 20}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -3, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-lg lg:text-xl font-semibold text-[#0B1A2A] mb-3">
                  Lucro Médio mensal
                </p>
                
                <motion.div 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Text shadow effect */}
                  <div 
                    className="absolute inset-0 text-4xl lg:text-5xl font-bold blur-sm opacity-20"
                    style={{ color: '#00B37E' }}
                  >
                    R$ 16.000
                  </div>
                  
                  <motion.div 
                    className="relative text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00B37E] via-[#00E0A4] to-[#00B37E] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    R$ 16.000
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Financial metrics grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {[
            { 
              label: "Investimento Total", 
              value: "A partir de R$ 122.000",
              icon: DollarSign,
              delay: 0.1
            },
            { 
              label: "Retorno estimado", 
              value: "12 a 18 meses",
              icon: Calendar,
              delay: 0.2
            },
            { 
              label: "Faturamento médio mensal", 
              value: "R$ 22.000 a R$ 24.000",
              icon: BarChart3,
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + item.delay }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-500 group relative overflow-hidden h-full">
                
                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#00B37E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B37E]/30 to-transparent"></div>
                
                <CardContent className="p-6 lg:p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-[#00B37E]/10 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-7 h-7 text-[#00B37E]" />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-[#0B1A2A]/70 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-xl lg:text-2xl font-bold text-[#00294C] leading-tight">
                      {item.value}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-[#00B37E]/40"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + item.delay }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced legal disclaimer with professional styling */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/30 relative overflow-hidden">
            
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`
              }}
            />
            
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#00B37E]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-[#00B37E]" />
                </div>
                <p className="text-sm text-[#0B1A2A]/70 leading-relaxed max-w-5xl">
                  * Projeções baseadas em dados históricos da rede. Resultados podem variar conforme região, gestão e mercado local. 
                  Consulte a Circular de Oferta de Franquia para informações completas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}