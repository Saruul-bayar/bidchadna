import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import NewsData from "../../data/News/NewsData.json";
import NewsItem from "../../components/NewsItem/NewsItem";
import ReactPaginate from "react-paginate";

const PageNews = () => {
  const [news] = useState(NewsData.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);

  const newsPerPage = 9;
  const pagesVisited = newsPerPage * pageNumber;

  const displayNews = news
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((news, key) => {
      return (
        <div key={key} className="col mb-6" data-aos="fade-up">
          <NewsItem data={news} key={key} />
        </div>
      );
    });

  const pageCount = Math.ceil(news.length / newsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {displayNews}
        </div>
      </div>
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
            pageLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageNews;
