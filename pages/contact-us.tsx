import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import TeachersList from '@/components/teachers/TeachersList'
import ContactUsForm from '@/components/forms/contactus'
import axios from 'axios'
import ContactUsCards from '@/components/contactUsCards'
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'



const inter = Inter({ subsets: ['latin'] })

export default function Teachers(props : any) {
  return (
    <>  
         <HeaderComponent layoutdata={props.footer}></HeaderComponent> 
     <ContactUsCards cards={props.contactUsCards}/>
      <TeachersList teachers={props.teachers}></TeachersList>
      <ContactUsForm></ContactUsForm>
      <FooterComponent layoutdata={props.footer}></FooterComponent> 
      
    </>
  )
}



export async function getServerSideProps() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/teachers.json`
  );
  const teachersData = response.data;

  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/contactuscards.json`
  );
  const contactUsCardsData = response.data;
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/footer.json`
  );
  const FooterData = response.data;
  return {
    props: {
      teachers: teachersData,
      contactUsCards: contactUsCardsData,
      footer:FooterData
    },
  };
}
