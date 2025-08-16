import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Star, Users, Award, Truck } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "1000+", label: "Pets Felizes", icon: Heart },
    { number: "98%", label: "Satisfação", icon: Star },
    { number: "5+", label: "Anos de Experiência", icon: Award },
    { number: "24h", label: "Entrega Rápida", icon: Truck }
  ]

  const values = [
    {
      icon: Heart,
      title: "Amor pelos Animais",
      description: "Nossa paixão pelos pets move cada decisão que tomamos. Acreditamos que eles merecem o melhor cuidado e carinho."
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Selecionamos rigorosamente cada produto, testando qualidade e segurança para garantir a satisfação total."
    },
    {
      icon: Star,
      title: "Excelência no Atendimento",
      description: "Nossa equipe especializada está sempre pronta para orientar e ajudar na escolha ideal para seu pet."
    },
    {
      icon: Users,
      title: "Comunidade Pet",
      description: "Criamos uma família de tutores conscientes que compartilham amor e cuidado pelos seus companheiros."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Sobre a <span className="gradient-text">Clinicação</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Somos mais que um petshop. Somos uma empresa dedicada ao bem-estar 
            e felicidade dos pets, oferecendo produtos premium cuidadosamente 
            selecionados para garantir momentos especiais entre você e seu companheiro.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gray-900"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Nossa Missão é Simples:
                <span className="gradient-text block">Pets Felizes, Tutores Realizados</span>
              </motion.h3>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Desde nossa fundação, nos dedicamos a proporcionar experiências únicas 
                através de produtos de alta qualidade. Cada brinquedo é testado para 
                garantir diversão segura, e cada alimento é selecionado pensando na 
                nutrição e saúde do seu pet.
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Nossa equipe especializada entende que cada animal é único, por isso 
                oferecemos orientação personalizada para ajudar você a encontrar 
                exatamente o que seu companheiro precisa.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('services')
                  if (element) {
                    const headerHeight = 80
                    const elementPosition = element.offsetTop - headerHeight
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    })
                  }
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer Produtos
              </motion.button>
              
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
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-6 w-6 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}