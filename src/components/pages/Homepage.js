import Header from "../layout/Header";
import Footer from "../layout/Footer";
import IntroSection from "./homepage/IntroSection";
import FeaturedSection from "./homepage/FeaturedSection";
import ArticlesSection from "./homepage/ArticlesSection";
import "./Homepage.css";
import closetImage from "../../assets/closet_img.png";
import tumblerOneImage from "../../assets/tumbler_one_img.png";
import tumblerTwoImage from "../../assets/tumbler_two_img.png";
import hero_img from "../../assets/hero_img.png";

const Homepage = () => {
  return (
    <>
      <Header />
      <main class="homepage-main">
        <IntroSection />
        <FeaturedSection />
        <section className="about-section">
          <article className="about-section-article">
            <h2>About Vividaire</h2>
            <p>
              Specifically curated to make your everyday brighter and easier.
            </p>
            <p>
              At vividaire we believe that beauty, quality, and accessibility
              should go hand in hand. Vividaire is dedicated to curating
              carefully sourced products from amazon with utmost attention to
              quality, uniqueness, and style.
            </p>
            <a href="">read more</a>
          </article>
          <div className="about-section-hero">
            <img
              src={closetImage}
              alt="A fancy shelf with a lot of interior design lamps"
            />
          </div>
        </section>
        <ArticlesSection />
        <section className="follow-us-section">
          <div className="sprite-one">
            <img src={tumblerOneImage} alt="first tumbler with wine" />
          </div>
          <div className="follow-us-article">
            <p>Follow us on instagram to see our latest posts.</p>
            <a href="">@vividairecollection</a>
          </div>
          <div className="sprite-two">
            <img src={tumblerTwoImage} alt="second tumbler with wine" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
