import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Practices from './components/Practices'
import Instruments from './components/Instruments'
import ProcessPersonal from './components/ProcessPersonal'
import Fundamentos from './components/Fundamentos'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Practices />
        <Instruments />
        <ProcessPersonal />
        <Fundamentos />
      </main>
      <Footer />
    </div>
  )
}
