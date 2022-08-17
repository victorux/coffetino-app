import HeroSection from "./components/sections/heroSection";
import Header from "./components/ui/header";
import FeatureSections from "./components/sections/featureSections";
import PopularSection from "./components/sections/popularSection";
import LogoSection from "./components/sections/logoSection";
import FooterComponent from "./components/ui/footer/index.jsx";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSections/>
      <PopularSection />
      <LogoSection />
      <FooterComponent />
    </>
  );
}

export default App;
