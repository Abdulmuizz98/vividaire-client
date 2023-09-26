import InlineButton from "./InlineButton";
import { VdClose } from "./Icons";
import porcelainImage from "../assets/porcelain_img.png";
import "./Prompt.css";

const togglePrompt = () => {
  const prompt = document.querySelector(".prompt");
  prompt.classList.toggle("hidden");
};

const Prompt = ({ title, body, action }) => {
  return (
    <div className="prompt ">
      <InlineButton
        value={<VdClose />}
        classString="position-top-right"
        onClick={togglePrompt}
      />

      <figure className="prompt-hero">
        <img src={porcelainImage} alt="Porcelain image" />
      </figure>
      <div className="prompt-info">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
        <div className="actions">{action}</div>
      </div>
    </div>
  );
};
export default Prompt;
