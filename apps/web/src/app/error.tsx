'use client'

import MainLayout from '@/components/main-layout'

type PageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const Page = (props: PageProps) => {
  const { error, reset } = props

  return (
    <MainLayout>
      <div className='space-y-4 px-2 py-8'>
        <h1 className='text-2xl font-bold'>发生了某些错误...</h1>
        {/* <Button onClick={reset}>再试一次</Button> */}


        <div style={{ width: '100%', height: '600px', position: 'relative' }}>

        </div>
        <p className='break-words rounded-md bg-zinc-100 p-4 dark:bg-zinc-800'>{error.message}</p>
      </div>
    </MainLayout>
  )
}

export default Page
