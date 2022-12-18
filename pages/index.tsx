import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  /**
   * api 최초 호출은 여기서 하면 됨
   */

  return (
    <>
      <Head>
        <title>This is home page</title>
      </Head>
      <div>index.tsx</div>
    </>
  )
}
