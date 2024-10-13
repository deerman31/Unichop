// app/test/TestDialog.tsx
'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export default function TestDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Radix UI Dialog</h2>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Open Dialog
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl">
            <Dialog.Title className="text-lg font-bold mb-2">Dialog Title</Dialog.Title>
            <Dialog.Description className="mb-4">
              This is a dialog component from Radix UI.
            </Dialog.Description>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}