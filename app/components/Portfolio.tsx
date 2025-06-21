'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ExternalLink, Award, Code, Palette, Gamepad2 } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: '全部作品', icon: <Award className="w-4 h-4" /> },
    { id: 'programming', label: '程式專案', icon: <Code className="w-4 h-4" /> },
    { id: 'design', label: '設計作品', icon: <Palette className="w-4 h-4" /> },
    { id: 'games', label: '遊戲作品', icon: <Gamepad2 className="w-4 h-4" /> }
  ]

  const projects = [
    {
      id: 1,
      title: "智慧家居控制系統",
      student: "小明 (14歲)",
      category: "programming",
      description: "使用 Arduino 和手機 App 控制家中燈光和溫度",
      technologies: ["Arduino", "React Native", "IoT"],
      image: "/api/placeholder/400/300",
      award: "全國創客大賽 金獎",
      link: "#"
    },
    {
      id: 2,
      title: "環保回收小遊戲",
      student: "小華 (12歲)",
      category: "games",
      description: "寓教於樂的環保主題 Scratch 遊戲",
      technologies: ["Scratch", "遊戲設計", "環保教育"],
      image: "/api/placeholder/400/300",
      award: "校園程式設計競賽 優選",
      link: "#"
    },
    {
      id: 3,
      title: "校園導覽 AR App",
      student: "小美 (16歲)",
      category: "programming",
      description: "結合 AR 技術的互動式校園導覽應用",
      technologies: ["Unity", "ARCore", "C#"],
      image: "/api/placeholder/400/300",
      award: "青少年科技展 特優",
      link: "#"
    },
    {
      id: 4,
      title: "動態海報設計",
      student: "小強 (13歲)",
      category: "design",
      description: "為學校活動設計的互動式動態海報",
      technologies: ["After Effects", "Illustrator", "動畫設計"],
      image: "/api/placeholder/400/300",
      award: "設計新星獎",
      link: "#"
    },
    {
      id: 5,
      title: "AI 聊天機器人",
      student: "小雯 (15歲)",
      category: "programming",
      description: "能夠回答學習問題的 AI 助手",
      technologies: ["Python", "NLP", "機器學習"],
      image: "/api/placeholder/400/300",
      award: "AI 創新應用獎",
      link: "#"
    },
    {
      id: 6,
      title: "太空冒險遊戲",
      student: "小傑 (11歲)",
      category: "games",
      description: "充滿想像力的太空探索冒險遊戲",
      technologies: ["Unity", "C#", "遊戲美術"],
      image: "/api/placeholder/400/300",
      award: "最佳創意獎",
      link: "#"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    <section id="portfolio" className="section-padding bg-gray-50">
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
            學生 <span className="text-primary-600">作品集</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            看看我們學生的優秀作品，從程式專案到創意設計，
            每一個作品都展現了孩子們無限的創造力和學習成果。
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors">
                      <Play className="w-5 h-5 text-primary-600" />
                    </button>
                    <button className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors">
                      <ExternalLink className="w-5 h-5 text-primary-600" />
                    </button>
                  </div>
                </div>
                {project.award && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                    🏆 {project.award}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-primary-600 font-medium mb-3">
                  作者：{project.student}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
                  查看詳情
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              讓您的孩子也能創造出精彩作品！
            </h3>
            <p className="text-xl mb-6 opacity-90">
              立即報名我們的課程，開啟孩子的科技創作之旅
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
              立即報名課程
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 