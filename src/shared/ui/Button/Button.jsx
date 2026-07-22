import s from "./Button.module.scss";

const Button = (props) => {
  const { className = "", type, children, onClick, isDisabled } = props;
  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
