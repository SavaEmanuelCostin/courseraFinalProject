
import React, { useEffect, useRef } from "react";
import Logo from "../images/Logo.svg";
import MobileNavIcon from "../images/icon-hamburger-menu.svg";
import MobileCloseButton from "../images/menu-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const headerRef = useRef(null);

    useEffect(() => {
    let prevPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement)
        return;
    
      if (prevPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else
        currHeaderElement.style.transform = "translateY(-72px)";
      
      prevPos = currScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleClick = () => {
        setIsNavVisible((prev) => !prev);
    };
  return (
    <header ref={headerRef}>
        <div className="container">
            <div className="logo-container">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className={`nav-container ${isNavVisible ? "nav-visible" : "nav-hidden"}`}>
                <nav>
                    <ul>
                        <li>
                            <Link aria-label="Go to Homepage" to="/">Home</Link>
                        </li>
                        <li>
                            <a aria-label="Go to About Section" href="/#About">About</a>
                        </li>
                        <li>
                            <a aria-label="Go to Menu Section" href="/#Menu">Menu</a>
                        </li>
                        <li>
                            <Link aria-label="Go to Reservations page" to="/booking">Reservations</Link>
                        </li>
                        <li>
                            <a aria-label="Go to Order Online page" href="#OrderOnline">Order Online</a>
                        </li>
                        <li>
                            <a aria-label="Go to Login page" href="#Login">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mobile-nav-container">
                <span onClick={handleClick}>
                    {isNavVisible ? (
                        <img style={{width: "31px", marginRight: "-5px"}} src={MobileCloseButton} alt="Mobile Close"></img>
                    ) : (
                        <img style={{width: "24px"}} src={MobileNavIcon} alt="mobile nav icon"></img>
                    )}
                </span>
            </div>
        </div>
    </header>
  );
};
export default Header;