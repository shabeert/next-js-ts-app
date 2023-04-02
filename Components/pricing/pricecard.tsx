interface PricesCard {
  title: string,
  cost: string,
  perPersonText:string,
  backgroundImage:string,
  description:string,
  link:string,
  linkText:string
};

export default function PriceCard(props: PricesCard) {
  return (

    
    <div className="col-md-6 col-lg-3 ftco-animate">
    <div className="pricing-entry bg-light pb-4 text-center">
      <div>
        <h3 className="mb-3">{props.title}</h3>
        <p><span className="price">{props.cost}</span> <span className="per">/ {props.perPersonText}</span></p>
      </div>
      <div className="img" style={{backgroundImage: `url('${props.backgroundImage}')`}}></div>
      <div className="px-4">
        <p>{props.description}</p>
      </div>
      <p className="button text-center"><a href={props.link} className="btn btn-primary px-4 py-3">{props.linkText}</a></p>
    </div>
  </div>
  );
}