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
              <Route path="/SwiftCart" element={<Home />} />

              <Route path="SwiftCart/shop" element={<Shop />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="SwiftCart/checkout" element={<Checkout />} />
              </Route>
              <Route path="/SwiftCart/contact" element={<Contact />} />
              <Route path="/SwiftCart/cart" element={<Cart />} />
              <Route
                path="/SwiftCart/product/:id"
                element={<SingleProduct />}
              ></Route>
              <Route path="/SwiftCart/login" element={<Login />} />
              <Route path="/SwiftCart/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
