import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayout from '@/layouts/PagesLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>first next app</title>
        <meta name="description" content="created by superman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <PageLayout>
   
        <div className='bg-black flex w-2/5 m-auto text-white text-center'>this is a div</div>


    </PageLayout>

    </>
  )
}
