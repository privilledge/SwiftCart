import Image from "../assets/products/product_2.png";
import Image1 from "../assets/products/product_3.png";
import Image2 from "../assets/products/product_4.png";
import Image3 from "../assets/products/product1.png";
import Image4 from "../assets/products/product_5.png";
import Image5 from "../assets/products/product_6.png";
import Image6 from "../assets/products/product_7.png";
import Image7 from "../assets/products/product_8.png";
import Image8 from "../assets/products/product_8.png";
import Image9 from "../assets/products/product_9.png";
import Image10 from "../assets/products/product_10.png";
import AddButton from "./AddButton";
import { useCart } from "./CartContext";

function Products() {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Brown fun b...",
      price: 17,
      oldPrice: 21,
      image: Image,
    },
    {
      id: 2,
      name: "Fleece Sweaters pu...",
      price: 35,
      oldPrice: 38,
      image: Image6,
    },
    {
      id: 3,
      name: "Women's Leather W...",
      price: 23,
      oldPrice: 27,
      image: Image7,
    },
    {
      id: 4,
      name: "Fleece Sweaters pul...",
      price: 45,
      oldPrice: 70,
      image: Image1,
    },
    {
      id: 5,
      name: "Basics duffel bag...",
      price: 21,
      oldPrice: 24,
      image: Image2,
    },
    {
      id: 6,
      name: "Men's Hoodie Cas...",
      price: 45,
      oldPrice: 70,
      image: Image3,
    },
    {
      id: 7,
      name: "Fleece Sweaters pul...",
      price: 45,
      oldPrice: 70,
      image: Image1,
    },
    {
      id: 8,
      name: "Basics duffel bag...",
      price: 21,
      oldPrice: 24,
      image: Image2,
    },
    {
      id: 9,
      name: "Men's Hoodie Cas...",
      price: 45,
      oldPrice: 70,
      image: Image3,
    },
  ];

  return (
    <>
      <div className="container boxes">
        {products.slice(0, 3).map((product) => (
          <div className="col-lg-4 col-md-4 col-sm-12 box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="bottom row">
              <div className="info col-7">
                <h6 className="">{product.name}</h6>
                <h6 className="price">
                  ${product.price} <s>${product.oldPrice}</s>
                </h6>
              </div>
              <AddButton onClick={() => addToCart(product)} />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="container boxes">
        {products.slice(3, 6).map((product) => (
          <div className="col-lg-4 col-md-4 col-sm-12 box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="bottom row">
              <div className="info col-7">
                <h6 className="">{product.name}</h6>
                <h6 className="price">
                  ${product.price} <s>${product.oldPrice}</s>
                </h6>
              </div>
              <AddButton onClick={() => addToCart(product)} />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="container boxes">
        {products.slice(6, 9).map((product) => (
          <div className="col-lg-4 col-md-4 col-sm-12 box" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="bottom row">
              <div className="info col-7">
                <h6 className="">{product.name}</h6>
                <h6 className="price">
                  ${product.price} <s>${product.oldPrice}</s>
                </h6>
              </div>
              <AddButton onClick={() => addToCart(product)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
