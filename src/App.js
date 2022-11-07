import { BrowserRouter, Routes, Route, useLocation, Navigate} from "react-router-dom"
import { useLayoutEffect } from 'react'
// UI Components
import Header from "./components/ui/header";
import FooterComponent from "./components/ui/footer/index.jsx"
// Pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Success from "./pages/Success"
import Cart from "./pages/Cart"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";
import Terms from "./pages/Terms.jsx";
import AboutUs from "./pages/AboutUs";

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
        <BrowserRouter>
          <Wrapper>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
                  <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/about" element={<AboutUs />} />
              </Routes>
              <FooterComponent />
          </Wrapper>
        </BrowserRouter>
    </>
  );
}

export default App;
