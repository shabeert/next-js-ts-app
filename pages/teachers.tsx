import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import TeachersList from '@/components/teachers/TeachersList'

import NavBanner from "@/components/navbanner";
import axios from 'axios'
import FooterComponent from '@/components/footer'
import HeaderComponent from '@/components/header'


const inter = Inter({ subsets: ['latin'] })

export default function Teachers(props : any) {
  return (
    <>     
      <HeaderComponent layoutdata={props.footer}></HeaderComponent> 
      <NavBanner banner = {props.navbanner} ></NavBanner>
      <TeachersList teachers={props.teachers}></TeachersList>
      <FooterComponent layoutdata={props.footer}></FooterComponent> 
     
      
    </>
  )
}
export async function getStaticProps() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/teachers.json`
  );
  const teachersData = response.data;
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/navbanners.json`
  );
  const navbannerData= response.data;
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/footer.json`
  );
  const FooterData = response.data;
  return {
    props: {
      teachers: teachersData,
      navbanner: navbannerData.teacher,
      footer:FooterData
    },
  };
}
