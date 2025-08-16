import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre', href: 'about' },
    { name: 'Produtos', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-primary-100' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Heart className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'} fill-current`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} font-display`}>
                Clinicação
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'} tracking-wide`}>
                PET SHOP PREMIUM
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`btn-primary ${!isScrolled ? 'shadow-lg' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 text-left transition-colors duration-200"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Fale Conosco
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}