import React from 'react'
import { motion } from 'framer-motion'
import { Star, Award, Truck, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const features = [
    { icon: Award, text: "Produtos Premium" },
    { icon: Truck, text: "Entrega Rápida" },
    { icon: Shield, text: "Garantia Total" },
    { icon: Star, text: "5 Estrelas" }
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 bg-paw-pattern opacity-30"></div>
      
      <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Star className="h-4 w-4 fill-current" />
                <span>Petshop Premium #1</span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Amor e
                <span className="gradient-text block">Qualidade</span>
                para seu Pet
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra nossa seleção exclusiva de brinquedos e comidas premium 
                que garantem diversão, saúde e felicidade para seu melhor amigo.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={() => scrollToSection('services')}
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Produtos
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-8 w-8 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700 text-center">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-20"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0] 
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="space-y-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-gradient-primary p-6 rounded-2xl text-white">
                      <h3 className="font-bold text-lg mb-2">Brinquedos</h3>
                      <p className="text-sm opacity-90">Diversão garantida para seu pet</p>
                    </div>
                    
                    <div className="bg-gradient-secondary p-6 rounded-2xl text-white">
                      <h3 className="font-bold text-lg mb-2">Nutrição</h3>
                      <p className="text-sm opacity-90">Alimentos premium e saudáveis</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="bg-gradient-accent p-6 rounded-2xl text-white">
                      <h3 className="font-bold text-lg mb-2">Qualidade</h3>
                      <p className="text-sm opacity-90">Produtos testados e aprovados</p>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-2xl text-white">
                      <h3 className="font-bold text-lg mb-2">Garantia</h3>
                      <p className="text-sm opacity-90">Satisfação ou seu dinheiro de volta</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 text-center"
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-medium">Mais de 1000 pets felizes!</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}