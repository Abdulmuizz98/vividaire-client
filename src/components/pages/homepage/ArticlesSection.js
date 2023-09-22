import { useState } from "react";
import { VdRightArrow, VdLeftArrow } from "../../Icons";
import ArticleCard from "../../ArticleCard";

import "./ArticlesSection.css";

const [smallWidth, smallHeight, bigWidth, bigHeight] = [200, 401, 412, 677];
const articles = [
  {
    id: 1,
    url: `https://source.unsplash.com/${bigWidth}x${bigHeight}/?kitchen`,
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
  {
    id: 2,
    url: `https://source.unsplash.com/${smallWidth}x${smallHeight}/?decor`,
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
  {
    id: 3,
    url: `https://source.unsplash.com/${smallWidth}x${smallHeight}/?lifestyle`,
    title: "Favorite acrylic items from Amazon.",
    sneakpeek:
      "Welcome to the world of acrylics. Acrylic products harmonize elegance with durability and can easily transform your space into a vibrant and organized haven. In this article, we will unveil our favorite acrylic products from amazon and the... ",
  },
];
articles.reverse();

const ArticlesSection = () => {
  const [activeArticle, setActiveArticle] = useState(articles[2]);

  console.log(articles);

  return (
    <section className="articles-section">
      <div className="slideshow">
        <div className="slideshow-cards">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.url}
              id={article.id}
              active={article.id === activeArticle.id && true}
            />
          ))}
        </div>
        <div className="slideshow-info">
          <div className="slideshow-pagination">
            <sup>
              <VdLeftArrow />
            </sup>
            <span className="add-space">
              <span className="lg-font">
                {"   "}
                {`0${activeArticle.id}`}
              </span>
              <sup>{" - 03"} </sup>
            </span>
            <sup>
              <VdRightArrow />
            </sup>
          </div>
          <h2>selected from our articles</h2>
          <p>{activeArticle.title}</p>
          <p>{activeArticle.sneakpeek}</p>
          <a href="">read more</a>
        </div>
      </div>
      <p>
        <a href="">view all our articles</a>
      </p>
    </section>
  );
};

export default ArticlesSection;
