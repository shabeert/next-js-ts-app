import { DUMMY_COURSEDATA } from "../data/courses";
import { useState } from "react";
function OurCourses() {
  const [courseList, setCourseList] = useState(DUMMY_COURSEDATA);
console.log(courseList);
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4">
                <span>Our</span> Courses
              </h2>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </div>
          </div>
          <div className="row">
          {courseList.map((item) => (
            <div key={item.id} className="col-md-6 course d-lg-flex ftco-animate">
              <div
                className="img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="text bg-light p-4">
                <h3>
                  <a href="#">{item.name}</a>
                </h3>
                <p className="subheading">
                  <span>Class time:</span>{item.classtime}
                </p>
                <p>
                 {item.description}
                </p>
              </div>
            </div>       
          ))};    
          </div>
        </div>
      </section>
    </>
  );
}
export default OurCourses;
