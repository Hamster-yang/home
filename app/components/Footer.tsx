'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: "課程分類",
      links: [
        { name: "程式設計", href: "#programming" },
        { name: "App 開發", href: "#app-dev" },
        { name: "遊戲設計", href: "#game-design" },
        { name: "AI 人工智慧", href: "#ai" },
        { name: "數位創作", href: "#digital-art" },
        { name: "硬體物聯網", href: "#iot" }
      ]
    },
    {
      title: "服務項目",
      links: [
        { name: "個人課程", href: "#individual" },
        { name: "團體班級", href: "#group" },
        { name: "企業培訓", href: "#corporate" },
        { name: "學校合作", href: "#school" },
        { name: "夏令營隊", href: "#camp" },
        { name: "線上課程", href: "#online" }
      ]
    },
    {
      title: "關於艾登星",
      links: [
        { name: "公司簡介", href: "#about" },
        { name: "師資團隊", href: "#teachers" },
        { name: "教學理念", href: "#philosophy" },
        { name: "學習環境", href: "#environment" },
        { name: "合作夥伴", href: "#partners" },
        { name: "媒體報導", href: "#media" }
      ]
    },
    {
      title: "客戶服務",
      links: [
        { name: "聯絡我們", href: "#contact" },
        { name: "常見問題", href: "#faq" },
        { name: "報名流程", href: "#process" },
        { name: "退費政策", href: "#refund" },
        { name: "隱私政策", href: "#privacy" },
        { name: "服務條款", href: "#terms" }
      ]
    }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
  ]

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: "+886-2-1234-5678" },
    { icon: <Mail className="w-4 h-4" />, text: "info@hudence.com" },
    { icon: <MapPin className="w-4 h-4" />, text: "台北市信義區信義路五段 7 號" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 right-8 bg-primary-600 hover:bg-primary-700 p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container-max px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/Hudence_logo.png"
                alt="Hudence 艾登星"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-xl font-bold">
                Hudence <span className="text-primary-400">艾登星</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              專注於科技教育的領導品牌，致力於培養下一代的創新思維和技術能力。
              透過專業的教學團隊和創新的教學方法，讓每個孩子都能在科技的世界中發光發熱。
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400">
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">訂閱我們的電子報</h3>
              <p className="text-gray-400">
                獲得最新的課程資訊、教育趨勢和獨家優惠
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="請輸入您的電子郵件"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                立即訂閱
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">關注我們</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold mb-4">認證與獎項</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>🏆 最佳科技教育機構 2024</p>
                <p>📜 教育部合格立案</p>
                <p>✅ ISO 9001 品質認證</p>
              </div>
            </div>

            {/* App Download */}
            <div>
              <h4 className="text-lg font-semibold mb-4">下載 App</h4>
              <div className="space-y-3">
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                  📱 iOS App Store
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                  🤖 Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Hudence 艾登星科技教育有限公司. 版權所有
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Hudence Team</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-primary-400 transition-colors">
                隱私政策
              </a>
              <a href="#terms" className="hover:text-primary-400 transition-colors">
                服務條款
              </a>
              <a href="#sitemap" className="hover:text-primary-400 transition-colors">
                網站地圖
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 