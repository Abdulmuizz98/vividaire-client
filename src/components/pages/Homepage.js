import Header from "../layout/Header";
import Footer from "../layout/Footer";
import IntroSection from "./homepage/IntroSection";
import FeaturedSection from "./homepage/FeaturedSection";
import ArticlesSection from "./homepage/ArticlesSection";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <main class="homepage-main">
        <IntroSection />
        <FeaturedSection />
        <section className="about-section">
          <article>
            <h2>About Vividaire</h2>
            <p>
              specifically curated to make your everyday brighter and easier.
            </p>
            <p>
              At vividaire we believe that beauty, quality, and accessibility
              should go hand in hand. Vividaire is dedicated to curating
              carefully sourced products from amazon with utmost attention to
              quality, uniqueness, and style.
            </p>
            <a href="">read more</a>
          </article>
          <div className="about-section-hero"></div>
        </section>
        <ArticlesSection />
        <section className="follow-us-section">
          <div className="sprite-one"></div>
          <div>
            <p>follow us on instagram to see our latest posts.</p>
            <a href="">@vividairecollection</a>
          </div>
          <div className="sprite-two"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
