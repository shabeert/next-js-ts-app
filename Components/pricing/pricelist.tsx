import PriceCard from "./pricecard";

interface PriceListProps{
  pricelist: PricesCard[]
};

interface PricesCard {
  title: string,
  cost: string,
  perPersonText: string,
  backgroundImage: string,
  description: string,
  link: string,
  linkText: string
};

const PriceList = (props: PriceListProps) => {
  console.log(props.pricelist);
  const priceList = props.pricelist?.map((price: PricesCard) =>
    <PriceCard key={price.title} backgroundImage={price.backgroundImage}
      cost={price.cost}
      description={price.description}
      link={price.link}
      linkText={price.linkText}
      perPersonText={price.perPersonText}
      title={price.title} />
  );


  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          {priceList}
        </div>
      </div>
    </section>
  );

}


export default PriceList