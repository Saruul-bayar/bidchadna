import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, content, contentTwo, url, image }) => {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <div
      className="page-title-section section section-padding-top overlay-two"
      style={{
        backgroundImage: `url(${publicUrl}/${image})`,
        backgroundSize: "cover",
        backgroundPositionY: "30%",
      }}
    >
      <div className="page-title">
        <div className="container">
          <h1 className="title font-size-70px">{title}</h1>
        </div>
      </div>
      <div className="page-breadcrumb position-static">
        <div className="container">
          <ul className="breadcrumb justify-content-center">
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>{content}</Link>
            </li>
            <li className="current">
              <Link to={`${process.env.PUBLIC_URL}/${url}`}>{contentTwo}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Breadcrumb;
