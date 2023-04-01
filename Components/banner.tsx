import React from "react";
function Banner() {
  return (
    <>
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{backgroundImage:`url(images/bg_1.jpg)`}}>
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-8 text-center ftco-animate">
                <h1 className="mb-4">
                  Kids Are The Best <span>Explorers In The World</span>
                </h1>
                <p>
                  <a href="#" className="btn btn-secondary px-4 py-3 mt-3">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item" style={{backgroundImage:`url(images/bg_2.jpg)`}}>
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              data-scrollax-parent="true"
            >
              <div className="col-md-8 text-center ftco-animate">
                <h1 className="mb-4">
                  Perfect Learned<span> For Your Child</span>
                </h1>
                <p>
                  <a href="#" className="btn btn-secondary px-4 py-3 mt-3">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
