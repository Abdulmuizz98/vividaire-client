import { VdAesteticBorder, VdStar } from "../../Icons";
import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section className="intro-section">
      {" "}
      {/* <h1 className="place-items-center"> */}
      <div className="welcome">
        <VdStar />
        <h1>Welcome To Vividaire</h1>
        <VdStar />
      </div>
      <figure className="hero">
        <img src="https://source.unsplash.com/1272x538/?interior" alt="" />
      </figure>
      <article className="article">
        <div className="aes-border">
          <VdAesteticBorder />
        </div>
        <p>
          Your ultimate destination for carefully selected items that transforms
          your everyday moments into something remarkable.
        </p>
        <div className="aes-border">
          <VdAesteticBorder />
        </div>
      </article>
    </section>
  );
};

export default IntroSection;
