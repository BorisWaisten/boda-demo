'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Instagram, 
  MessageCircle, 
  Mail 
} from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Sitio Web',
      url: 'https://www.waistenprogramacion.com.ar/',
      icon: Globe,
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-400/10',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/waistenprogramacion/',
      icon: Instagram,
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5493446575620',
      icon: MessageCircle,
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/10',
    },
    {
      name: 'Email',
      url: 'mailto:boriswaisten@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10',
    },
  ]

  return (
    <footer className="bg-black text-white py-12 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#7DD3FC' }}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#0F766E' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto items-center">
          {/* Logo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-32 h-32 md:w-[5rem] md:h-[5rem]">
              <Image
                src="/logo1.png"
                alt="Waisten Programación"
                fill
                className="object-contain scale-[2] md:scale-[3.5]"
                priority
              />
            </div>
          </motion.div>
          {/* Redes sociales */}
          <motion.div
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-playfair text-sm text-gray-300 mb-2">Seguinos</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-12 h-12 rounded-full 
                      bg-white/5 border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      ${social.color} ${social.bgColor}
                      backdrop-blur-sm
                    `}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

