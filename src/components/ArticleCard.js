const ArticleCard = ({ image, id, active }) => {
  return (
    <figure>
      <div>{id}</div>
      <img src={image} alt="article banner" />
    </figure>
  );
};

export default ArticleCard;
