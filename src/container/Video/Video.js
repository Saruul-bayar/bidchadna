import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ModalVideo from "react-modal-video";
import Parallax from "parallax-js";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div
      className="video-section section section-padding overlay-two"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/video/video_thumbnail.jpg)`,
        backgroundSize: "cover",
        backgroundPositionY: "25%",
      }}
    >
      <div className="container text-center">
        <div className="section-title color-light text-center">
          <h2 className="title"></h2>
        </div>
        <SectionTitle
          titleOption="color-light text-center"
          title="Ээжтэй хүн баян"
        />

        <button
          className="play-btn icon video-popup"
          onClick={() => setOpen(true)}
        >
          <i className="fas fa-play"></i>
        </button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="gAyM600n1aQ"
          onClose={() => setOpen(false)}
        />
      </div>

      <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <img
            src={
              process.env.PUBLIC_URL +
              "images/shape-animation/newsletter-shape.png"
            }
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Video;
