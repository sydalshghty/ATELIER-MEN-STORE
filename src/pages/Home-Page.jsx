import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import SpecialOffers from "../components/SpecialOffers";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function HomePage() {
    return (
        <>
            <Hero />
            <NewArrivals />
            <BestSellers />
            <SpecialOffers />
            <Newsletter />
            <Footer />
        </>
    )
}
export default HomePage;