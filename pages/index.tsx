import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Cards from '@/components/Cards'
import Offer from '@/components/Offer'
import TakeCourse from '@/components/TakeCourse'
import axios from 'axios'
import { log } from 'console'


const HomePage = (props : any) => {
  console.log(props);
  return (
    <>
    <div>
      <div>Welcome to Next.js!</div>
      
    </div>
    <Cards cards={props.cards} />
    <Offer/>
    <TakeCourse/>
    </>
  );
};


export const getStaticProps = async () => {
  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/cards.json`
  );
  const cardsData= response.data;
  console.log(cardsData);
  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/promocontent.json`
  );
  const promoData= response.data;
   
   console.log(promoData);
  return {
    props: {
      cards: cardsData,
      promos: promoData,
    },
  };
};
export default HomePage;
