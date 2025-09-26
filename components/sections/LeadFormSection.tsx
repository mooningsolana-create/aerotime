'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, MessageCircle, Download } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  email: z.string().email('Email inválido'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().min(2, 'Estado é obrigatório'),
  capital: z.string().min(1, 'Capital disponível é obrigatório'),
  timeline: z.string().min(1, 'Prazo é obrigatório'),
  message: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

const brazilianStates = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]

const capitalOptions = [
  { value: '100-120', label: 'De R$ 100 mil a R$ 120 mil' },
  { value: '120-150', label: 'De R$ 120 mil a R$ 150 mil' },
  { value: '150-200', label: 'De R$ 150 mil a R$ 200 mil' }
]

const timelineOptions = [
  { value: '0-3', label: 'Em 0-3 meses' },
  { value: '3-6', label: 'Em 3-6 meses' },
  { value: '6+', label: '+6 meses' }
]

export function LeadFormSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const watchedValues = watch()
  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const onSubmit = async (data: FormData) => {
    // Here you would normally send the data to your API
    console.log('Form data:', data)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit(onSubmit)()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-24 bg-[#00294C] relative">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-[#E6EDF5]">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <CheckCircle className="h-16 w-16 text-[#00B37E] mx-auto mb-6" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-[#00294C] mb-6">
                  Perfeito! Recebemos suas informações
                </h3>
                
                <p className="text-[#0B1A2A] mb-8">
                  Nossa equipe entrará em contato em breve para apresentar sua oportunidade na aviação.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#00B37E] hover:bg-[#00E0A4] text-white px-8 py-3 rounded-[20px]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button variant="outline" className="px-8 py-3 rounded-[20px] border-[#00B37E] text-[#00B37E] hover:bg-[#00B37E]/10">
                    <Download className="mr-2 h-5 w-5" />
                    Baixar apresentação (PDF)
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-[#0B1A2A]/70 font-medium">
                    Abrir sua escola é possível. E o céu? É só o começo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="py-24 bg-[#00294C] relative">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Trust Strip */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-[#E2F6EE] text-sm font-medium">
            <span>A AeroTime é CIAC homologada pela ANAC</span>
            <span className="hidden sm:inline">•</span>
            <span>+97% satisfação</span>
            <span className="hidden sm:inline">•</span>
            <span>Suporte 360º</span>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Vamos conversar sobre sua futura unidade?
            </h2>
          </motion.div>

          <Card className="shadow-2xl border-[#E6EDF5]">
            <CardContent className="p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-[#0B1A2A]/60 mb-2">
                  <span>Etapa {currentStep} de {totalSteps}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input 
                        id="name"
                        {...register('name')}
                        className="mt-2"
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input 
                        id="whatsapp"
                        {...register('whatsapp')}
                        className="mt-2"
                        placeholder="(11) 99999-9999"
                      />
                      {errors.whatsapp && (
                        <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-2"
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Location */}
                {currentStep === 2 && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input 
                        id="city"
                        {...register('city')}
                        className="mt-2"
                        placeholder="Sua cidade"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Select onValueChange={(value) => setValue('state', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent>
                          {brazilianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Investment & Timeline */}
                {currentStep === 3 && (
                  <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div>
                      <Label className="text-base font-semibold">Capital disponível para investir</Label>
                      <RadioGroup 
                        className="mt-4 space-y-3"
                        onValueChange={(value) => setValue('capital', value)}
                      >
                        {capitalOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value} className="cursor-pointer flex-1">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.capital && (
                        <p className="text-red-500 text-sm mt-1">{errors.capital.message}</p>
                      )}
                    </div>

                    <div>
                      <Label className="text-base font-semibold">Em quanto tempo pretende abrir?</Label>
                      <RadioGroup 
                        className="mt-4 space-y-3"
                        onValueChange={(value) => setValue('timeline', value)}
                      >
                        {timelineOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value} className="cursor-pointer flex-1">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.timeline && (
                        <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <p className="text-sm text-[#0B1A2A]/60 mt-1 mb-2">
                        Conte-nos um pouco sobre a sua expectativa
                      </p>
                      <Textarea 
                        id="message"
                        {...register('message')}
                        className="mt-2 resize-none"
                        rows={4}
                        placeholder="Sua mensagem (opcional)..."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6 py-3 rounded-[20px]"
                  >
                    Voltar
                  </Button>

                  <Button 
                    type="button"
                    onClick={currentStep === totalSteps ? handleSubmit(onSubmit) : nextStep}
                    className="bg-[#00B37E] hover:bg-[#00E0A4] text-white px-8 py-3 rounded-[20px]"
                  >
                    {currentStep === totalSteps ? 'Quero ser uma escola franqueada AeroTime' : 'Continuar'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}