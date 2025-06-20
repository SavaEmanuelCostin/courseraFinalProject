import fullStar from '../../images/star-full.png';
import emptyStar from '../../images/star-empty.png';

const TestimonialsCard = ({ name, rating, image }) => {
    const totalStars = 5;
    return(
        <div className="testimonials-card">
            <h2>Rating</h2>
            <div className="name-section">
                <img src={image} alt={name}></img>
                <p>{name}</p>
            </div>
            <div className="review-section">
                 {Array.from({ length: totalStars }).map((_, index) => (
                    <img
                    key={index}
                    src={index < rating ? fullStar : emptyStar}
                    alt={index < rating ? "Full star" : "Empty star"}
                    width={22}
                    height={22}
                    />
                ))}
            </div>
        </div>
    )
}

export default TestimonialsCard;