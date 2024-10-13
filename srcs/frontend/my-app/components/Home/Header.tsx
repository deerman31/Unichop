import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { GoogleLoginButton,LoginModal } from './GoogleLoginButton'

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Unichop</h1>
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">特徴</a></li>
            <li><a href="#why-unichop" className="text-gray-600 hover:text-blue-600">なぜUnichop</a></li>
            <li><a href="#get-started" className="text-gray-600 hover:text-blue-600">始める</a></li>
          </ul>
          <GoogleLoginButton onOpen={() => setIsLoginOpen(true)} />
        </nav>
        <div className="md:hidden flex items-center space-x-4">
          <GoogleLoginButton onOpen={() => setIsLoginOpen(true)} />
          <MobileMenu />
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  )
}


function MobileMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 text-gray-600 hover:text-blue-600">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-2 mt-2">
        <DropdownMenu.Item className="p-2 hover:bg-blue-50 rounded">
          <a href="#features">特徴</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 hover:bg-blue-50 rounded">
          <a href="#why-unichop">なぜUnichop</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 hover:bg-blue-50 rounded">
          <a href="#get-started">始める</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}