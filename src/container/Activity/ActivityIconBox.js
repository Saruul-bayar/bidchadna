import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import ActivityIconBoxData from "../../data/Activity/Activity-icon-box.json";
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Parallax from 'parallax-js';

const ActivityIconBox = ({ classOption }) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container">

                <SectionTitle
                    headingOption="fz-32"
                    title="Хөгжлийн бэрхшээлтэй иргэдэд чиглэсэн арга хэмжээнүүд"
                    subTitle="Хөжлийн бэрхшээлтэй иргэдэд чиглэсэн олон сайн дурын аян үйл ажилгаанууд зохогддог "
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation">

                    {ActivityIconBoxData && ActivityIconBoxData.map((single, key) => {
                        return(
                            <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                <IconBox classOption="box-border" data={single} key={key} />
                            </div>
                        ); 
                    })}

                    <div className="shape shape-1" id="scene" ref={sceneEl}>
                        <span data-depth="1"><img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" /></span>
                    </div>

                </div>

            </div>
        </div>
    )
}

ActivityIconBox.propTypes = {
    classOption: PropTypes.string
};
ActivityIconBox.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom"
};

export default ActivityIconBox