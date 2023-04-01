import React from "react";
import { useState } from "react";

function Banner() {
  
  const DUMMY_BANNERITEMS = [
    {
      id: "b1",
      title: "Kids Are The Best Explorers In The World",
      image: "images/bg_1.jpg",
      link: "/",
    },
    {
      id: "b2",
      title: "Perfect Learned For Your Child",
      image: "images/bg_2.jpg",
      link: "/",
    },
  ];

  const [bannerItems, setBannerItems] = useState(DUMMY_BANNERITEMS);

  return (
    <>
      <section className="home-slider owl-carousel">
        {bannerItems.map((item) => (
          <div key={item.id}
            className="slider-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row no-gutters slider-text align-items-center justify-content-center"
                data-scrollax-parent="true"
              >
                <div className="col-md-8 text-center ftco-animate">
                  <h1 className="mb-4">{item.title}</h1>
                  <p>
                    <a
                      href={item.link}
                      className="btn btn-secondary px-4 py-3 mt-3"
                    >
                      Read More
                    </a>
                  </p>
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
