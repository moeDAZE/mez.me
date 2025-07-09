'use client'

import MainLayout from '@/components/main-layout'
import GoToHome from '@/components/go-to-home'
import CircularText from '@/components/ui/TextCircular'
import Link from 'next/link'

const NotFound = () => {

  return (
    <MainLayout>
      <div className='flex flex-col justify-center items-center'>
        <CircularText
          text="404 - NOT FOUND - "
          onHover="slowDown"
          spinDuration={20}
          className="custom-class"
        />
        <div className='my-25 z-40'>
          <Link href={'/'} className="z-50 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            回到首页
          </Link></div>
      </div>

      <GoToHome />

    </MainLayout>
  )
}

export default NotFound
