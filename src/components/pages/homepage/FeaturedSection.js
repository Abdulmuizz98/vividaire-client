import FeaturedCollectionCard from "../../FeaturedCollectionCard";
import "./FeaturedSection.css";

const collections = [
  {
    id: 1,
    name: "home items",
    url: "https://source.unsplash.com/402x659/?home",
  },
  {
    id: 2,
    name: "lifestyle",
    url: "https://source.unsplash.com/402x659/?lifestyle",
  },
  {
    id: 3,
    name: "easy travel",
    url: "https://source.unsplash.com/402x659/?baggage",
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
