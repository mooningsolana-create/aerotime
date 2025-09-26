import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: 'AeroTime - Franquia Escola de Aviação | Abra sua unidade',
  description: 'Torne-se franqueado da AeroTime e lidere a formação aeronáutica no Brasil. Investimento a partir de R$ 122mil, retorno de 12-18 meses.',
  keywords: 'franquia aviação, escola de aviação, piloto, comissário de voo, franquia educacional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        'font-sans antialiased',
        inter.variable,
        manrope.variable
      )}>
        {children}
      </body>
    </html>
  )
}