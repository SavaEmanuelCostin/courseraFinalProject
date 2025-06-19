const Card = ({ title, description, imageSrc, price }) => {
    return (
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
            <div className="card-inner-container">
                <div className="card-top-text">
                    <h4>{title}</h4>
                    <span>$ {price}</span>
                </div>
                <div className="card-description">
                    {description}
                </div>
                <div className="card-footer">
                    <a href="#OrderDelivery">Order a delivery</a>
                </div>
            </div>
        </div>
    )
}

export default Card;