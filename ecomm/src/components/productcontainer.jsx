import ProductCard from "./product card.jsx";
import PropTypes from "prop-types";

export default function ProductsContainer({
  products = [],
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
  
  cart = [],
}) {
  function findCartStatus(product = {}) {
    return cart.some((d) => d.name == product.name);
  }
  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((data, index) => (
            <ProductCard
              key={`${data.name}-${index}`}
              data={data}
              
              handleAddToCart={handleAddToCart}
              isAddedToCart={findCartStatus(data)}

              handleRemoveFromCart={handleRemoveFromCart}
              isRemoveFromCart={findCartStatus(data)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
  
};