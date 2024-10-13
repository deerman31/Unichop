import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import AccordionItem from './AccordionItem'

export default function Features() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  return (
    <section id="features">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Unichopが選ばれる理由</h2>
      <Tabs.Root defaultValue="tab1" className="mb-8">
        <Tabs.List className="flex border-b border-gray-200">
          <Tabs.Trigger value="tab1" className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
            主要機能
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
            ユーザー体験
          </Tabs.Trigger>
          <Tabs.Trigger value="tab3" className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
            フィードバック
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className="pt-4">
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
        </Tabs.Content>
        <Tabs.Content value="tab2" className="pt-4">
          <p className="text-gray-600">
            Unichopは、ユーザーフレンドリーなインターフェースと直感的な操作性を提供します。
            タスクの追加、編集、完了がスムーズに行え、ストレスフリーな体験を実現します。
            私たちは常にユーザーフィードバックに耳を傾け、継続的に改善を行っています。
          </p>
        </Tabs.Content>
        <Tabs.Content value="tab3" className="pt-4">
          <p className="text-gray-600">
            Unichopを使用したユーザーから、生産性の向上や作業効率の改善に関する肯定的なフィードバックをいただいています。
            具体的な数値は個人や状況によって異なりますが、多くのユーザーがタスク管理の改善を実感しています。
            私たちは、ユーザーの声を大切にし、それに基づいてサービスを継続的に改善しています。
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  )
}