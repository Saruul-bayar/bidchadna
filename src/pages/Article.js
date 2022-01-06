import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import BlogClassicContainer from "../container/BlogGrid/BlogClassicContainer";
// import CallToAction from '../container/CallToAction/CallToAction';
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Article = () => {
  return (
    <React.Fragment>
      <SEO title="Бид чадна || Нийтлэл" />
      <Header />
      <Breadcrumb
        image="images/bg/article.jpeg"
        title="Нийтлэл"
        content="Нүүр хуудас"
        contentTwo="Нийтлэл"
        url={"article"}
      />
      <BlogClassicContainer />
      {/* <CallToAction /> */}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Article;
