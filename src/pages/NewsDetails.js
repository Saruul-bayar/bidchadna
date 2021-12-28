import React from 'react'
import SEO from '../components/SEO';
import PropTypes from "prop-types";
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import NewsData from '../data/News/NewsData.json';
import  NewsDetailsContainer from '../container/NewsPage/NewsDetailsContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const NewsDetails = ({match: {params: {id}}}) => {
    const newsId = parseInt(id, 10)
    const data = NewsData.filter(news => news.id === newsId);
    return (
        <React.Fragment>
            <SEO title="Бид чадна || Мэдээ мэдээлэл" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb_zurag.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Blog Classic"
            />
            <NewsDetailsContainer data={data[0]} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

NewsDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default NewsDetails;
