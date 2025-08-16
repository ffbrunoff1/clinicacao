import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Star } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: "Produtos",
      links: [
        { name: "Brinquedos", href: "#services" },
        { name: "Alimentação", href: "#services" },
        { name: "Kits Especiais", href: "#services" },
        { name: "Ofertas", href: "#services" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#about" },
        { name: "Nossa Missão", href: "#about" },
        { name: "Qualidade", href: "#about" },
        { name: "Contato", href: "#contact" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "#contact" },
        { name: "Garantia", href: "#contact" },
        { name: "Entrega", href: "#contact" },
        { name: "Devolução", href: "#contact" }
      ]
    }
  ]

  const contactInfo = [
    { icon: Mail, text: "contato@clinicacao.com.br", href: "mailto:contato@clinicacao.com.br" },
    { icon: Phone, text: "(11) 9999-9999", href: "tel:+5511999999999" },
    { icon: MapPin, text: "São Paulo, SP", href: "#" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-paw-pattern opacity-5"></div>
      
      <div className="relative">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              className="lg:col-span-1"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-gradient-primary rounded-full">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white font-display">
                    Clinicação
                  </span>
                  <span className="text-xs text-gray-400 tracking-wide">
                    PET SHOP PREMIUM
                  </span>
                </div>
              </motion.div>
              
              <motion.p
                className="text-gray-300 leading-relaxed mb-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Dedicados ao bem-estar e felicidade dos pets, oferecemos produtos 
                premium que garantem momentos especiais entre você e seu companheiro.
              </motion.p>

              <motion.div
                className="flex items-center space-x-1 mb-4"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-300 ml-2">1000+ pets felizes</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {footerLinks.map((section, index) => (
                  <motion.div
                    key={section.title}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.button
                            onClick={() => scrollToSection(link.href)}
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                            whileHover={{ x: 5 }}
                          >
                            {link.name}
                          </motion.button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="h-5 w-5" />
                    </motion.div>
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-primary rounded-2xl"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-white mb-2">Atendimento Especial</h4>
                <p className="text-primary-100 text-sm mb-4">
                  Orientação personalizada para escolher o melhor para seu pet
                </p>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fale Conosco
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 pb-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-gray-400 text-sm"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2024 Clinicação. Todos os direitos reservados.
              </motion.p>
              
              <motion.div
                className="flex items-center space-x-4 text-gray-400 text-sm"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span>Criado com</span>
                <motion.a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Papum
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}