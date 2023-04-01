import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import TeachersList from '@/components/teachers/TeachersList'



const inter = Inter({ subsets: ['latin'] })

export default function Teachers(props : any) {
  return (
    <>     
     
      <TeachersList teachers={props.teachers}></TeachersList>
      
      
    </>
  )
}

const DUMMY_TEACHERS = [
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "TEACHER",
    id: "teacher-001",
    image: "images/teacher-1.jpg",
    isfeatured: true,
    name: "Bianca Wilson",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ENGLISH TEACHER",
    id: "teacher-002",
    image: "images/teacher-2.jpg",
    isfeatured: true,
    name: "Mitch Parker",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ENGLISH TEACHER",
    id: "teacher-003",
    image: "images/teacher-2.jpg",
    isfeatured: true,
    name: "Mitch Parker",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ARTS TEACHER",
    id: "teacher-004",
    image: "images/teacher-3.jpg",
    isfeatured: true,
    name: "Stella Smith",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "SCIENCE TEACHER",
    id: "teacher-005",
    image: "images/teacher-4.jpg",
    isfeatured: true,
    name: "Monshe Henderson",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "TEACHER",
    id: "teacher-006",
    image: "images/teacher-5.jpg",
    isfeatured: false,
    name: "Daniel Tribor",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ARTS TEACHER",
    id: "teacher-007",
    image: "images/teacher-6.jpg",
    isfeatured: false,
    name: "Daniel Smith",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "MATHS TEACHER",
    id: "teacher-008",
    image: "images/teacher-7.jpg",
    isfeatured: false,
    name: "Stella Dan",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "SPORTS TEACHER",
    id: "teacher-009",
    image: "images/teacher-8.jpg",
    isfeatured: false,
    name: "Amelia Kerr",
  },
];

export async function getStaticProps() {
  return {
    props: {
      teachers: DUMMY_TEACHERS,
    },
  };
}
