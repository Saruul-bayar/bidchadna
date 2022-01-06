import PropTypes from "prop-types";
import React from "react";
import ActivityDetails from "../../components/Activity/ActivityDetails";
import SidebarWrap from "../../components/Sidebar/SidebarWrap.jsx";
import SidebarWidget from "../../components/Sidebar/SidebarWidget.jsx";
import SidebarTitle from "../../components/Sidebar/SidebarTitle";
import SidebarSearch from "../../components/Sidebar/SidebarSearch.jsx";
import SidebarCategories from "../../components/Sidebar/SidebarCategories.jsx";
import SidebarCategoriesNews from "../../components/Sidebar/SidebarCategoriesNews.jsx";
import SidebarCategoriesActivity from "../../components/Sidebar/SidebarCategoriesActivity";
import SidebarPostActivity from "../../components/Sidebar/SidebarPostActivity";

const ActivityDetailsContainer = ({ data }) => {
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row mb-n10">
          <div className="col-lg-8 col-12 order-lg-1 mb-10">
            <div className="row row-cols-1 no-gutters">
              <ActivityDetails data={data} />
            </div>
          </div>

          <div className="col-lg-4 col-12 order-lg-2 mb-10">
            <SidebarWrap>
              <SidebarWidget>
                <SidebarSearch />
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
                  title="Бусад арга хэмжээ"
                />
                <SidebarPostActivity />
              </SidebarWidget>
            </SidebarWrap>
          </div>
        </div>
      </div>
    </div>
  );
};
ActivityDetailsContainer.propTypes = {
  data: PropTypes.object,
};

export default ActivityDetailsContainer;
