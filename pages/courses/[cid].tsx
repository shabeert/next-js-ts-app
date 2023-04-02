import { useRouter } from "next/router";
import { DUMMY_COURSEDATA } from "../../data/courses";
import axios from "axios";
import { useState } from "react";
import {
  CoursesListProps,
  CourseProps,
} from "@/components/courses/coursesprops";
import Course from "@/components/courses/course";
const CourseDetail = (props: CoursesListProps) => {
  const router = useRouter();
  const { cid } = router.query;
  const courseDetails = props.courses
    .filter((c) => c.id.toString() == cid)
    .map((c) => (
      <Course
        id={c.id}
        classtime={c.classtime}
        description={c.description}
        image={c.image}
        isfeatured={c.isfeatured}
        name={c.name}
        key={c.id}
      ></Course>
    ));

  return <><div className="row">
  {courseDetails}
</div></>;
};

export async function getStaticPaths() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/courses.json `
  );
  const ourCoursesData = response.data;
  const paths = ourCoursesData.map((c: CourseProps) => ({
    params: { cid: c.id},
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async () => {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/courses.json `
  );
  const ourCoursesData = response.data;

  return {
    props: {
      courses: ourCoursesData,
    },
  };
};
export default CourseDetail;
