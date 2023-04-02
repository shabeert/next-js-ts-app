import CoursesList from "../components/courses/courseslist"

import axios from "axios";
import NavBanner from "@/components/navbanner";
function Courses(props:any) {
  return (
    <>
    <NavBanner banner = {props.navbanner} ></NavBanner>
     <CoursesList courses = {props.courses}></CoursesList>
    </>
  );
}
export const getStaticProps = async () => {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/courses.json `
  );
  const ourCoursesData= response.data;
  response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/navbanners.json`
  );
  const navbannerData= response.data;
  return {
    props: {     
      courses: ourCoursesData,
      navbanner : navbannerData.courses
    },
  };
};

export default Courses;
