import "./ArticleCard.css";

const ArticleCard = ({ image, id, active }) => {
  return (
    <div
      className={`article-card ${
        active ? "big-card" : "small-card"
      } card-${id}`}
    >
      <div>{id}</div>
      <figure>
        <img src={image} alt="article banner" />
      </figure>
    </div>
  );
};

export default ArticleCard;
