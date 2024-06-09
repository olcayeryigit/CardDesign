import ProductCard from "./product-card/product-card"
import data from "../../data/data.json";
import "./products.scss";
const Products = () => {
  let products = data.map((item) => item);

  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          rate={item.rate}
          image={item.image}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default Products;
