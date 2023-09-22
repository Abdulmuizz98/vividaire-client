import FeaturedCollectionCard from "../../FeaturedCollectionCard";
import homeItemsOne from "../../../assets/home_items_1_img.png";
import lifestyleOne from "../../../assets/lifestyle_1_img.png";
import travelOne from "../../../assets/travel_1_img.png";

import "./FeaturedSection.css";

const collections = [
  {
    id: 1,
    name: "home items",
    unspacedName: "homeitems",
  },
  {
    id: 2,
    name: "lifestyle",
    url: lifestyleOne,
  },
  {
    id: 3,
    name: "easy travel",
    url: travelOne,
  },
];

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <h2>featured collection</h2>
      <div className="collections-container">
        {collections.map((collection) => (
          <FeaturedCollectionCard
            key={collection.id}
            name={collection.name}
            image={collection.url}
            id={collection.id}
          />
        ))}
      </div>
      <p>
        <a href="">view all collection</a>
      </p>
    </section>
  );
};

export default FeaturedSection;
