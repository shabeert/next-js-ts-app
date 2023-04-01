import React from "react";

function FooterComponent(){
    return (   
    
        <footer className="ftco-footer ftco-bg-dark ftco-section"> 
        <div className="container">
            <div className="row mb-5">
            <div className="col-md-6 col-lg-6">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                    <div className="block-23 mb-3">
                      <ul>
                        <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                        <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                        <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                      </ul>
                    </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>About</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Services</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Deparments</a></li>
                <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
            </div>
            </div> 
        </footer>   
    )
}
export default FooterComponent
