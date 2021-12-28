import React from 'react';
import PropTypes from "prop-types";
import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogItem from '../../components/Blog/BlogItem';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import {Link} from "react-router-dom";

const HomeBlog =({ SectionBgColor }) => {
    return (
        <div className={`section section-padding-t90-b100 ${SectionBgColor}`}>
            <div className="container">
                <SectionTitle
                    title="Мэдээ мэдээлэл"
                    subTitle="ХҮН БҮРТ ХҮРТЭЭМЖТЭЙ ХӨДӨЛМӨР ЭРХЛЭЛТ НЬ НИЙГМИЙН ТОГТВОРТОЙ БАЙДЛЫГ БИЙ БОЛГОНО."
                />

                <div className="row d-flex justify-content-center row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                        {BlogClassicData && BlogClassicData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6 " data-aos="fade-up">
                                    <BlogItem data={single} key={key} />
                                </div>
                            ); 
                        })}
                </div>
                <div className="row d-flex justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 mb-n6">
                <Link className="btn btn-primary btn-sm btn-hover-secondary  mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/news"}>Бүх мэдээллийг харах</Link>
                </div>
            </div>
        </div>
    )
}
HomeBlog.propTypes = {
    SectionBgColor: PropTypes.string
};
HomeBlog.defaultProps = {
    SectionBgColor: "section section-padding-t90-b100"
};

export default HomeBlog
