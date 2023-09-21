const FeaturedCollectionCard = ({ name, image }) => {
  return (
    <figure>
      <img src={image} alt="name" />
      <figcaption>
        {" "}
        <a href="">{name}</a>
      </figcaption>
    </figure>
  );
};

export default FeaturedCollectionCard;
