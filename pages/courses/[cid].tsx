import { useRouter } from "next/router";
import axios from "axios";
import { CourseProps } from "@/components/courses/coursesprops";
import Course from "@/components/courses/course";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import Head from "next/head";

const CourseDetail = (props: any) => {
  const router = useRouter();
  const { cid } = router.query;
  const metaDescription = `This is a desription for  cid ${cid}`;
  const courseDetails = props.courses
    .filter((c: CourseProps) => c.id.toString() == cid)
    .map((c: CourseProps) => (
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

  return (
    <>
      <Head>
        <title>{cid}</title>
        <meta name="description" content={metaDescription}></meta>
      </Head>
      <HeaderComponent layoutdata={props.footer}></HeaderComponent>
      <div className="row">{courseDetails}</div>
      <FooterComponent layoutdata={props.footer}></FooterComponent>
    </>
  );
};

export async function getStaticPaths() {
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/courses.json `
  );
  const ourCoursesData = response.data;
  const paths = ourCoursesData.map((c: CourseProps) => ({
    params: { cid: c.id },
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
  var response = await axios.get(
    `${process.env.NEXT_PUBLIC_HostName}/footer.json`
  );
  const FooterData = response.data;

  return {
    props: {
      courses: ourCoursesData,
      footer: FooterData,
    },
  };
};
export default CourseDetail;
