import { useState } from "react";
type CardsListProps = {
  cards: Card[];
};

interface Card {
  id: BigInteger;
  title: string;
  Detail: string;
  icon: string;
}

const Cards = (props: CardsListProps) => {
  const cardsdata = props.cards;

  return (
    <>
      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            {
              cardsdata.map((card) => (

                <div key={card.id.toString()} className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary">
                  <div className="media block-6 d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className={card.icon}></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">{card.title}</h3>
                      <p>{card.Detail}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
export default Cards;