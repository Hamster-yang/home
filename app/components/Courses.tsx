'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Users, Star, Calendar } from 'lucide-react'

const Courses = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState('beginner')

  const courseTabs = [
    { id: 'beginner', label: '初級課程', description: '適合 6-9 歲學童' },
    { id: 'intermediate', label: '中級課程', description: '適合 10-13 歲學生' },
    { id: 'advanced', label: '高級課程', description: '適合 14+ 歲學生' }
  ]

  const courses = {
    beginner: [
      {
        title: "Scratch 動畫設計",
        description: "透過拖拽積木學習程式邏輯，創作有趣的動畫故事",
        duration: "12 週",
        students: "8-10 人",
        rating: 4.9,
        price: "NT$ 4,800",
        image: "/api/placeholder/300/200",
        features: ["視覺化程式設計", "創意動畫製作", "邏輯思維訓練"]
      },
      {
        title: "小小創客工坊",
        description: "結合手作與科技，使用簡單的電子元件創作作品",
        duration: "10 週",
        students: "6-8 人",
        rating: 4.8,
        price: "NT$ 5,200",
        image: "/api/placeholder/300/200",
        features: ["Arduino 入門", "感測器體驗", "創意手作"]
      }
    ],
    intermediate: [
      {
        title: "Python 程式設計",
        description: "學習最受歡迎的程式語言，培養扎實的程式基礎",
        duration: "16 週",
        students: "10-12 人",
        rating: 4.9,
        price: "NT$ 6,800",
        image: "/api/placeholder/300/200",
        features: ["Python 語法", "演算法思維", "專案實作"]
      },
      {
        title: "網頁設計入門",
        description: "學習 HTML、CSS、JavaScript，打造個人網站",
        duration: "14 週",
        students: "8-10 人",
        rating: 4.7,
        price: "NT$ 6,200",
        image: "/api/placeholder/300/200",
        features: ["前端技術", "響應式設計", "作品發布"]
      }
    ],
    advanced: [
      {
        title: "App 開發實戰",
        description: "完整的行動應用開發課程，從企劃到上架",
        duration: "20 週",
        students: "8-10 人",
        rating: 5.0,
        price: "NT$ 8,800",
        image: "/api/placeholder/300/200",
        features: ["React Native", "UI/UX 設計", "App Store 上架"]
      },
      {
        title: "AI 機器學習",
        description: "探索人工智慧的奧祕，實作機器學習專案",
        duration: "18 週",
        students: "6-8 人",
        rating: 4.9,
        price: "NT$ 9,200",
        image: "/api/placeholder/300/200",
        features: ["機器學習基礎", "TensorFlow", "實際應用專案"]
      }
    ]
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
    <section id="courses" className="section-padding bg-white">
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
            精選 <span className="text-primary-600">課程介紹</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            依據不同年齡層設計的課程，讓每個孩子都能找到適合的學習起點，
            循序漸進地建立科技素養。
          </motion.p>
        </motion.div>

        {/* Course Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-center mb-12"
        >
          <div className="flex bg-gray-100 rounded-xl p-2">
            {courseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white shadow-md text-primary-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tab.label}</div>
                  <div className="text-sm opacity-75">{tab.description}</div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {courses[activeTab as keyof typeof courses].map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold mb-1">{course.title}</div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star size={16} />
                    <span className="text-sm">{course.rating}/5.0</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm">隨時開班</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    {course.price}
                  </div>
                  <button className="btn-primary">
                    立即報名
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Courses 