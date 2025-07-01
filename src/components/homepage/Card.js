import ScouterIcon from "../../images/scouter-icon.svg";

const Card = ({ title, description, imageSrc, price }) => {
    return (
        <div className="card">
            <div className="card-image bg-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
            <div className="card-inner-container">
                <div className="card-top-text">
                    <h4>{title}</h4>
                    <span>$ {price}</span>
                </div>
                <div className="card-description">
                    {description}
                </div>
                <div className="card-footer">
                    <a href="#OrderDelivery" aria-label="Order a delivery">Order a delivery <img src={ScouterIcon} alt="Scouter"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Card;