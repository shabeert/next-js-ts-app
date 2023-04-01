import React from "react";
import { useState } from "react";
import { idText } from "typescript";

function Banner(props: any) {

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
            <section class="hero-wrap hero-wrap-2">
                {bannerItems.map((item: any) => (
                    <div key={item.id}
                        className="slider-item"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="overlay"></div>
                        <div className="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-center">
                                <div class="col-md-9 ftco-animate text-center">
                                    <h1 class="mb-2 bread">Our Courses</h1>
                                    <p class="breadcrumbs"><span class="mr-2"><a href="#">Home
                                        <i class="ion-ios-arrow-forward"></i></a></span> <span>Courses <i class="ion-ios-arrow-forward"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
export default Banner;
