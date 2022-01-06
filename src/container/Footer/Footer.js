import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import FooterData from "../../data/Footer/footerItem.json";
import FooterLinkItem from "../../components/Footer/FooterLinkItem.jsx";

const Footer = () => {
  return (
    <div className="footer-section section footer-bg-color">
      <div className="container">
        <div className="row row-cols-3 mb-lg-14 mb-md-10 mb-6 d-flex justify-content-center pb-7">
          <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-6 ">
            <div className="footer-logo">
              <div className="header-logo">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                />
              </div>
            </div>
            <div className="footer-social-inline mt-0 d-flex flex-column">
              <a
                href="https://twitter.com/BidChadnaMN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square mb-1 ">
                  <span className="fw-bold"> Twitter</span>
                </i>
              </a>
              <a
                href="https://www.facebook.com/BidchadnaMN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square mb-1">
                  <span> Facebook</span>
                </i>
              </a>
              <a
                href="https://www.youtube.com/user/BidchadnaMN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube">
                  <span> Youtube</span>
                </i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-6">
            <p className="text-white text-large">Хэрэгтэй</p>
            {FooterData &&
              FooterData.slice(0, 1).map((single, key) => {
                return (
                  <div key={key} className="col-12 mb-6 mb-0 mt-0">
                    <FooterLinkItem data={single} key={key} />
                  </div>
                );
              })}
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-6">
            <p className="text-white text-large">Холбогдох</p>
            {FooterData &&
              FooterData.slice(1, 2).map((single, key) => {
                return (
                  <div key={key} className="col-12 mb-6 mb-0 mt-0">
                    <FooterLinkItem data={single} key={key} />
                  </div>
                );
              })}
          </div>
          <div className="col-12 mb-6 col-md-3 footer-widget">
            <div className="footer-widget-content">
              <div className="content">
                <p className="text-white">Утас</p>
                <p>
                  <Link to={process.env.PUBLIC_URL + "/contact"}>
                    (+976) 11-365555 , (+976) 99741916
                  </Link>
                </p>
                <p className="text-white">И-майл</p>
                <p>
                  <Link to={process.env.PUBLIC_URL + "/contact"}>
                    info@bidchadna.mn
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="copyright">
            {" "}
            <strong>Бүх эрх хуулиар хамгаалагдсан</strong> &copy; 2021{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hasthemes.com/"
            >
              <strong>bidchadna.mn</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
