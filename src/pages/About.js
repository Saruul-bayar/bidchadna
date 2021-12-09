import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';






const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || About" />
            <Header />
            <Video />
            <AboutFive />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



