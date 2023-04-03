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
import HeaderComponent from '@/components/header'
import { layouttype } from '@/components/layout/LayoutData'
import FooterComponent from '@/components/footer'


const HomePage = (props : any) => {
  console.log(props.footer);
  return (
    <>
     <HeaderComponent layoutdata={props.footer}></HeaderComponent> 
    <Banner  items = {props.banner}></Banner>  
    <Cards cards={props.cards} />    
    <Offer offers={props.offers} contents={props.contents}/>    
    <TakeCourse promos={props.promos}/>
    <OurCourses courses = {props.courses}></OurCourses>    
    <TeachersList teachers={props.teachers}></TeachersList>
    <ReviewsList reviews={props.reviews}></ReviewsList>
    <FooterComponent layoutdata={props.footer}></FooterComponent>
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
    `${process.env.NEXT_PUBLIC_HostName}/offers.json`
  );
  const offersData = response.data;

  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/contentblock.json`
  );
  const contentBlockData = response.data;
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/footer.json`
  );
  const FooterData = response.data;
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
      footer: FooterData
    },
  };
};
export default HomePage;
