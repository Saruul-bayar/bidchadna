import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
// import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
// import ServiceSkill from '../container/service/ServiceSkill';
// import AboutSix from "../container/About/AboutSix";
// import ContactInformationThree from "../container/ContactInformation/ContactInformationThree";
import VolunteerDetails from "../components/Volunteer/VolunteerDetails.jsx";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

const Volunteer = () => {
  return (
    <React.Fragment>
      <SEO title="Бид чадна || Сайн дурын хөтөлбөр" />
      <Header />
      <Breadcrumb
        image="images/bg/activity.jpg"
        title="Сайн дурын хөтөлбөр"
        content="Нүүр хуудас"
        contentTwo="Сайн дурын хөтөлбөр"
        url="volunteer"
      />
      <VolunteerDetails />
      <Swiper
        className="testimonial-slider"
        data-aos="fade-up"
        data-aos-delay="300"
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          1499: {
            slidesPerView: 3,
          },

          991: {
            slidesPerView: 2,
          },

          767: {
            slidesPerView: 1,
          },

          575: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className="bg-dark">
          <img
            src={process.env.PUBLIC_URL + "/images/volunteer/volunteers_2.jpeg"}
            alt="volunteer1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/volunteer/volunteers_3.jpeg"}
            alt="volunteer2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "/images/volunteer/volunteers_4.jpeg"}
            alt="volunteer3"
          />
        </SwiperSlide>
      </Swiper>
      {/* <ContactInformationThree /> */}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Volunteer;
