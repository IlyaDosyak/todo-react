const Field = (props) => {
  const {
    className = "",
    id,
    label,
    type = "text",
    onInput,
    value,
    ref,
  } = props;
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
        onInput={onInput}
        value={value}
        ref={ref}
      />
    </div>
  );
};

export default Field;
