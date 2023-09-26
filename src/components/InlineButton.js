import "./InlineButton.css";

const InlineButton = ({ value, classString, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`inline-button ${classString && classString}`}
    >
      {value}
    </span>
  );
};

export default InlineButton;
