import Footer from './layout/Footer'
import Header from './layout/Header'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <main className='z-50 mx-auto w-full max-w-5xl mb-16 flex-1 px-4 py-24 sm:px-8'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
