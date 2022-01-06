import React from "react";
import { Link } from "react-router-dom";
import ActivityDetails from "../../data/Activity/ActivityDetails.json";

const SidebarPostNews = () => {
  return (
    <div className="sidebar-widget-content">
      <ul className="sidebar-widget-list-post">
        {ActivityDetails.slice(0, 6).map((value) => {
          return (
            <li key={value.id}>
              <span className="cate">{value.categories.slice(0, 1)}</span>
              <Link
                to={process.env.PUBLIC_URL + `/activity-details/${value.id}`}
              >
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarPostNews;
