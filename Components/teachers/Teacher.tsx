type TeacherProps = {
  id: string;
  image: string;
  designation: string;
  name: string;
  isfeatured: boolean;
  description: string;
};

const Teacher = (props: TeacherProps) => {
  const imageUrlString = `url(${props.image})`;
  return (
    <div className="col-md-6 col-lg-3 ftco-animate">
      <div className="staff">
        <div className="img-wrap d-flex align-items-stretch">
          <div
            className="img align-self-stretch"
            style={{ backgroundImage: imageUrlString }}
          />
        </div>
        <div className="text pt-3 text-center">
          <h3>{props.name}</h3>
          <span className="position mb-2">{props.designation}</span>
          <div className="faded">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
