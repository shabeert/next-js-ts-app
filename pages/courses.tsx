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
    `https://horizontal-demo-default-rtdb.firebaseio.com/courses.json `
  );
  const ourCoursesData= response.data;
  response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/navbanners.json`
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
