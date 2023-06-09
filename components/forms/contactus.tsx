import axios from "axios";
import { useReducer, useRef, useState } from "react";


const ContactUsForm = () => {
 
  const messageInput = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef =useRef<HTMLInputElement>(null);
  const [submitState, setSubmitState] = useState(false);
  

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setSubmitState(false);
    var enquiry = {
        email : emailRef.current?.value,
        firstname : firstNameRef.current?.value,
        lastname : lastNameRef.current?.value,
        phone : phoneRef.current?.value,
        message : messageInput.current?.value
    };
    const response = await axios.post('https://horizontal-demo-default-rtdb.firebaseio.com/contactus.json', JSON.stringify(enquiry));
    if(response.status === 200){
        setSubmitState(true);
    }
    console.log(response.data);
    event.target.reset();
  };

  const firstNameChangeHandler = () => {
    setSubmitState(false);
  };

  return (
    <section
      className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
      style={{ backgroundImage: "url(images/bg_5.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 py-5 px-md-5 bg-primary">
            <div className="heading-section heading-section-white ftco-animate mb-5">
              <h2 className="mb-4">Contact Us</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <form onSubmit={submitHandler} className="appointment-form ftco-animate">
              <div className="d-md-flex">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    ref={firstNameRef}
                    onFocus={firstNameChangeHandler}
                  />
                </div>
                <div className="form-group ml-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    ref={lastNameRef}
                  />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group ml-md-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="form-group ml-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    ref={phoneRef}
                  />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                    ref={messageInput}
                    required
                  />
                </div>
                <div className="form-group ml-md-4">
                  <input
                    type="submit"
                    defaultValue="Submit"
                    className="btn btn-secondary py-3 px-4"
                  />
                </div>
              </div>
              {submitState && <p className="success">Your Record is Successfully Inserted</p>}
              
    <style jsx>{`
        .success
        {
         font-size: 14px;
         font-color : green;
        }
      `}</style>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactUsForm;
