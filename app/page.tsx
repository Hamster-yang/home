'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Courses from './components/Courses'
import Portfolio from './components/Portfolio'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Portfolio />
      <News />
      <Contact />
      <Footer />
    </main>
  )
} 