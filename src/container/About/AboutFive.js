import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
// import {Link} from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutFive = () => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding-top section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/about/about_1.jpeg"}
                    alt=""
                  />
                </Tilt>
              </div>
              {/* <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about_2.jpeg"} alt="" />
                                </Tilt>
                            </div> */}

              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/about-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area ">
              <SectionTitleTwo subTitle="Бидний тухай" title="Түүх" />

              <p>
                2011 онд Америкт сургууль төгсөгчдийн холбоо МАСА, хөгжлийн
                бэрхшээлтэй иргэдийн Түгээмэл Хөгжил Төв хамтран хөгжлийн
                бэрхшээлтэй иргэдийн эрх тэгш ажиллаж, амьдрах боломжтой орчинг
                бүрдүүлэх, ажлын орон тоог нэмэгдүүлэх, нийгмийн хариуцлагатай
                ажил олгогчдыг дэмжиж сурталчлах, нийгэмд эерэг хандлагыг
                төлөвшүүлэх зорилгоор Бид чадна сайтийг санаачлан эхлүүлсэн.
                2013 онд Бид чадна эм эн нэгдэл ТББ байгуулагдаж хөгжлийн
                бэрхшээлтэй иргэдийн мэдээллийг мэдээллээр хангах, соёл урлагаар
                дамжуулан нийгэмд таниулах 2 үндсэн чиглэлд ажиллаж байна.
              </p>

              {/* <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
