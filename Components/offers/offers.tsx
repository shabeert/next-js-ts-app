import ContentBlock from "../contentBlock";
import OfferCard from "./offerCard";

interface OfferCard {
 icon:string,
 title:string,
 Detail:string,
  id : string
}
interface Content {
	id: BigInteger;
	title: string;
	Detail: string;
	icon: string;
  }
const OffersList = (props: any) => {
  const offersList = props.offers.cards?.map((offer: OfferCard,index:number) =>
     
    <OfferCard 
	icon = {offer.icon}
	title = {offer.title}
	Detail = {offer.Detail}
       key={(index+1).toString()}></OfferCard>
  );
  
  const content = props.contents;
    return(
        <>

           <section className="ftco-section ftco-no-pt ftc-no-pb">
			<div className="container">
				<div className="row">
					<ContentBlock content={content}/>
					<div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
          	<h2 className="mb-4">{props.offers.heading}</h2>
						<p>{props.offers.description}</p>
						<div className="row mt-5">
							{offersList}
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}
export default OffersList;