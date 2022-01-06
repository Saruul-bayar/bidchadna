import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ActivityDetailsData from "../../data/Activity/ActivityDetails.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Parallax from "parallax-js";
import SidebarWrap from "../../components/Sidebar/SidebarWrap.jsx";
import SidebarWidget from "../../components/Sidebar/SidebarWidget.jsx";
import SidebarTitle from "../../components/Sidebar/SidebarTitle";
import SidebarSearch from "../../components/Sidebar/SidebarSearch.jsx";
import SidebarCategories from "../../components/Sidebar/SidebarCategories.jsx";
import SidebarCategoriesNews from "../../components/Sidebar/SidebarCategoriesNews.jsx";
import SidebarCategoriesActivity from "../../components/Sidebar/SidebarCategoriesActivity";
import SidebarPostActivity from "../../components/Sidebar/SidebarPostActivity";
import ReactPaginate from "react-paginate";

const ActivityIconBox = ({ classOption }) => {
  const sceneEl = useRef(null);

  const [activities] = useState(ActivityDetailsData.slice(0, 29));
  const [pageNumber, setPageNumber] = useState(0);

  const activitiesPerPage = 6;
  const pagesVisited = activitiesPerPage * pageNumber;

  const displayActivities = activities
    .slice(pagesVisited, pagesVisited + activitiesPerPage)
    .map((activities, key) => {
      return (
        <div key={key} className="col mb-6" data-aos="fade-up">
          <IconBox data={activities} key={key} />
        </div>
      );
    });

  const pageCount = Math.ceil(activities.length / activitiesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div
      className={`section section-padding-t90 section-padding-bottom ${classOption}`}
    >
      <div className="container">
        <SectionTitle
          headingOption="fz-32"
          title="Хөжлийн бэрхшээлтэй иргэдэд чиглэсэн олон сайн дурын аян үйл ажилгаанууд зохогддог"
        />
        <div className="row mb-n10">
          <div className="col-lg-8 col-12 order-lg-1 mb-10">
            <div className="row row-cols-1 mb-n6 icon-box-shape-animation no-gutters">
              {displayActivities}
            </div>
          </div>
          <div className="col-lg-4 col-lg-4 col-12 order-lg-1 mb-10">
            <SidebarWrap>
              <SidebarWidget>
                <SidebarSearch
                  placeholder="Арга хэмжээ хайх"
                  data={ActivityDetailsData}
                  page={"/activity-details/"}
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
                  title="Бусад арга хэмжээ"
                />
                <SidebarPostActivity />
              </SidebarWidget>
            </SidebarWrap>
          </div>
          <div className="col-12  order-lg-2">
            <ReactPaginate
              previousLabel={"<"}
              breakLabel={"..."}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              marginPagesDisplayed={3}
              containerClassName={"pagination center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>

        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/shape-animation/video-shape-1.png"
              }
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

ActivityIconBox.propTypes = {
  classOption: PropTypes.string,
};
ActivityIconBox.defaultProps = {
  classOption: "section section-padding-t90 section-padding-bottom",
};

export default ActivityIconBox;
