import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogClassic from "../../components/Blog/BlogClassic.jsx";
import SidebarWrap from "../../components/Sidebar/SidebarWrap.jsx";
import SidebarWidget from "../../components/Sidebar/SidebarWidget.jsx";
// import SidebarBanner from '../../components/Sidebar/SidebarBanner.jsx';
import SidebarTitle from "../../components/Sidebar/SidebarTitle";
import SidebarSearch from "../../components/Sidebar/SidebarSearch.jsx";
import SidebarCategories from "../../components/Sidebar/SidebarCategories.jsx";
import SidebarCategoriesNews from "../../components/Sidebar/SidebarCategoriesNews.jsx";
import SidebarCategoriesActivity from "../../components/Sidebar/SidebarCategoriesActivity.jsx";
import SidebarPost from "../../components/Sidebar/SidebarPost.jsx";
import SidebarPostNews from "../../components/Sidebar/SidebarPostNews";
import ReactPaginate from "react-paginate";

// import SidebarTag from '../../components/Sidebar/SidebarTag.jsx';

const BlogClassicContainer = () => {
  const [articles] = useState(BlogClassicData.slice(0, 40));
  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 4;
  const pagesVisited = articlesPerPage * pageNumber;

  const displayArticles = articles
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((articles, key) => {
      return (
        <div key={key} className="col mb-6" data-aos="fade-up">
          <BlogClassic data={articles} key={key} />
        </div>
      );
    });

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row mb-n10">
          <div className="col-lg-8 col-11 order-lg-1 mb-10">
            <div className="row row-cols-1 no-gutters">{displayArticles}</div>

            <div className="row mt-10">
              <div className="col">
                <ReactPaginate
                  previousLabel={"<"}
                  breakLabel={"..."}
                  nextLabel={">"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  marginPagesDisplayed={3}
                  containerClassName={"pagination center"}
                  pageClassName={"page-item"}
                  previousClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-12 order-lg-2 mb-10`}>
            <SidebarWrap>
              <SidebarWidget>
                <SidebarSearch
                  placeholder="нийтлэл хайх"
                  data={BlogClassicData}
                  page={"/blog-details/"}
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
                  title="Бусад нийтлэлүүд"
                />
                <SidebarPost />
                <SidebarPostNews />
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
  );
};

BlogClassicContainer.propTypes = {
  data: PropTypes.object,
};

export default BlogClassicContainer;
