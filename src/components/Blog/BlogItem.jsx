import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  return (
    <div className="blog shadow p-5">
      <div className="thumbnail">
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
          className="image"
        >
          <img
            className="img-thumbnail"
            src={process.env.PUBLIC_URL + data.image}
            alt="Blog Image"
          />
        </Link>
      </div>
      <div className="info">
        <ul className="meta">
          <li>
            <i className="far fa-calendar"></i>
            {data.date}
          </li>
        </ul>
        <h3 className="title">
          <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
            {data.title}
          </Link>
        </h3>
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
          className="link"
        >
          {" "}
          <mark>Цааш унших </mark>{" "}
        </Link>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  data: PropTypes.object,
};

export default BlogItem;
