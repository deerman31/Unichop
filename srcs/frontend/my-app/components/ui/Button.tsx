// components/ui/Button.tsx
import * as React from 'react'

// Tailwind CSSを使用してボタンのスタイルを定義
const buttonClasses = `
  bg-blue-500
  hover:bg-blue-600
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
`

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`${buttonClasses} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'