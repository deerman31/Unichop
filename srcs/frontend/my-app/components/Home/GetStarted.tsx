import { useState } from 'react'
import { GoogleLoginButton, LoginModal } from './GoogleLoginButton'

export default function GetStarted() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  return (
    <section id="get-started">
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">始めましょう</h2>
        <p className="text-xl mb-8 text-gray-600">
          今すぐUnichopを試して、タスク管理の新しい世界を体験してください。生産性の向上が、あなたの指先から始まります。
        </p>
        <div className="space-x-4">
          <GoogleLoginButton onOpen={() => setIsLoginOpen(true)} />
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  )
}