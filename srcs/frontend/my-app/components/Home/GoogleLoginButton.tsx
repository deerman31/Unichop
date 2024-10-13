import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FcGoogle } from 'react-icons/fc' // Googleアイコンをインポート

//bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300
export function GoogleLoginButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
      onClick={onOpen}
    >
      始めましょう
    </button>
  )
}

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          <Dialog.Title className="text-2xl font-bold mb-4 text-blue-600">Unichopを始める</Dialog.Title>
          <div className="space-y-4">
            <button
              className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded flex items-center justify-center hover:bg-gray-50 transition duration-300"
              onClick={() => {/* Google login logic */}}
            >
              <FcGoogle className='w-10 h-10 mr-7' />{/* Googleアイコンを使用 */}
              Googleでログイン
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}