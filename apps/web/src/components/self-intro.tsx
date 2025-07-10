import React from 'react'
import { RotatingText } from './ui/TextRotate'
import { RollingText } from './ui/TextRolling'
import Image from 'next/image'

const SelfIntro = () => {
  return (
    <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col flex-wrap gap-2 font-bold text-2xl text-gray-700'>
            <div>欢迎来到我的主页 😅</div>
            <div>
              <RotatingText
                className="text-2xl font-bold"
                containerClassName='flex'
                duration={5000}
                text={['分享✨', '交流✨', '杂谈✨']}
                rawText='学习编程'
                isGradient = {true}
                gradient='linear-gradient(90deg, #ef4444 0%, #06b6d4 20%, #a3e635 50%, #6366f1 80%, #c084fc 100%)'
              />
            </div>
            <div>是演练场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也是
              <RollingText className="text-2xl" text="赛博空间" />
              </div>
          </div>
        </div>
        <div className="w-33 h-33 flex items-center justify-center group">
          <div className="relative w-full h-full rounded-full p-[1px] bg-gradient-to-br from-[#e0e7ef] via-[#f3f4f6] to-[#e8e8e8] group-hover:from-[#6366f1] group-hover:via-[#a3e635] group-hover:to-[#06b6d4] transition-all duration-700 shadow-md group-hover:shadow-xl">
            <Image
              src="/avatar-logo-1.jpg"
              width={132}
              height={132}
              alt="logo"
              className="w-full h-full rounded-full animate-spin-slow group-hover:animate-none"
              style={{ borderRadius: '50%'}}
            />
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow: '0 4px 32px 0 rgba(99,102,241,0.3)'}} />
          </div>
        </div>
      </div>
  )
}

export default SelfIntro