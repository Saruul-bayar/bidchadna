import React from 'react';
// import {slugify} from "../../utils"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const BlogClassic = ({ data }) => {
    
    return (
        <div className="blog-3 col">
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image"><img src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Blog Image" /></Link>
            </div>
            <div className="info">
                <h3 className="title"><Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link></h3>
                <div className="desc">
                    <p>{data.excerpt}</p>
                </div>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="btn btn-primary btn-hover-secondary mt-6">Цааш унших</Link>
            </div>
        </div>
    )
}
BlogClassic.propTypes = {
    data: PropTypes.object
};
export default BlogClassic;
