'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "聯絡電話",
      info: "+886-2-1234-5678",
      description: "週一至週五 9:00-18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "電子信箱",
      info: "info@hudence.com",
      description: "24小時內回覆"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "辦公地址",
      info: "台北市信義區信義路五段 7 號",
      description: "捷運市政府站 2 號出口"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "營業時間",
      info: "週一至週日 9:00-21:00",
      description: "國定假日正常營業"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡可以添加表單提交邏輯
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

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
    <section id="contact" className="section-padding bg-gray-50">
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
            聯絡 <span className="text-primary-600">我們</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            有任何問題或需要諮詢嗎？我們的專業團隊隨時為您提供協助，
            讓我們一起為孩子打造最適合的學習環境。
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              聯絡資訊
            </h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <div className="text-primary-600">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-primary-600 font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                交通位置
              </h4>
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>地圖載入中...</p>
                  <p className="text-sm">或點擊查看 Google Maps</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              免費諮詢
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  訊息已成功送出！
                </h4>
                <p className="text-gray-600">
                  我們將在 24 小時內與您聯繫
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      聯絡電話 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="請輸入您的電話"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電子信箱 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="請輸入您的電子信箱"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    諮詢主題
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="">請選擇諮詢主題</option>
                    <option value="course">課程諮詢</option>
                    <option value="cooperation">合作洽談</option>
                    <option value="visit">參觀預約</option>
                    <option value="other">其他問題</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    詳細訊息 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="請詳細描述您的需求或問題..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>送出訊息</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            常見問題
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Q: 適合什麼年齡的孩子？
              </h4>
              <p className="text-gray-600">
                我們的課程設計涵蓋 6-18 歲的學童，依據不同年齡層提供合適的課程內容，從視覺化程式設計到進階的 AI 應用。
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Q: 沒有程式基礎可以學習嗎？
              </h4>
              <p className="text-gray-600">
                當然可以！我們有專為零基礎學生設計的入門課程，透過遊戲化的方式讓孩子輕鬆入門。
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Q: 課程費用如何計算？
              </h4>
              <p className="text-gray-600">
                課程費用依據不同課程類型和時數而定，我們提供彈性的付費方案，詳細費用請聯絡我們索取報價。
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Q: 有提供試聽課程嗎？
              </h4>
              <p className="text-gray-600">
                有的！我們提供免費試聽課程，讓孩子和家長可以先體驗我們的教學方式，滿意再報名正式課程。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 