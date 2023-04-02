import React from "react";
import { useState } from "react";

interface bannerItem {
    id: string,
    bannerImage: string,
    bannerTitle: string,
    pageTitle: string,
    homeTitle: string
}

function NavBanner(props: any) {

    const [bannerItems, setBannerItems] = useState(props.banner);

    return (

        <>
            <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${bannerItems.bannerImage})` }}>

                <div key={bannerItems.id}
                    className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 ftco-animate text-center">
                                <h1 className="mb-2 bread">{bannerItems.bannerTitle}</h1>
                                <p className="breadcrumbs"><span className="mr-2"><a href="#">{bannerItems.homeTitle}
                                    <i className="ion-ios-arrow-forward"></i></a></span> <span>{bannerItems.pageTitle} <i className="ion-ios-arrow-forward"></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default NavBanner;
