import axios from 'axios';
import { link } from 'fs';
import Link from 'next/link'
import { layouttype } from './layout/LayoutData'

const HeaderComponent = (props:layouttype) => {
	const HeaderData = props.layoutdata
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
	    <div className="container d-flex align-items-center">
		<a href="/" className="navbar-brand">{HeaderData.Title}</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
			{HeaderData.Links.map((link)=>(
				<li key={"1"} className="nav-item "><a href={link.LinkUrl} className="nav-link ">{link.LinkText} </a></li>	        
			)
			)	        	
			}
	        </ul>
	      </div>
	    </div>
	  </nav>
    )
   
}

export default  HeaderComponent


