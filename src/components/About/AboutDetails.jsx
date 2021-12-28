import React from 'react';
// import {slugify} from "../../utils";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";
import AboutData from "../../data/About/About.json"

const About = () => {
    // const cate = data.categories.map((value, i) => {
    //     return (
    //         <Link to={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
    //     )
        
    // });
    return (
        <div className="section section-padding fix">
        <div className="container">
            <div className="row mb-n10">
                <div className="col-lg-13 col-12 order-lg-1 mb-10">
                    <div className="row row-cols-1">
                    {AboutData.map (data => {
                        return (
                            <div className="about-content-area col-lg-13 col-12 order-lg-1 mb-10" key = {data.id}>
                                <h1> {data.title} </h1>
                                <h5> {data.subTitle} </h5>
                                <p> {data.content} </p>
                                </div>
                            )
                        }) }   
                     </div>
                </div>
            </div>
        </div>
    </div>
    )
}

About.propTypes = {
    data: PropTypes.object
};

export default About
