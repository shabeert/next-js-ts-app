import ReviewCard from "./reviewcard";

interface ReviewCard {
  "background-image": string,
  icon: string,
  cardDescription: string,
  cardName: string,
  cardPosition: string
}

const ReviewsList = (props: any) => {
  console.log(props.reviews);
  const reviewsList = props.reviews.cards?.map((review: ReviewCard) =>
    <ReviewCard background-image={review["background-image"]}
      icon={review.icon}
      cardDescription={review.cardDescription}
      cardName={review.cardName}
      cardPosition={review.cardPosition}></ReviewCard>
  );


  return (

    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">
              <span>{props.reviews.title}</span>
            </h2>
            <p>{props.reviews.description}</p>
          </div>
        </div>
        <div className="row ftco-animate justify-content-center">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel">
              {reviewsList}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}


export default ReviewsList