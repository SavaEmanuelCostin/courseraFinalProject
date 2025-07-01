import BannerImage from "../images/restauranfood.jpg";
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking');
    };
    return (
        <div className="banner-main-container">
            <div className="container">
                <div className="banner-infos">
                    <div className="banner-infos-bg-container">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button onClick={handleClick} type="button" className="button button-default" aria-label="Reserve a table">Reserve a table</button>
                    </div>
                </div>
                <div className="banner-bg-image bg-image" style={{backgroundImage: `url(${BannerImage})`}}></div>
            </div>
        </div>
    )
}

export default Banner;