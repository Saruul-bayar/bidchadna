import React from 'react';
import {Link} from "react-router-dom";
import NewsData from '../../data/News/NewsData.json'

const SidebarPostNews = () => {
    return (
        <div className="sidebar-widget-content">
            <ul className="sidebar-widget-list-post">
                {NewsData.slice(0, 4).map((value) => {
                    return(
                        <li key={value.id}>
                            <span className="cate">{value.categories.slice(0, 1)}</span>
                            <Link to={process.env.PUBLIC_URL + `/news-details/${value.id}`}>{value.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default SidebarPostNews;
