import HeroSection from "../components/sections/heroSection";
import FeatureSections from "../components/sections/featureSections";
import PopularSection from "../components/sections/popularSection";
import LogoSection from "../components/sections/logoSection";

function Home(){
    return (
        <div>
            <HeroSection />
            <FeatureSections/>
            <PopularSection align="center" />
            <LogoSection />
        </div>

)
}

export default Home;