import React from "react";
import PropTypes from "prop-types";
// import VolunteerData from "../../data/Volunteer/VolunteerData.json";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import AccordionWrap from "../Accordion/AccordionWrap";
import AccordionWrapVolunteer from "../Accordion/AccordionWrapVolunteer";

const VolunteerDetails = () => {
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          <div className="col-lg-12 col-sm-12  order-lg-1 mb-5">
            <SectionTitle
              titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
              title="Хөтөлбөрийн талаар"
            />
            {/* {VolunteerData.map((volunteer) => {
              return (
                <div
                  className="d-flex justify-content-center "
                  key={volunteer.id}
                >
                  <div className="col-6 ">
                    <h1 className=""> {volunteer.title} </h1>
                    <h5 className=""> {volunteer.subTitle} </h5>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: volunteer.body }}
                    />
                  </div>
                  <div className="col-6 ml-10">
                    <img
                      className="rounded rounded-lg"
                      src={process.env.PUBLIC_URL + volunteer.image}
                      alt="volunteer Images"
                    />
                  </div>
                </div>
              );
            })} */}
            <div className="accordionContainer d-lg-flex justify-content-center d-sm-block mb-30">
              <AccordionWrapVolunteer />
              <div className="accordionImage col-lg-5 ml-lg-10 my-lg-0 mx-5 my-5">
                <img
                  className="rounded-lg shadow "
                  src={
                    process.env.PUBLIC_URL +
                    "/images/volunteer/volunteers_2.jpeg"
                  }
                  alt="team Images"
                />
              </div>
            </div>
            <SectionTitle
              titleOption="section-title text-center mb-lg-12 mt-lg-12 mb-sm-8 mb-xs-8 "
              title="Түгээмэл асуултууд"
            />
            <div className="accordionContainer d-lg-flex justify-content-center d-sm-block mb-30">
              <div className="accordionImage col-lg-5 mr-lg-10 my-lg-0 mx-5 my-5">
                <img
                  className="rounded-lg shadow"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/volunteer/volunteers_3.jpeg"
                  }
                  alt="team Images"
                />
              </div>
              <AccordionWrap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerDetails.propTypes = {
  data: PropTypes.object,
};

export default VolunteerDetails;
