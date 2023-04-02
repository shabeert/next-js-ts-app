import { CourseProps } from "./coursesprops";
const Course = (props: CourseProps) => {
  const imageUrlString = `url(/${props.image})`;
  return (
    <div className="col-md-12 col-lg-12 ftco-animate">
      <div className="staff">
        <div className="img-wrap d-flex align-items-stretch">
          <div
            className="img align-self-stretch"
            style={{ backgroundImage: imageUrlString }}
          />
        </div>
        <div className="text pt-3 text-center">
          <h3>{props.name}</h3>
          <span className="position mb-2">{props.classtime}</span>
          <div className="faded">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
