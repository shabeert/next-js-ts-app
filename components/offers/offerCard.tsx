interface OfferType {
    icon: string,
    title: string,
    Detail: string
};

export default function OfferCard(props: OfferType) {
    return (
        <div className="col-lg-6">
            <div className="services-2 d-flex">
                <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span className={props.icon}></span></div>
                <div className="text">
                    <h3>{props.title}</h3>
                    <p>{props.Detail}</p>
                </div>
            </div>
        </div>
    );
}