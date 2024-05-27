import Header from "./Components/Header";
import Home from "./Components/Home";
import { CartProvider } from "./Components/CartContext.jsx";

import Contact from "./Components/Contact.jsx";
import Promo from "./Components/Promo";
import Footer from "./Components/Footer";
import SingleProduct from "./Components/SingleProduct.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Shop from "./Components/Shop.jsx";
import Checkout from "./Components/Checkout.jsx";

function App() {
  return (
    <div className="body">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="singleProduct" element={<SingleProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      {/* <Header />
        <Home /> */}
      {/* <Routes>
          <Route path="/shop" exact component={shop} />
        </Routes>
        <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
