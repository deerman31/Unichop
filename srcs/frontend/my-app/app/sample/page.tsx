// app/sample/page.tsx

'use client'

import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export default function Sample() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Unichop: タスク管理の革新</h1>
          <p className="text-2xl text-blue-100">生産性向上へのシンプルな道</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Unichopへようこそ。私たちは、タスク管理の方法を根本から見直し、真の生産性向上を実現するためのサービスを提供しています。
            </p>

            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Unichopが選ばれる理由</h2>
            <Accordion.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-4"
            >
              <AccordionItem value="item-1" title="タスクの最適化">
                大きな課題を恐れる必要はありません。Unichopは、複雑なタスクを処理しやすい小さな単位に分割する手助けをします。
              </AccordionItem>
              <AccordionItem value="item-2" title="賢い優先順位付け">
                すべてのタスクが同じ重要性を持つわけではありません。Unichopの直感的なインターフェースで、タスクを効率的に並び替え、最適な順序で処理できます。
              </AccordionItem>
              <AccordionItem value="item-3" title="集中力の極大化">
                マルチタスクは生産性の敵です。Unichopは、一度に1つのタスクに集中することを促進し、作業の質と速度を向上させます。
              </AccordionItem>
            </Accordion.Root>

            <h2 className="text-3xl font-semibold mt-12 mb-6 text-blue-600">なぜUnichopなのか？</h2>
            <p className="text-xl mb-6 text-gray-600 leading-relaxed">
              既存のタスク管理ツールは、予定を整理するには役立ちますが、本当の意味での生産性向上にはつながりませんでした。私たちは、真に効率的な人々の働き方を観察し、その洞察をUnichopに取り入れました。
            </p>
            <p className="text-xl mb-4 text-gray-600">Unichopは、タスク管理の新しい哲学を体現しています：</p>
            <ul className="list-none mb-8 space-y-4">
              {['適切な大きさへのタスクの分割', '賢明な優先順位付け', '一点集中の実践'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center text-gray-700"
                >
                  <span className="bg-blue-500 rounded-full p-2 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="text-center mt-12">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600">始めましょう</h2>
              <p className="text-xl mb-8 text-gray-600">
                今すぐUnichopを試して、タスク管理の新しい世界を体験してください。生産性の向上が、あなたの指先から始まります。
              </p>
              <div className="space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
                >
                  今すぐ始める
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
                >
                  詳細を見る
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

interface AccordionItemProps {
  value: string
  title: string
  children: React.ReactNode
}

function AccordionItem({ value, title, children }: AccordionItemProps) {
  return (
    <Accordion.Item value={value} className="border border-gray-200 rounded-lg overflow-hidden">
      <Accordion.Header>
        <Accordion.Trigger className="flex justify-between items-center w-full p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
          <span className="text-lg font-medium text-gray-700">{title}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-500 transform transition-transform duration-300" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="p-5 bg-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600"
        >
          {children}
        </motion.div>
      </Accordion.Content>
    </Accordion.Item>
  )
}