import React from 'react'
import SEO from '../components/SEO';
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ActivityData from '../data/Activity/Acitivity.json';
import BlogDetailsContainer from '../container/BlogGrid/BlogDetailsContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import ActivityDetailsContainer from '../container/Activity/ActivityDetailsContainer';

const ActivityDetails = ({match: {params: {id}}}) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <React.Fragment>
            <SEO title="Exomac || Blog Details" />
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

ActivityDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default ActivityDetails;
