import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

interface AccordionItemProps {
  value: string
  title: string
  children: React.ReactNode
}

export default function AccordionItem({ value, title, children }: AccordionItemProps) {
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