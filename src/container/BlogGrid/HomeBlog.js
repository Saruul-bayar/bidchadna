import React from "react";
import PropTypes from "prop-types";
import NewsData from "../../data/News/NewsData.json";
import BlogItem from "../../components/Blog/BlogItem";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { Link } from "react-router-dom";
// import axios from "axios";
// import cors from "cors";
// import express from "express";

const HomeBlog = ({ SectionBgColor }) => {
  // const [NewsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/news-data")
  //     .then((res) => {
  //       const NewsData = res.data;
  //       setNewsData(NewsData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <div className={`section section-padding-t90-b100 ${SectionBgColor}`}>
      <div className="container">
        <SectionTitle
          title="Мэдээ мэдээлэл"
          subTitle="ХҮН БҮРТ ХҮРТЭЭМЖТЭЙ ХӨДӨЛМӨР ЭРХЛЭЛТ НЬ НИЙГМИЙН ТОГТВОРТОЙ БАЙДЛЫГ БИЙ БОЛГОНО."
        />

        <div className="row d-flex justify-content-center row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 ">
          {NewsData &&
            NewsData.slice(0, 3).map((single, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <BlogItem data={single} key={key} />
                </div>
              );
            })}
        </div>
        <div className="row d-flex justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 mb-n6">
          <Link
            className="btn btn-primary btn-sm btn-hover-secondary  mt-xl-8 mt-lg-8 mt-md-6 mt-4"
            to={process.env.PUBLIC_URL + "/news"}
          >
            Бусад мэдээ
          </Link>
        </div>
      </div>
    </div>
  );
};
HomeBlog.propTypes = {
  SectionBgColor: PropTypes.string,
};
HomeBlog.defaultProps = {
  SectionBgColor: "section section-padding-t90-b100",
};

export default HomeBlog;
