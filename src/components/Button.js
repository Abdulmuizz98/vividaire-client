import "./Button.css";

const Button = ({ value, bgdColor, color, width, height }) => {
  return (
    <button
      style={{
        backgroundColor: bgdColor,
        color: color,
        width: width,
        height: height,
      }}
    >
      {value}
    </button>
  );
};

export default Button;
