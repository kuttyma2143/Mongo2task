import { useState, useLayoutEffect } from "react";
import "./App.css";
import NavBar from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import ProductsContainer from "./components/productcontainer.jsx";
import Billboard from "./components/billboard.jsx";
import ProductCard from "./components/product card.jsx";

 function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);





  function handleAddToCart(data = {}) {
    let cartCopy = [...cart];
    cartCopy.push(data);
    setCart(cartCopy);
  }
  function handleRemoveFromCart(data = {}) {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== data.id);
    setCart(cartCopy);

  }

  return (
    <div>
      
      <NavBar quantity={cart.length} />
      <Billboard />
      
      <ProductsContainer
        products={products}
       
        handleAddToCart={handleAddToCart} 
        handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />
      <ProductCard/>
      
      <Footer/>
    
    </div>
  );
}


export default App
