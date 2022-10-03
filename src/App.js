import { BrowserRouter, Routes, Route} from "react-router-dom"
// UI
import Header from "./components/ui/header";
import FooterComponent from "./components/ui/footer/index.jsx";
// Pages
import Home from "./pages/Home"
import Shop from "./pages/Shop"



function App() {
  return (
    <>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    </>
  );
}

export default App;
