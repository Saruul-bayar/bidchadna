import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/news"}><span className="menu-text">Мэдээ мэдээлэл</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/article"}><span className="menu-text">Нийтлэл</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/activity"}><span className="menu-text">Арга хэмжээ</span></NavLink></li>
                        {/* <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text"></span></NavLink></li> */}
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Сайн дурын хөтөлбөр</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">Бидний тухай</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Холбоо барих</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
