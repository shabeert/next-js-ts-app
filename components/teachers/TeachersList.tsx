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


export default TeachersList;
