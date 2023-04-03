import React from "react";
import { layouttype } from "./layout/LayoutData";

const FooterComponent = (props: layouttype) => {
  const FooterData = props.layoutdata;
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-6">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">
                {FooterData.ContactUsQuestion.title}
              </h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">{FooterData.Address.street}</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone"></span>
                      <span className="text">{FooterData.Address.number}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">{FooterData.Address.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                {FooterData.Links.map((link) => (
                  <li key={link.LinkText}>
                    <a href={link.LinkUrl}>
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      {link.LinkText}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
