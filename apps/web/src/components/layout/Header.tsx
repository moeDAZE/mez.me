'use client'

import { GradientText } from '../ui/TextGradient'
import Navbar from './Navbar'
import Link from 'next/link'


const Header = () => {

  return (
    <header
      className=
      'bg-gradient-to-tr from-yellow-100/30 via-pink-200/30 to-sky-200/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-none transition-colors'
    >
      <Link href={'/'} className='text-gray-500 max-w-30'>
        <GradientText className="text-3xl font-bold" text="mez" />
      </Link>
      <div className='flex items-center gap-2 '>
        <Navbar />
        {/* <ThemeSwitcher />
        <LocaleSwitcher />
        <CommandMenu />
        <MobileNav /> */}
      </div>
    </header>
  )
}

export default Header