import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import TeachersList from '@/components/teachers/TeachersList'
import ContactUsForm from '@/components/forms/contactus'
import axios from 'axios'
import ContactUsCards from '@/components/contactUsCards'



const inter = Inter({ subsets: ['latin'] })

export default function Teachers(props : any) {
  return (
    <>     
     <ContactUsCards cards={props.contactUsCards}/>
      <TeachersList teachers={props.teachers}></TeachersList>
      <ContactUsForm></ContactUsForm>
      
    </>
  )
}



export async function getServerSideProps() {
  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/teachers.json`
  );
  const teachersData = response.data;

  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/contactuscards.json`
  );
  const contactUsCardsData = response.data;
  return {
    props: {
      teachers: teachersData,
      contactUsCards: contactUsCardsData,
    },
  };
}
