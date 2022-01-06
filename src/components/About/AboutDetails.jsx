import React from "react";
import PropTypes from "prop-types";
import AboutData from "../../data/About/About.json";

const About = () => {
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-12 order-lg-1 d-flex justify-content-center">
            <div className="row row-cols-1">
              {AboutData.map((data) => {
                return (
                  <div
                    className="about-content-area d-lg-flex justify-content-evenly align-items-center col-lg-11 col-11 order-lg-1 mb-10 d-sm-block border border-light shadow"
                    key={data.id}
                  >
                    <div className="col-lg-7 col-sm-12 ">
                      <h1 className="mb-3 mt-10 text-center"> {data.name} </h1>
                      <h5 className="text-center text-primary">
                        {" "}
                        {data.subTitle}{" "}
                      </h5>
                      <p className="col-12 mw-100 text-center">
                        {" "}
                        {data.content}{" "}
                      </p>
                    </div>
                    <div className="col-lg-3 col-sm-12 mt-10 mb-10 text-center">
                      <img
                        className="rounded rounded-lg w-100 border border-dark shadow"
                        src={process.env.PUBLIC_URL + data.image}
                        alt="team Images"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
