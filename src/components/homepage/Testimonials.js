import TestimonialsCard from "./TestimonialsCard";

const TestimonialsData = [
    {
        name: "User 1",
        rating: 2,
        getImageSrc: () => require("../../images/placeholder-user-image.jpg"),
        id: 1
    },
    {
        name: "User 2",
        rating: 1,
        getImageSrc: () => require("../../images/placeholder-user-image.jpg"),
        id: 2
    },
    {
        name: "User 3",
        rating: 4,
        getImageSrc: () => require("../../images/placeholder-user-image.jpg"),
        id: 3
    },
    {
        name: "User 4",
        rating: 5,
        getImageSrc: () => require("../../images/placeholder-user-image.jpg"),
        id: 4
    },
]
const Testimonials = () => {
    return (
        <div className="testimonials-container-wrapper">
            <h2 className="center">Testimonials</h2>
            <div className="testimonials-cards-wrapper">
                {TestimonialsData.map((testimonialsItem) => (
                    <TestimonialsCard
                        key={testimonialsItem.id}
                        name={testimonialsItem.name}
                        rating={testimonialsItem.rating}
                        image={testimonialsItem.getImageSrc()}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;