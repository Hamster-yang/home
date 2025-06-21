'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Smartphone, Gamepad2, Brain, Palette, Cpu } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "程式設計教學",
      description: "從基礎到進階的程式設計課程，包含 Python、JavaScript、Java 等主流語言",
      features: ["Scratch 視覺化程式設計", "Python 基礎與進階", "網頁開發 HTML/CSS/JS", "演算法與資料結構"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "行動應用開發",
      description: "教導學生開發 iOS 和 Android 應用程式，培養實用的技術能力",
      features: ["iOS App 開發", "Android App 開發", "跨平台開發工具", "UI/UX 設計基礎"]
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "遊戲設計製作",
      description: "透過遊戲設計激發創意，學習程式邏輯和視覺設計",
      features: ["Unity 遊戲引擎", "2D/3D 遊戲設計", "遊戲企劃與故事", "發布與行銷"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI 人工智慧",
      description: "介紹人工智慧基礎概念，培養未來所需的 AI 素養",
      features: ["機器學習入門", "深度學習基礎", "自然語言處理", "電腦視覺應用"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "數位創作設計",
      description: "結合科技與藝術，培養數位時代的創作能力",
      features: ["數位繪圖設計", "3D 建模動畫", "影片剪輯製作", "互動媒體設計"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "硬體與物聯網",
      description: "動手實作電子專案，學習硬體控制和物聯網應用",
      features: ["Arduino 基礎", "Raspberry Pi 應用", "感測器與控制", "IoT 專案實作"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            我們的 <span className="text-primary-600">服務項目</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            提供全方位的科技教育服務，從基礎概念到實務應用，
            讓學生在學習中培養解決問題的能力和創新思維。
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <div className="text-primary-600">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <button className="w-full py-3 px-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-200 font-medium">
                  了解詳情
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 