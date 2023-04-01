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
import Banner from '@/components/banner'
import OurCourses from '@/components/courses/ourcourses'


const HomePage = (props : any) => {
  return (
    <>
    <Banner  items = {props.banner}></Banner>    
    <Cards cards={props.cards} />    
    <Offer/>    
    <TakeCourse/>
    <OurCourses courses = {props.courses}></OurCourses>
    </>
  );
};


export const getStaticProps = async () => {
  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/cards.json`
  );
  const cardsData= response.data;

  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/promocontent.json`
  );
  const promoData= response.data;
  
  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/banners.json`
  );
  const bannerData= response.data;

  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/courses.json `
  );
  const ourCoursesData= response.data;

  return {
    props: {
      cards: cardsData,
      promos: promoData,
      banner: bannerData,
      courses: ourCoursesData,
    },
  };
};
export default HomePage;
