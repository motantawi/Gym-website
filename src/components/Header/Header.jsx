import React, { useRef, useEffect } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing",
    display: "Pricing",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const headerFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunction);

    return () => window.removeEventListener("scroll", headerFunction);
  }, []);

  const handleClick = (e) => {
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const clickEvent = (eo) => {
    document.getElementById("nav").style.right = "0";
  };
  const click2Event = (eo) => {
    document.getElementById("nav").style.right = "-100%";
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/*___________LOGO___________*/}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" loading="lazy"/>
            </div>
            <h2>Fitbody</h2>
          </div>
          {/*_________Navifation Menu________*/}
          <div className="navigation" id="nav">
            <ul className="menu">
              {nav__links.map((item) => {
                return (
                  <li className="nav__item">
                    <a onClick={handleClick} href={item.path}>
                      {item.display}
                    </a>
                  </li>
                );
              })}
              <li className="exit" onClick={click2Event}>
                x
              </li>
            </ul>
          </div>
          {/*________nav right________*/}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu" onClick={clickEvent}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
