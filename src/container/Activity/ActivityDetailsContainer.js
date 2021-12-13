import PropTypes from "prop-types";
import React from 'react';
import AvtivityData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ActivityDetails from "../../components/Activity/ActivityDetails";

const ActivityIconBox = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="АРГА ХЭМЖЭЭ"
                    subTitle="Хөгжлийн бэрхшээлтэй иргэдэд чиглэсэн сайн олон үйл ажилагаа, арга хэмжээнүүд зохиоогддог"
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                    {AvtivityData && AvtivityData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <IconBox classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}
                    {ActivityDetails && ActivityDetails.slice(0, 4).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <ActivityDetails data={single} key={key} />
                                </div>
                            ); 
                        })}

                
                </div>

            </div>
        </div>
    )
}

ActivityIconBox.propTypes = {
    classOption: PropTypes.string
  };
  ActivityIconBox.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default ActivityIconBox;
