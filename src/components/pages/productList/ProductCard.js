import { VdCaretDown, VdFavoriteOutline } from "../../Icons";
import Button from "../../Button";
import "./ProductCard.css";

const ProductCard = ({ name, image, isFavorite }) => {
  return (
    <div className="product-card">
      <figure className="product-image-frame">
        <img src={image} alt={`${name} image`} />
      </figure>
      <div className="product-info">
        <div className="product-name">
          {name} {<VdFavoriteOutline />}
        </div>
        <div className="product-toggle-detail">
          <a href="">See more detail</a>
          <a href="">
            <VdCaretDown />
          </a>
        </div>
        <div className="product-detail"></div>
        <div className="buy-button">
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
