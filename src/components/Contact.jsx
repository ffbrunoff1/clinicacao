import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Heart, Star } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Enviando mensagem...', isError: false })
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({ 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
        isError: false 
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        petName: '',
        message: ''
      })
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        isError: true 
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@clinicacao.com.br",
      href: "mailto:contato@clinicacao.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-paw-pattern opacity-10"></div>
      
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
            Entre em <span className="gradient-text">Contato</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estamos aqui para ajudar você a encontrar os melhores produtos para seu pet. 
            Entre em contato e descubra como podemos fazer seu amigo ainda mais feliz!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h3
                className="text-3xl font-bold text-gray-900"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Vamos Conversar!
              </motion.h3>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Nossa equipe especializada está pronta para te atender e orientar 
                na escolha dos melhores produtos para seu pet. Conte-nos sobre 
                seu amiguinho e suas necessidades!
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-primary p-8 rounded-2xl text-white"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 fill-current" />
                <h4 className="text-xl font-bold">Por que nos escolher?</h4>
              </div>
              
              <ul className="space-y-2 text-primary-100">
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Produtos testados e aprovados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Entrega rápida e segura</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Garantia de satisfação</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fale Conosco
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário e entraremos em contato
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Digite seu nome"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome do Pet
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nome do seu pet"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </motion.div>
              </div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu pet e como podemos ajudar..."
                />
              </motion.div>

              {status.message && (
                <motion.div
                  className={`p-4 rounded-xl ${
                    status.isError 
                      ? 'bg-red-50 text-red-700 border border-red-200' 
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}