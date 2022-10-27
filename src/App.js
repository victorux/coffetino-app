import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { useLayoutEffect } from 'react'
// UI Components
import Header from "./components/ui/header";
import FooterComponent from "./components/ui/footer/index.jsx";
// Pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Success from "./pages/Success";
import Pay from "./pages/Pay";
import Cart from "./pages/Cart";

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <>
        <BrowserRouter>
          <Wrapper>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/pay" element={<Pay />} />
                  <Route path="/success" element={<Success />} />
              </Routes>
              <FooterComponent />
          </Wrapper>
        </BrowserRouter>
    </>
  );
}

export default App;
