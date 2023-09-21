import { useState } from "react";
import ArticleCard from "../../ArticleCard";

import "./ArticlesSection.css";

const articles = [
  {
    id: 1,
    image: "",
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
  {
    id: 2,
    image: "",
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
  {
    id: 3,
    image: "",
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
];

const ArticlesSection = () => {
  const [activeArticle, setActiveArticle] = useState(articles[0]);

  console.log(activeArticle);

  return (
    <section className="articles-section">
      <div className="slideshow">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            id={article.id}
            active={article.id === 1 && false}
          />
        ))}
      </div>
      <div className="slide-info">
        <div>{`0${activeArticle.id} - 03`}</div>
        <h2>selected from our articles</h2>
        <p>{activeArticle.title}</p>
        <p>{activeArticle.sneakpeek}</p>
        <a href="">read more</a>
      </div>
      <a href="">view all our articles</a>
    </section>
  );
};

export default ArticlesSection;
