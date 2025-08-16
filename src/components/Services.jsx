import React from 'react'
import { motion } from 'framer-motion'
import { Bone, Heart, Shield, Star, Gift, Truck } from 'lucide-react'

export default function Services() {
  const products = [
    {
      icon: Bone,
      title: "Brinquedos Interativos",
      description: "Brinquedos que estimulam a inteligência e proporcionam horas de diversão segura para seu pet.",
      features: ["Materiais atóxicos", "Estimulam a mente", "Resistentes", "Diversão garantida"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Alimentação Premium",
      description: "Rações e petiscos premium selecionados para nutrir seu pet com ingredientes naturais de alta qualidade.",
      features: ["Ingredientes naturais", "Rico em vitaminas", "Sem conservantes", "Sabor irresistível"],
      color: "secondary"
    },
    {
      icon: Gift,
      title: "Kits Especiais",
      description: "Combos personalizados que unem diversão e nutrição, criados especialmente para diferentes perfis de pets.",
      features: ["Combos personalizados", "Preço especial", "Variedade única", "Embalagem gift"],
      color: "accent"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Satisfação garantida ou seu dinheiro de volta em até 30 dias."
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Receba seus produtos em casa com entrega expressa em 24h."
    },
    {
      icon: Star,
      title: "Suporte Especializado",
      description: "Nossa equipe te ajuda a escolher o melhor para seu pet."
    }
  ]

  const getGradientClass = (color) => {
    switch (color) {
      case 'primary': return 'bg-gradient-primary'
      case 'secondary': return 'bg-gradient-secondary'
      case 'accent': return 'bg-gradient-accent'
      default: return 'bg-gradient-primary'
    }
  }

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-paw-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <motion.div
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nossos <span className="gradient-text">Produtos</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubra nossa seleção especial de produtos premium que garantem 
            diversão, saúde e felicidade para seu melhor amigo.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-20"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 card-hover relative overflow-hidden"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-2xl opacity-50 -translate-y-8 translate-x-8"></div>
              
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 ${getGradientClass(product.color)} rounded-2xl mb-6 relative z-10`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <product.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 ${getGradientClass(product.color)} rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      const headerHeight = 80
                      const elementPosition = element.offsetTop - headerHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className={`w-full ${getGradientClass(product.color)} text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Saiba Mais
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Por que Escolher a <span className="gradient-text">Clinicação?</span>
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Oferecemos muito mais que produtos. Proporcionamos experiências que fortalecem 
              o vínculo entre você e seu pet.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  const headerHeight = 80
                  const elementPosition = element.offsetTop - headerHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco Agora
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}