import React from "react";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };
  return (
    <nav className="site-mobile-menu">
      <ul>
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Нүүр хуудас</span>
          </NavLink>
        </li>
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "/news"}>
            <span className="menu-text">Мэдээ мэдээлэл</span>
          </NavLink>
          <span className="menu-toggle" onClick={onClickHandler}>
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/article"}>
                <span className="menu-text">Нийтлэл</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/activity"}>
                <span className="menu-text">Арга хэмжээ</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + `/volunteer`}>
            <span className="menu-text">Сайн дурын хөтөлбөр</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + `/about`}>
            <span className="menu-text">Бидний тухай</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/contact"}>
            <span className="menu-text">Холбоо барих</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
