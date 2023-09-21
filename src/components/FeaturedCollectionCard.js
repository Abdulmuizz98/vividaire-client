import { VdRightArrowOutline } from "./Icons";
import "./FeaturedCollectionCard.css";

const FeaturedCollectionCard = ({ name, image }) => {
  return (
    <div className="featured-collection-card">
      <figure>
        <img src={image} alt={`${name} collection banner`} />
      </figure>
      <div className="collection-action">
        <a href="">{name}</a>
        <VdRightArrowOutline />
      </div>
    </div>
  );
};

export default FeaturedCollectionCard;
