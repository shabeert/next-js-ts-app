interface ReviewType {
  backgroundImage: string,
  icon: string,
  cardDescription:string,
  cardName:string,
  cardPosition:string
};

export default function ReviewCard(props: ReviewType) {
  return (

    
        <div className="item">
          <div className="testimony-wrap d-flex">
            <div className="user-img mr-4" style={{ backgroundImage: `url('${props.backgroundImage}')` }}></div>
            <div className="text ml-2 bg-light">
              <span className="quote d-flex align-items-center justify-content-center">
                <i className={props.icon}></i>
              </span>
              <p>{props.cardDescription}</p>
              <p className="name">{props.cardName}</p>
              <span className="position">{props.cardPosition}</span>
            </div>
          </div>
        </div>
  );
}