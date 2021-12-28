import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ActivityIconBox from '../container/Activity/ActivityIconBox';


const Activity = () => {
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Арга хэмжээ" />
            <Header />
            <Breadcrumb 
                image="images/bg/activity_bg.jpg"
                title="Хөгжлийн бэрхшээлтэй иргэдэд чиглэсэн сайн олон үйл ажилагаа, арга хэмжээнүүд зохиоогддог"
                content="Home"
                contentTwo="Services"
            />
            <ActivityIconBox />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Activity;



