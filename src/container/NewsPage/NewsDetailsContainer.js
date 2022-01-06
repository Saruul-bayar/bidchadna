import PropTypes from "prop-types";
import React from "react";
// import {Link} from "react-router-dom";
import NewsDetails from "../../components/NewsItem/NewsDetails";
// import Comment from '../../components/Comment/Comment.jsx';
import SidebarWrap from "../../components/Sidebar/SidebarWrap.jsx";
import SidebarWidget from "../../components/Sidebar/SidebarWidget.jsx";
// import SidebarBanner from "../../components/Sidebar/SidebarBanner.jsx";
import SidebarTitle from "../../components/Sidebar/SidebarTitle";
import SidebarSearch from "../../components/Sidebar/SidebarSearch.jsx";
import SidebarCategoriesNews from "../../components/Sidebar/SidebarCategoriesNews.jsx";
import SidebarPostNews from "../../components/Sidebar/SidebarPostNews.jsx";
// import SidebarTag from "../../components/Sidebar/SidebarTag.jsx";
import SidebarCategoriesActivity from "../../components/Sidebar/SidebarCategoriesActivity";
import SidebarCategories from "../../components/Sidebar/SidebarCategories.jsx";
import NewsData from "../../data/News/NewsData.json";
const NewsDetailsContainer = ({ data }) => {
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row mb-n10">
          <div className="col-lg-8 col-12 order-lg-1 mb-10">
            <div className="row row-cols-1 no-gutters">
              <NewsDetails data={data} />
            </div>
          </div>

          <div className="col-lg-4 col-12 order-lg-2 mb-10">
            <SidebarWrap>
              <SidebarWidget>
                <SidebarSearch
                  placeholder="мэдээ хайх"
                  data={NewsData}
                  page={"/news-details/"}
                />
              </SidebarWidget>
              <SidebarWidget>
                <SidebarTitle
                  classOption="mb-2 text-primary"
                  title="Төрөлүүд"
                />
                <SidebarCategories />
                <SidebarCategoriesNews />
                <SidebarCategoriesActivity />
              </SidebarWidget>
              <SidebarWidget>
                <SidebarTitle
                  classOption="mb-2 text-primary"
                  title="Бусад мэдээнүүд"
                />
                <SidebarPostNews />
              </SidebarWidget>
              {/* <SidebarWidget>
                <SidebarBanner />
              </SidebarWidget>
              <SidebarWidget>
                <SidebarTitle title="dasda" />
                <SidebarTag />
              </SidebarWidget> */}
            </SidebarWrap>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsDetailsContainer.propTypes = {
  data: PropTypes.object,
};

export default NewsDetailsContainer;
