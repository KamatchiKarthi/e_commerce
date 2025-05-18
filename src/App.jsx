import React, { useEffect, useState } from "react";
import Navbar from "./components/header";
import ProductList from "./components/productList";
import Cartmodel from "./components/cartmodal";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);
  const [isopen, setisopen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setproducts(data);
    };
    fetchProducts();
  }, []);

  const addtocart = (product) => {
    setcart((prevCart) => {
      const existProduct = prevCart.find((item) => item.id === product.id);
      if (existProduct) {
        alert("Product already in cart");
        return prevCart; // return unchanged cart
      } else {
        return [...prevCart, { ...product, quantity: 1 }]; // add new product
      }
    });
    console.log(setisopen);
  };

  const increaseQuantity = (id) => {
    setcart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setcart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }
        return item;
      });
    });
  };

  const removeItem = (id) => {
    setcart ((prevcart) => {
      return prevcart.filter((item) => item.id !== id);
    })
  }
    return (
      <div>
        <Navbar cartCount={cart.length} cartopen={() => setisopen(true)} />
        <ProductList products={products} addtocart={addtocart} />
        {isopen && (
          <Cartmodel
            cart={cart}
            product={products}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
            cartclose={() => setisopen(false)}
          />
        )}
      </div>
    );
  };

export default App;
