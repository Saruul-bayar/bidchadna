import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
// import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
// import ServiceSkill from '../container/service/ServiceSkill';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import VolunteerData from '../data/Volunteer/VolunteerData.json'
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Volunteer = () => {
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Сайн дурын хөтөлбөр" />
            <Header />
            <Breadcrumb 
                image="images/bg/activity.jpg"
                title="We work with bold brands that we believe in"
                content="Home"
                contentTwo="Services"
            />
            <div className = "about-data" >
                {VolunteerData.map (volunteer => {
                    return (
                        <div key = {volunteer.id}>
                        <h1> {volunteer.title} </h1>
                        <h5> {volunteer.subTitle} </h5>
                        <div className="desc" dangerouslySetInnerHTML={{__html: volunteer.body}} />
                        </div>
                    )
                }) }    
            </div>
            <AboutSix />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Volunteer;



