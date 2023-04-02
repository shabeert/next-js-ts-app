const ContactUsCards = () => {
    return(
        <>
           <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-3 d-flex">
          	<div className="bg-light align-self-stretch box p-4 text-center">
          		<h3 className="mb-4">Address</h3>
	            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="bg-light align-self-stretch box p-4 text-center">
          		<h3 className="mb-4">Contact Number</h3>
	            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="bg-light align-self-stretch box p-4 text-center">
          		<h3 className="mb-4">Email Address</h3>
	            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
	          </div>
          </div>
          <div className="col-md-3 d-flex">
          	<div className="bg-light align-self-stretch box p-4 text-center">
          		<h3 className="mb-4">Website</h3>
	            <p><a href="#">yoursite.com</a></p>
	          </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default ContactUsCards;