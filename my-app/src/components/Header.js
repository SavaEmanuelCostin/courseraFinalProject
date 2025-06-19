
import Logo from "../images/Logo.svg";
import MobileNavIcon from "../images/icon-hamburger-menu.svg";
import MobileCloseButton from "../images/menu-close.svg";
import { useState } from "react";

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleClick = () => {
        setIsNavVisible((prev) => !prev);
    };
  return (
    <header>
        <div className="container">
            <div className="logo-container">
                <img src={Logo} alt="Logo"></img>
            </div>
            <div className={`nav-container ${isNavVisible ? "nav-visible" : "nav-hidden"}`}>
                <nav>
                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Menu">Menu</a>
                        </li>
                        <li>
                            <a href="#Reservations">Reservations</a>
                        </li>
                        <li>
                            <a href="#OrderOnline">Order Online</a>
                        </li>
                        <li>
                            <a href="#Login">Login</a>
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