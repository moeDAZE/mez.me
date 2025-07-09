'use client'

import { motion } from 'motion/react'
import Navbar from './Navbar'
import Link from 'next/link'


const Header = () => {

  return (
    <motion.header
      className=
        'bg-gradient-to-tr from-yellow-100/30 via-pink-200/30 to-sky-200/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-none transition-colors'
      
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <Link href={'/'} className='text-gray-500'>
        mez
      </Link>
      <div className='flex items-center gap-2 '>
        <Navbar />
        {/* <ThemeSwitcher />
        <LocaleSwitcher />
        <CommandMenu />
        <MobileNav /> */}
      </div>
    </motion.header>
  )
}

export default Header