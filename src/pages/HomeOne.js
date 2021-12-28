import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
// import ServiceIconBox from '../container/service/ServiceIconBox';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer'
import Video from '../container/Video/Video';
// import Portfolio from '../container/Portfolio/Portfolio';
import HomeBlog from '../container/BlogGrid/HomeBlog';
import Team from '../container/Team/Team';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Бид чадна | Хөгжлийн бэхшээлтэй иргэдийн нэгсдэн портал" />
            <Header />
            <IntroSlider />
            <HomeAbout />
            {/* <ServiceIconBox classOption="bg-color-1" /> */}
            <HomeBlog />
            <TestimonialContainer />
            <Video />
            <Team />
            <ContactInformation />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



