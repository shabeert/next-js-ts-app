import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import TeachersList from '@/components/teachers/TeachersList'
import ContactUsForm from '@/components/forms/contactus'
import axios from 'axios'



const inter = Inter({ subsets: ['latin'] })

export default function Teachers(props : any) {
  return (
    <>     
     
      <TeachersList teachers={props.teachers}></TeachersList>
      <ContactUsForm></ContactUsForm>
      
    </>
  )
}



export async function getServerSideProps() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/teachers.json`
  );
  const teachersData = response.data;
  return {
    props: {
      teachers: teachersData,
    },
  };
}
