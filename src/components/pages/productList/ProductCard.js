import { VdCaretRight } from "../../Icons";
import Button from "../../Button";
import "./ProductCard.css";

const ProductCard = ({ name, image }) => {
  return (
    <div className="product-card">
      <figure className="product-image-frame">
        <img src={image} alt={`${name} image`} />
      </figure>
      <div className="product-info">
        <p>{name}</p>
        <p className="product-toggle-detail">
          See more detail <VdCaretRight />
        </p>
        <div className="product-detail"></div>
        <div className="buy-botton">
          <Button
            value="BUY MINE"
            bgdColor="#825E52"
            color="#ECE4DA"
            width="35.9rem"
            height="6.2rem"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
