import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ActivityIconBox from "../container/Activity/ActivityIconBox";

const Activity = () => {
  return (
    <React.Fragment>
      <SEO title="Бид чадна || Арга хэмжээ" />
      <Header />
      <Breadcrumb
        image="images/bg/activity_bg.jpg"
        title="Хөгжлийн бэрхшээлтэй иргэдэд чиглэсэн арга хэмжээнүүд"
        content="Нүүр хуудас"
        contentTwo="Арга хэмжээ"
        url="activity"
      />
      <ActivityIconBox />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Activity;
