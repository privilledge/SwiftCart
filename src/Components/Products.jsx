import Image from "../assets/products/product_2.png";
import Image1 from "../assets/products/product_3.png";
import Image2 from "../assets/products/product_4.png";
import Image3 from "../assets/products/product1.png";
import Image4 from "../assets/products/product_5.png";
import Image5 from "../assets/products/product_6.png";
import Image6 from "../assets/products/product_7.png";
import Image7 from "../assets/products/product_8.png";
import Image10 from "../assets/products/product_10.png";
import children from "../assets/products/children.jpg";
import AddButton from "./AddButton";
import { useCart } from "./CartContext";
import RemoveButton from "./RemoveButton";
import { useNavigate } from "react-router-dom";

function Products({ category, searchQuery }) {
  const { addToCart, removeFromCart, cartItems, updateItemQuantity } =
    useCart();
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Brown fun bag",
      price: 17,
      oldPrice: 21,
      image: Image,
      categories: ["accessories", "deals"],
    },
    {
      id: 2,
      name: "Fleece Sweaters ",
      price: 35,
      oldPrice: 38,
      image: Image6,
      categories: ["women", "womenPromo", "new"],
    },
    {
      id: 3,
      name: "Leather Wallet",
      price: 23,
      oldPrice: 27,
      image: Image7,
      categories: ["women", "accessories", "womenPromo", "new"],
    },

    {
      id: 5,
      name: "Duffel bag",
      price: 21,
      oldPrice: 24,
      image: Image2,
      categories: ["accessories", "new", "deals"],
    },
    {
      id: 6,
      name: "Hoodie Casual",
      price: 45,
      oldPrice: 70,
      image: Image3,
      categories: ["men", "new"],
    },
    {
      id: 7,
      name: "Men's oxfords",
      price: 45,
      oldPrice: 70,
      image: Image4,
      categories: ["men", "shoes", "new"],
    },
    {
      id: 8,
      name: "Sunglasses",
      price: 21,
      oldPrice: 24,
      image: Image5,
      categories: ["accessories", "deals", "womenPromo", "new"],
    },
    {
      id: 9,
      name: "Sweatshirt",
      price: 15,
      oldPrice: 17,
      image: Image10,
      categories: ["men", "deals", "new"],
    },
    {
      id: 10,
      name: "Fluffy sweater",
      price: 23,
      oldPrice: 34,
      image: Image1,
      categories: ["women", "womenPromo", "new"],
    },
    {
      id: 16,
      name: "Kids combo",
      price: 87,
      oldPrice: 99,
      image: children,
      categories: ["children"],
    },
  ];

  // Filter products based on the category
  const filteredByCategory = category
    ? products.filter((product) => product.categories.includes(category))
    : products;

  // Further filter products based on the search query
  const filteredProducts = filteredByCategory.filter(
    (product) =>
      !searchQuery ||
      (typeof searchQuery === "string" &&
        typeof product.name === "string" &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Check if item is already added in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const handleProductClick = (id) => {
    navigate(`/SwiftCart/product/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          {filteredProducts.map((product) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-2 product"
              key={product.id}
            >
              <div className="card ">
                <div className="card-body">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "90%" }}
                  />
                  <div className="bottom row">
                    <div className="info col-9">
                      <h6
                        className="product-name"
                        onClick={() => handleProductClick(product.id)}
                      >
                        {product.name}
                      </h6>
                      <h6 className="price">
                        ${product.price} <s>${product.oldPrice}</s>
                      </h6>
                    </div>
                    <div className="col-3">
                      {" "}
                      {isProductInCart(product.id) ? (
                        <RemoveButton
                          onClick={() => removeFromCart(product.id)}
                        />
                      ) : (
                        <AddButton onClick={() => addToCart(product)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          {filteredProducts.map((product) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 box mb-3 mr-auto"
              key={product.id}
            >
              <img src={product.image} alt={product.name} />
              <div className="bottom row">
                <div className="info col-7">
                  <h6
                    className="product-name"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.name}
                  </h6>
                  <h6 className="price">
                    ${product.price} <s>${product.oldPrice}</s>
                  </h6>
                </div>
                {isProductInCart(product.id) ? (
                  <RemoveButton onClick={() => removeFromCart(product.id)} />
                ) : (
                  <AddButton onClick={() => addToCart(product)} />
                )}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <br></br>
    </>
  );
}
export default Products;
