import React from 'react'
import SEO from '../components/SEO';
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ActivityDetails from '../data/Activity/ActivityDetails.json';
import  ActivityDetailsContainer from '../container/Activity/ActivityDetailsContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const ActivityDetailsPage = ({match: {params: {id}}}) => {
    const activityId = parseInt(id, 10)
    const data = ActivityDetails.filter(activity => activity.id === activityId);
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Арга хэмжээ" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-four.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Blog Classic"
            />
            <ActivityDetailsContainer data={data[0]} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

ActivityDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default ActivityDetailsPage;
