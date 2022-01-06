import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const IconBox = ({ data, classOption }) => {
  return (
    <div className={`row icon-box border border-light shadow ${classOption}`}>
      <div className="content d-flex align-items-center justify-content-between col-12 p-0">
        <div className="text col-12 col-sm-9 col-md-9 col-lg-9">
          <Link
            to={process.env.PUBLIC_URL + `/activity-details/${data.id}`}
            className="title"
          >
            <h3 className="title  text-primary">{data.title}</h3>
          </Link>
          <div className="info">
            <ul className="meta list-unstyled">
              <li>
                <i className="far fa-map-marker-alt"></i>
                {"  "}
                {data.location}
              </li>
            </ul>
          </div>
          <Link
            to={process.env.PUBLIC_URL + `/activity-details/${data.id}`}
            className="subtitle"
          >
            <div className="desc mb-2">
              <p className="mb-4 text-secondary">{data.subtitle}</p>
            </div>
          </Link>
        </div>
        <Link
          to={process.env.PUBLIC_URL + `/activity-details/${data.id}`}
          className="image d-none d-sm-inline mg-responsive col-xl-3 col-lg-3 col-md-3 col-sm-4 ml-5 "
        >
          <img
            className=" rounded-circle  shadow "
            src={process.env.PUBLIC_URL + data.image}
            alt="News Image"
          />
        </Link>

        {/* <Link
          to={process.env.PUBLIC_URL + `/activity-details/${data.id}`}
          className="btn btn-primary text-white px-10"
        >
          Дэлгэрэнгүй
        </Link> */}
      </div>
    </div>
  );

  //     <div className="blog-3 col">
  //     <div className="thumbnail">
  //         <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image"><img src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Blog Image" /></Link>
  //     </div>
  //     <div className="info">
  //         <h3 className="title"><Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link></h3>
  //         <div className="desc">
  //             <p>{data.excerpt}</p>
  //         </div>
  //         <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="btn btn-primary btn-hover-secondary mt-6">Цааш унших</Link>
  //     </div>
  // </div>
};

IconBox.propTypes = {
  data: PropTypes.object,
  classOption: PropTypes.string,
};

IconBox.defaultProps = {
  classOption: "icon-box ",
};

export default IconBox;
