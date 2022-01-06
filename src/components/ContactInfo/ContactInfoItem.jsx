import PropTypes from "prop-types";
import React from "react";
import ReactVivus from "react-vivus";

const ContactInfoItem = ({ data }) => {
  return (
    <div className="contact-info d-flex justify-content-center align-items-center col-12 p-md-5 mx-auto">
      <div className="icon col col-3 col-md-1 text-center">
        <ReactVivus
          id={`contactsvg-${data.id}`}
          option={{
            file: data.icon,
            animTimingFunction: "EASE",
            type: "oneByOne",
            delay: 80,
          }}
        />
      </div>
      <div className="info col-7 col-md-8 mx-auto">
        <h4 className="title">{data.title}</h4>
        <span
          className="info-text"
          dangerouslySetInnerHTML={{ __html: data.info }}
        />
      </div>
    </div>
  );
};

ContactInfoItem.propTypes = {
  data: PropTypes.object,
};

export default ContactInfoItem;
