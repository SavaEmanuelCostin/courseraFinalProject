
import FooterImage from "../images/restauranfood.jpg";

const Footer = () => {

  return (
    <footer>
        <div className="container">
            <div className="footer-image-container">
                <img src={FooterImage} alt="Footer img"></img>
            </div>
            <div className="footer-links-container">
                <div>
                    <h3>Navigation</h3>
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
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href="#Address">Address</a>
                        </li>
                        <li>
                            <a href="#PhoneNumber">Phone number</a>
                        </li>
                        <li>
                            <a href="#Email">Email</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <a href="#Address">Address</a>
                        </li>
                        <li>
                            <a href="#PhoneNumber">Phone number</a>
                        </li>
                        <li>
                            <a href="#Email">Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};
export default Footer;