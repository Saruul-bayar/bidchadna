import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
// import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive';
import Video from '../container/Video/Video';
import AboutDetails from '../components/About/AboutDetails'
import ScrollToTop from '../components/ScrollToTop.jsx';
import Footer from '../container/Footer/Footer';





const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Бидний тухай" />
            <Header />
            <Breadcrumb 
                image="images/about/about_3.jpeg"
                title="Бидний тухай"
                content="Нүүр хуудас"
                contentTwo="Бидний тухай"
                url="about"
            />
            <AboutFive />
            <Video />
            <AboutDetails />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



