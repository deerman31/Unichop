// app/test/page.tsx
import TestButton from './TestButton'
import TestDialog from './TestDialog'

export default function TestPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Next.js + Tailwind + Radix UI Sample</h1>
      <div className="space-y-4">
        <TestButton />
        <TestDialog />
      </div>
    </div>
  )
}