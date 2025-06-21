'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, User, ArrowRight, Award, Users, BookOpen } from 'lucide-react'

const News = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const newsItems = [
    {
      id: 1,
      title: "艾登星榮獲「最佳科技教育機構」獎項",
      excerpt: "在 2024 年教育科技大會中，艾登星憑藉創新的教學方法和優秀的學生成果，榮獲最佳科技教育機構獎項。",
      date: "2024-03-15",
      author: "艾登星團隊",
      category: "獲獎消息",
      image: "/api/placeholder/400/250",
      readTime: "3 分鐘閱讀",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 2,
      title: "新學期課程開放報名中",
      excerpt: "2024 春季班即將開課！包含 AI 程式設計、App 開發、遊戲製作等熱門課程，現正開放報名中。",
      date: "2024-02-28",
      author: "課程部",
      category: "課程公告",
      image: "/api/placeholder/400/250",
      readTime: "2 分鐘閱讀",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 3,
      title: "學生作品入選國際青少年科技競賽",
      excerpt: "恭喜我們的學生小明和小華，他們的 AI 環保監測系統成功入選國際青少年科技競賽決賽。",
      date: "2024-02-20",
      author: "教學部",
      category: "學生成就",
      image: "/api/placeholder/400/250",
      readTime: "4 分鐘閱讀",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      title: "與臺北市教育局簽署合作備忘錄",
      excerpt: "艾登星正式與臺北市教育局簽署合作備忘錄，將為更多學校提供優質的科技教育資源。",
      date: "2024-02-10",
      author: "公關部",
      category: "合作夥伴",
      image: "/api/placeholder/400/250",
      readTime: "3 分鐘閱讀",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 5,
      title: "寒假營隊圓滿結束",
      excerpt: "為期兩週的寒假科技營隊圓滿結束，共有 120 位學生參與，完成了 50 個創意專案。",
      date: "2024-01-25",
      author: "營隊部",
      category: "活動回顧",
      image: "/api/placeholder/400/250",
      readTime: "5 分鐘閱讀",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 6,
      title: "線上學習平台重大更新",
      excerpt: "我們的線上學習平台推出重大更新，新增 AI 助教功能和互動式程式編輯器。",
      date: "2024-01-15",
      author: "技術部",
      category: "平台更新",
      image: "/api/placeholder/400/250",
      readTime: "3 分鐘閱讀",
      icon: <BookOpen className="w-5 h-5" />
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="news" className="section-padding bg-white">
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
            最新 <span className="text-primary-600">消息</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            掌握艾登星的最新動態，包含獲獎消息、課程更新、學生成就等重要資訊。
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-primary-600 flex items-center space-x-1">
                  {news.icon}
                  <span>{news.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(news.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{news.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {news.readTime}
                  </span>
                  <button className="flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group">
                    <span>閱讀更多</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            載入更多消息
          </button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              訂閱電子報
            </h3>
            <p className="text-gray-600 mb-6">
              第一時間獲得最新課程資訊和教育趨勢
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="請輸入您的電子郵件"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                立即訂閱
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default News 