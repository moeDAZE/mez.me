import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <section>{children}</section>
  )
}

export default Layout