'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Award, Lightbulb } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const stats = [
    { number: '500+', label: '學生', icon: <Users className="w-8 h-8" /> },
    { number: '50+', label: '合作學校', icon: <BookOpen className="w-8 h-8" /> },
    { number: '100+', label: '優秀作品', icon: <Award className="w-8 h-8" /> },
    { number: '5+', label: '年經驗', icon: <Lightbulb className="w-8 h-8" /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
    <section id="about" className="section-padding bg-white">
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
            關於 <span className="text-primary-600">艾登星</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            艾登星（Hudence）致力於推動科技教育創新，透過專業的教學團隊和先進的教學方法，
            為學生提供最優質的學習體驗。我們相信每個孩子都有無限的潛能，
            只需要正確的引導和啟發。
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              我們的使命
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              透過創新的科技教育課程，培養學生的邏輯思維、創造力和問題解決能力。
              我們不僅教授技術知識，更注重培養學生的全人發展。
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">提供個人化的學習體驗</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">培養 21 世紀核心技能</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">建立學習社群和合作精神</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              我們的價值
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">創新思維</h4>
                  <p className="text-gray-600">鼓勵創意與創新思考</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">團隊合作</h4>
                  <p className="text-gray-600">重視溝通與協作能力</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">卓越品質</h4>
                  <p className="text-gray-600">追求教學品質的極致</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-xl shadow-lg p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <div className="text-primary-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 