import PropTypes from "prop-types";
import React from 'react';
// import {Link} from "react-router-dom";
import ActivityDetails from '../../components/Activity/ActivityDetails';
// import Comment from '../../components/Comment/Comment.jsx';
import SidebarWrap from '../../components/Sidebar/SidebarWrap.jsx';
import SidebarWidget from '../../components/Sidebar/SidebarWidget.jsx';
// import SidebarBanner from '../../components/Sidebar/SidebarBanner.jsx';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch.jsx';
import SidebarCategories from '../../components/Sidebar/SidebarCategories.jsx';
import SidebarPost from '../../components/Sidebar/SidebarPost.jsx';
import SidebarCategoriesNews from "../../components/Sidebar/SidebarCategoriesNews.jsx";
import SidebarCategoriesActivity from "../../components/Sidebar/SidebarCategoriesActivity";
// import SidebarTag from '../../components/Sidebar/SidebarTag.jsx';

const ActivityDetailsContainer = ({data}) => {
    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-8 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">
                            
                            <ActivityDetails data={data} />
                            {/* <div className="blog-nav-links">
                                <h4 className="title">Related Posts </h4>
                                <div className="nav-list">
                                    <div className="nav-item prev">
                                        <div className="inner">
                                            <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                                                <div className="hover-bg has-thumbnail" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/pagination/blog-pagination.jpg)`}}></div>
                                                <span className="cate">Marketing</span>
                                                <h6>Eleven top tips for developing agile marketing strategies that work</h6>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="nav-item next">
                                        <div className="inner">
                                            <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                                                <div className="hover-bg has-thumbnail" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/pagination/blog-pagination-2.jpg)`}}></div>
                                                <span className="cate">Startup</span>
                                                <h6>Growing a startup involves balancing out the financial stack</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                            {/* <div className="comment-form-wrap">
                                <div className="comment-respond">
                                    <h3 className="title">Leave a Reply</h3>
                                    <Comment 
                                        url=""
                                        id={data.id}
                                        title={data.title}
                                    />
                                </div>
                            </div> */}

                        </div>
                    </div> 

                    <div className="col-lg-4 col-12 order-lg-2 mb-10">
                        <SidebarWrap>
                            <SidebarWidget>
                                <SidebarSearch />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle title="Төрөлүүд" />
                                <SidebarCategories />
                                <SidebarCategoriesNews />
                                <SidebarCategoriesActivity />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle classOption="mb-2" title="Бусад нийтлэл" />
                                <SidebarPost />
                            </SidebarWidget>
                            {/* <SidebarWidget>
                                <SidebarBanner />
                            </SidebarWidget> */}
                            {/* <SidebarWidget>
                                <SidebarTitle title="Popular tags" />
                                <SidebarTag />
                            </SidebarWidget> */}
                        </SidebarWrap>
                    </div> 

                </div>
            </div>
        </div>
    )
}
ActivityDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default ActivityDetailsContainer;
