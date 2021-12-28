import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';
import {Link} from "react-router-dom";
const Testimonial = ({ data, classOption }) => {
    return (
        <div className={`static-testimonial mb-6 ${classOption}`}>
            <div className="icon">
                <ReactVivus
                    id={`servicesvg-${data.id}`}
                    option={{   
                        file: data.icon,
                        animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                    }}
                />
            </div>
            <div className="testimonial-title">
                <h4>{data.title}</h4>
            </div>
            <div className="testimonial-content">
                <p>{data.desc}</p>
            </div>
                <Link to={process.env.PUBLIC_URL + `/activity-details/${data.id}`} className="link">{data.pageLink}</Link>
        </div>
    )
}

Testimonial.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

Testimonial.defaultProps = {
    classOption: "icon-box text-center",
};

export default Testimonial;
