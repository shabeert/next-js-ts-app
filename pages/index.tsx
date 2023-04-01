import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cards from '@/components/cards'
import Offer from '@/components/offer'
import TakeCourse from '@/components/takecourse'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
         <Cards/>
         <Offer/>
         <TakeCourse/>
      </main>
      
    </>
  )
}
