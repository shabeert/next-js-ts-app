import Link from 'next/link'

function HeaderComponent(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
		<Link href="/" className="navbar-brand">Kiddos</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
			
	        	<li className="nav-item active"><Link href="/" className="nav-link pl-0">Home</Link></li>
	        	<li className="nav-item"><Link href="/about" className="nav-link ">About</Link></li>
	        	<li className="nav-item"><Link href="/teachers" className="nav-link ">Teacher</Link></li>
	        	<li className="nav-item"><Link href="/courses" className="nav-link ">Courses</Link></li>
	        	<li className="nav-item"><Link href="/pricing" className="nav-link ">Pricing</Link></li>
	        	<li className="nav-item"><Link href="/blog" className="nav-link ">Blog</Link></li>
	          <li className="nav-item"><Link href="/contact" className="nav-link ">Contact</Link></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
   
}

export default  HeaderComponent