import Card from "./Card";

const weekSpecials = [
    {
        title: "Greek salad",
        description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../../images/salad.jpg"),
        price: "12.99"
    },
    {
        title: "Bruchetta",
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../../images/bruchetta.jpg"),
        price: "5.99"
    },
    {
        title: "Lemon Dessert",
        description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../../images/lemon.jpg"),
        price: "5.00"
    },
];

const Highlights = () => {
    return (
        <div id="Menu">
        <div className="title-with-button">
            <h2>This weeks specials!</h2>
            <button aria-label="Online Menu" type="button" className="button button-default">Online Menu</button>
        </div>
        <div className="highlights-container">
            {weekSpecials.map((special) => (
                <Card key={special.title}
                title={special.title}
                description={special.description}
                imageSrc={special.getImageSrc()}
                price={special.price} />
            ))}
        </div>
        </div>
    )
}

export default Highlights;