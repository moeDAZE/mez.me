'use client'

import { motion } from 'motion/react'
import { cn } from "@/utils/cn"
import Navbar from './Navbar'

const Header = () => {

  return (
    <motion.header
      className={cn(
        'bg-background/30 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors',
      )}
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
      <div className='flex items-center gap-2'>
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