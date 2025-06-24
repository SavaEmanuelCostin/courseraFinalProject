import Highlights from "./HighlightsSection";
import Testimonials from "./Testimonials";
import AboutSection from "./About";
import Banner from "../Banner";

const Homepage = ()=> {
    return(
        <>
            <Banner />
            <Highlights />
            <Testimonials />
            <AboutSection />
        </>
    )
}

export default Homepage;