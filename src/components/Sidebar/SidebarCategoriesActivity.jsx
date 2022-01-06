import React from "react";
import { flatDeep, slugify, containsObject } from "../../utils";
import { Link } from "react-router-dom";
import ActivityDetails from "../../data/Activity/ActivityDetails.json";

const SidebarCategoriesActivity = () => {
  const cats = ActivityDetails.map((item) => {
    return item.categories;
  });
  let singleCatArray = flatDeep(cats);
  let categories = [];
  singleCatArray.forEach((cat) => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1,
    };
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1,
      };
    } else {
      categories.push(obj);
    }
  });
  return (
    <div className="sidebar-widget-content">
      <ul className="sidebar-widget-cate-list">
        {categories.map((cat) => {
          return (
            <li key={cat.slug}>
              <Link to={process.env.PUBLIC_URL + `/activity`}>
                <span className="text">{cat.title}</span>
                <span className="count">{cat.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarCategoriesActivity;
