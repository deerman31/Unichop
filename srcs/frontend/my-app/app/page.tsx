'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Home/Header'
import Features from '@/components/Home/Features'
import WhyUnichop from '@/components/Home/WhyUnichop'
import GetStarted from '@/components/Home/GetStarted'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">Unichop: タスク管理の革新</h2>
          <p className="text-2xl text-blue-100">生産性向上へのシンプルな道</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Unichopへようこそ。私たちは、タスク管理の方法を根本から見直し、真の生産性向上を実現するためのサービスを提供しています。
            </p>
            <Features />
            <WhyUnichop />
            <GetStarted />
          </div>
        </div>
      </main>

    </div>
  )
}