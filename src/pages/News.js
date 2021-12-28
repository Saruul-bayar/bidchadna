import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
// import PageBlog from '../container/BlogGrid/PageBlog';
// import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import PageNews from '../container/NewsPage/PageNews';


const News = () => {
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Мэдээ мэдээлэл" />
            <Header />
            <Breadcrumb 
                image="images/bg/news.jpeg"
                title="Мэдээ мэлэлэл"
                content="Home"
                contentTwo="Blog"
            />
            <PageNews />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default News;
