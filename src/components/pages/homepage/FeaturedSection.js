import FeaturedCollectionCard from "../../FeaturedCollectionCard";
import "./FeaturedSection.css";

const collections = [
  {
    id: 1,
    name: "home items",
    image: "",
  },
  {
    id: 2,
    name: "lifestyle",
    image: "",
  },
  { id: 3, name: "easy travel", image: "" },
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
            image={collection.image}
          />
        ))}
      </div>
      <a href="">view all collection</a>
    </section>
  );
};

export default FeaturedSection;
