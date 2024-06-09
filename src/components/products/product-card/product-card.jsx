import "./product-card.scss";
import StarRating from "./star-rating";

const ProductCard = (props) => {
  const { id, title, image, price, discount, rate } = props;

  return (
    <div className="product-card">
      <div className="image">
        {!!discount && <div className="discount">-%{discount}</div>}
        <img src={`images/${image}`} alt="" />
      </div>
      <div className="content">
        <StarRating rate={rate} />
        <p className="title">{title}</p>
        {discount == 0 ? (
          <p className="price">${price}</p>
        ) : (
          <p className="price">
            <span className="price2">${price}</span> $
            {price * ((100 - discount) / 100)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
