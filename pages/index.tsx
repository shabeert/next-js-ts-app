import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Reviews from '@/components/Reviews/reviews'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props:any) {
  return (
    <>
      
     
      <div>Main component</div>
      <Reviews reviewsList={props.reviewsData}></Reviews>
      
    </>
  )
}

const Dummy_review = {
  title: "What Parents Says About Us",
  description: "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country",
  cards: [
    {
      "backgroundImage": "images/teacher-3.jpg",
      "icon": "icon-quote-left",
      "cardDescription": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      "cardName": "Mark Huff",
      "cardPosition": "Mother"
    },
    {
      "backgroundImage": "images/teacher-4.jpg",
      "icon": "icon-quote-left",
      "cardDescription": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      "cardName": "Rodel Golez",
      "cardPosition": "Mother"
    },
    {
      "backgroundImage": "images/teacher-1.jpg",
      "icon": "icon-quote-left",
      "cardDescription": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      "cardName": "Ken Bosh",
      "cardPosition": "Mother"
    },
    {
      "backgroundImage": "images/teacher-1.jpg",
      "icon": "icon-quote-left",
      "cardDescription": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      "cardName": "Racky Henderson",
      "cardPosition": "Mother"
    }
  ]
}
export async function getStaticProps() {
  return {
    props: {
      reviewsData:Dummy_review,
    },
  };
}