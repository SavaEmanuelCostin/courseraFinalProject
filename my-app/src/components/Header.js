
import Logo from "../images/Logo.svg";


const Header = () => {

  return (
    <header>
        <div className="logo-container">
            <img src={Logo} alt="Logo"></img>
        </div>
        <div className="nav-container">
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
    </header>
  );
};
export default Header;