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
    `https://horizontal-demo-default-rtdb.firebaseio.com/banners.json`
  );
  const navbannerData= {
    "courses":{
          "id":"b1",
      "bannerImage":"images/bg_2.jpg",
      "bannerTitle":"Our Courses",
      "pageTitle":"COURSES",
      "homeTitle":"HOME"
    },
    "pricing":{
          "id":"b2",
      "bannerImage":"images/bg_2.jpg",
      "bannerTitle":"Pricing",
      "pageTitle":"PRICING",
      "homeTitle":"HOME"
    }
  };
  return {
    props: {     
      courses: ourCoursesData,
      navbanner : navbannerData.courses
    },
  };
};

export default Courses;
