
function HeaderComponent(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
	    	<a className="navbar-brand" href="/">Kiddos</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><a href="/" className="nav-link pl-0">Home</a></li>
	        	<li className="nav-item"><a href="about" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="teachers" className="nav-link">Teacher</a></li>
	        	<li className="nav-item"><a href="courses" className="nav-link">Courses</a></li>
	        	<li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
	        	<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
   
}

export default  HeaderComponent