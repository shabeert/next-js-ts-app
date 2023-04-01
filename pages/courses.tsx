import CoursesList from "../components/courses/courseslist"

import axios from "axios";
import NavBanner from "@/components/navbanner";
function Courses(props:any) {
  return (
    <>
    <NavBanner items = {props.navbanner} ></NavBanner>
     <CoursesList courses = {props.courses}></CoursesList>
    </>
  );
}
export const getStaticProps = async () => {
  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/courses.json `
  );
  const ourCoursesData= response.data;
  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/banners.json`
  );
  const navbannerData= response.data;
  return {
    props: {     
      courses: ourCoursesData,
      navbanner : navbannerData
    },
  };
};

export default Courses;
