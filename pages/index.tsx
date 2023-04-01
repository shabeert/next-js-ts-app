import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cards from '@/components/Cards'
import Offer from '@/components/Offer'
import TakeCourse from '@/components/TakeCourse'

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
