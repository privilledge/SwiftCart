import Header from "./Components/Header";
import Home from "./Components/Home";
import { CartProvider } from "./Components/CartContext.jsx";

import Contact from "./Components/Contact.jsx";

import SingleProduct from "./Components/SingleProduct.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login.jsx";
import "./App.css";
import Shop from "./Components/Shop.jsx";
import Checkout from "./Components/Checkout.jsx";
import Signup from "./Components/Signup.jsx";
import { AuthProvider } from "./Components/AuthContext.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
function App() {
  return (
    <div className="body">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="checkout" element={<Checkout />} />
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product/:id" element={<SingleProduct />}></Route>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
