import Link from "next/link";
type PromosListProps = {
	promos: Promo;
  };

  interface Promo {
	id: string;
	title: string;
	Detail: string;
	image: string;
	btn_text: string;
  }
  
const TakeCourse = (props: PromosListProps) => {
     const promodata = props.promos;
    return(
        <>
           <section className="ftco-intro" data-stellar-background-ratio="0.5" style={{backgroundImage:'url("../images/bg_3.jpg")'}}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<h2>{promodata.title}</h2>
						<p className="mb-0">{promodata.Detail}</p>
					</div>
					<div className="col-md-3 d-flex align-items-center">
						<p className="mb-0"><Link href="/" className="btn btn-secondary px-4 py-3">{promodata.btn_text}</Link></p>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}
export default TakeCourse;