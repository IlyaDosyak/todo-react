const Field = (props) => {
  const { className = "", id, label, type = "text" } = props;
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
