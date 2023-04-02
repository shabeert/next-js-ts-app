import Link from "next/link";
type CardsProps = {
  cards: Cards[];
};

interface Cards {
  id: string;
  title: string;
  detail: string;
  link: string;
}


const ContactUsCards = (props: CardsProps) => {
  const cardData = props.cards;
  return (
    <>
      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
          {
            cardData.map((card) => 
            <div key={card.id} className="col-md-3 d-flex">
            <div className="bg-light align-self-stretch box p-4 text-center">
              <h3 className="mb-4">{card.title}</h3>
              {
                card.link === "" ? <p>{card.detail}</p> : <p><Link href={card.link}>{card.detail}</Link></p>
              }

            </div>
          </div>
            )
          }
            

          </div>
        </div>
      </section>
    </>
  )
}
export default ContactUsCards;