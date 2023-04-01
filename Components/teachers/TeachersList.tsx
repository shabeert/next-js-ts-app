import Teacher from "./Teacher";

type TeachersListProps = {
  teachers: Teacher[];
};

interface Teacher {
  id: string;
  image: string;
  designation: string;
  name: string;
  isfeatured: boolean;
  description: string;
}

const TeachersList = (props: TeachersListProps) => {
  const teachers = props.teachers
    .filter((teacher) => teacher.isfeatured)
    .map((teacher) => (
      <Teacher
        description={teacher.description}
        id={teacher.id}
        image={teacher.image}
        designation={teacher.designation}
        isfeatured={teacher.isfeatured}
        name={teacher.name}
        key={teacher.id}
      ></Teacher>
    ));
  return (
    <section className="ftco-section ftco-no-pb">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">
              <span>Certified</span> Teachers
            </h2>
            <p>
              Separated they live in. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country
            </p>
          </div>
        </div>
        <div className="row">
            {teachers}
        </div>
      </div>
    </section>
  );
};

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
    id: "teacher-002",
    image: "images/teacher-2.jpg",
    isfeatured: true,
    name: "Mitch Parker",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ARTS TEACHER",
    id: "teacher-003",
    image: "images/teacher-3.jpg",
    isfeatured: true,
    name: "Stella Smith",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "SCIENCE TEACHER",
    id: "teacher-004",
    image: "images/teacher-4.jpg",
    isfeatured: true,
    name: "Monshe Henderson",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "TEACHER",
    id: "teacher-005",
    image: "images/teacher-5.jpg",
    isfeatured: false,
    name: "Daniel Tribor",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "ARTS TEACHER",
    id: "teacher-006",
    image: "images/teacher-6.jpg",
    isfeatured: false,
    name: "Daniel Smith",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "MATHS TEACHER",
    id: "teacher-007",
    image: "images/teacher-7.jpg",
    isfeatured: false,
    name: "Stella Dan",
  },
  {
    description:
      "I am an ambitious workaholic, but apart from that, pretty simple person.",
    designation: "SPORTS TEACHER",
    id: "teacher-008",
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

export default TeachersList;
