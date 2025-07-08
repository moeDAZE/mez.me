'use client'
import React from 'react'
import '@/styles/global.css'
import DotGrid from '@/components/shared/DotGrid'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <html>
      <body className='bg-[#E8E8E8]'>
        <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
          <DotGrid
            dotSize={2}
            gap={50}
            baseColor="#d4d4d8"
            activeColor="#dc2626"
            proximity={120}
            shockRadius={200}
            shockStrength={5}
            resistance={750}
            returnDuration={2}
          />
        </div>
        {children}
      </body>
    </html>
  )
}

export default Layout