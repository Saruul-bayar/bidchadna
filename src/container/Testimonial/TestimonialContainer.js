import PropTypes from "prop-types";
import React from "react";
// import TestimonialData from "../../data/testimonial/testimonial.json";
// import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import ActivityDetailsData from "../../data/Activity/ActivityDetails.json";

SwiperCore.use([Pagination]);

const TestimonialContainer = ({ classOption }) => {
  return (
    <div
      className={`testimonial-section section section-padding-t90 section-padding-bottom ${classOption}`}
    >
      <div className="container-fluid pl-xl-30 pr-xl-30 pl-lg-3 pl-md-3 pl-sm-3 pl-3 pr-xl-16 pr-lg-3 pr-md-3 pr-sm-3 pr-3">
        <SectionTitle
          headingOption="title fz-28"
          title="АРГА ХЭМЖЭЭ"
          subTitle="Хөгжлийн бэрхшээлтэй иргэдэд чиглэсэн сайн олон үйл ажилагаа, арга хэмжээнүүд зохиоогддог"
        />

        <Swiper
          className="testimonial-slider"
          data-aos="fade-up"
          data-aos-delay="300"
          spaceBetween={60}
          slidesPerView={1}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            1499: {
              slidesPerView: 2,
            },

            991: {
              slidesPerView: 2,
            },

            767: {
              slidesPerView: 2,
            },

            575: {
              slidesPerView: 1,
            },
          }}
        >
          {ActivityDetailsData &&
            ActivityDetailsData.slice(0, 10).map((single, key) => {
              return (
                <SwiperSlide key={key}>
                  <IconBox data={single} key={key} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

TestimonialContainer.propTypes = {
  classOption: PropTypes.string,
};
TestimonialContainer.defaultProps = {
  classOption:
    "testimonial-section section section-padding-t90 section-padding-bottom",
};

export default TestimonialContainer;
