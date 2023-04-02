import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Cards from '@/components/Cards'
import Offer from '@/components/offers/offers'
import TakeCourse from '@/components/TakeCourse'
import axios from 'axios'
import { log } from 'console'
import Banner from '@/components/banner'
import OurCourses from '@/components/courses/ourcourses'
import TeachersList from '@/components/teachers/TeachersList'
import ReviewsList from '@/components/Reviews/reviews'


const HomePage = (props : any) => {
  return (
    <>
    <Banner  items = {props.banner}></Banner>    
    <Cards cards={props.cards} />    
    <Offer offers={props.offers} contents={props.contents}/>    
    <TakeCourse promos={props.promos}/>
    <OurCourses courses = {props.courses}></OurCourses>    
    <TeachersList teachers={props.teachers}></TeachersList>
    <ReviewsList reviews={props.reviews}></ReviewsList>
    </>
  );
};


export const getStaticProps = async () => {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/cards.json`
  );
  const cardsData= response.data;

  response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/promocontent.json`
  );
  const promoData= response.data;
  
  response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/banners.json`
  );
  const bannerData= response.data;

  response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/courses.json `
  );
  const ourCoursesData= response.data;
  
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/teachers.json`
  );
  const teachersData = response.data;
  
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/reviews.json`
  );
  const reviewsData = response.data;

  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/offers.json`
  );
  const offersData = response.data;

  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/contentblock.json`
  );
  const contentBlockData = response.data;
  return {
    props: {
      cards: cardsData,
      promos: promoData,
      banner: bannerData,
      courses: ourCoursesData,
      teachers: teachersData,
      reviews: reviewsData,
      offers: offersData,
      contents: contentBlockData,
    },
  };
};
export default HomePage;
