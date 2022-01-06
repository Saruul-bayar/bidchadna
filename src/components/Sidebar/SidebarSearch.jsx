import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarSearch = ({ placeholder, data, page }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = (e) => {
    e.preventDefault();
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="sidebar-widget-content">
      <div className="sidebar-widget-search">
        <form>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />

          {filteredData.length === 0 ? (
            <button>
              <i className="fas fa-search"></i>
            </button>
          ) : (
            <button id="clearBtn" onClick={clearInput}>
              <i className="fas fa-times"></i>
            </button>
          )}

          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <div key={key} className="bg-white p-5 border-bottom">
                    <Link to={process.env.PUBLIC_URL + `${page}${1}`}>
                      {value.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
SidebarSearch.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.object,
  page: PropTypes.string,
};

export default SidebarSearch;
