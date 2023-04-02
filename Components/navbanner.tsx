import React from "react";
import { useState } from "react";


function NavBanner(props: any) {

    const DUMMY_BANNERITEMS = [
        {
            id: "b1",
            title: "Kids Are The Best Explorers In The World",
            image: "images/bg_1.jpg",
            link: "/",
        }
    ];

    const [bannerItems, setBannerItems] = useState(props.items);

    return (

        <>

            <section className="hero-wrap hero-wrap-2">

                <div key={bannerItems[0].id}
                    className="slider-item"
                    style={{ backgroundImage: `url(${bannerItems[0].image})` }}
                >
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 ftco-animate text-center">
                                <h1 className="mb-2 bread">Our Courses</h1>
                                <p className="breadcrumbs"><span className="mr-2"><a href="/">Home
                                    <i className="ion-ios-arrow-forward"></i></a></span> <span>Courses <i className="ion-ios-arrow-forward"></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
}
export default NavBanner;
