import { motion } from 'framer-motion'

export default function WhyUnichop() {
  return (
    <section id="why-unichop">
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
    </section>
  )
}