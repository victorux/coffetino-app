import { BrowserRouter, Routes, Route} from "react-router-dom"
// UI
import Header from "./components/ui/header";
import FooterComponent from "./components/ui/footer/index.jsx";
// Pages
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Success from "./pages/Success";
import Pay from "./pages/Pay";



function App() {
  return (
    <>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/success" element={<Success />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    </>
  );
}

export default App;
