import CoursesList from "../components/courses/courseslist"

import axios from "axios";
function Courses(props:any) {
  return (
    <>
     <CoursesList courses = {props.courses}></CoursesList>
    </>
  );
}
export const getStaticProps = async () => {
  var response = await axios.get(
    `https://horizontal-demo-default-rtdb.firebaseio.com/courses.json `
  );
  const ourCoursesData= response.data;

  return {
    props: {     
      courses: ourCoursesData,
    },
  };
};

export default Courses;
