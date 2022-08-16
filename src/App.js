import HeroSection from "./components/sections/heroSection";
import Header from "./components/ui/header";
import FeatureSections from "./components/sections/featureSections";
import PopularSection from "./components/sections/popularSection";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSections/>
      <PopularSection />
    </>
  );
}

export default App;
