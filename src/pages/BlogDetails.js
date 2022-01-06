import React from "react";
import SEO from "../components/SEO";
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import BlogClassicData from "../data/blog/BlogClassic.json";
import BlogDetailsContainer from "../container/BlogGrid/BlogDetailsContainer";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const BlogDetails = ({
  match: {
    params: { id },
  },
}) => {
  const blogId = parseInt(id, 10);
  const data = BlogClassicData.filter((blog) => blog.id === blogId);
  return (
    <React.Fragment>
      <SEO title="Бид чадна || Нийтлэл" />
      <Header />
      <Breadcrumb
        image="images/bg/bg-2.jpeg"
        title={data[0]?.title}
        content="Нүүр хуудас"
        contentTwo="Нийтлэл"
        url={"article"}
      />
      <BlogDetailsContainer data={data[0]} />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

BlogDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default BlogDetails;
