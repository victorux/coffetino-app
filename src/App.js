import HeroSection from "./components/sections/heroSection";
import Header from "./components/ui/header";
import FeatureSections from "./components/sections/featureSections";
import PopularSection from "./components/sections/popularSection";
import LogoSection from "./components/sections/logoSection";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSections/>
      <PopularSection />
      <LogoSection />
    </>
  );
}

export default App;
