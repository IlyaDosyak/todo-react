import s from "./Field.module.scss";

const Field = (props) => {
  const {
    className = "",
    id,
    label,
    type = "text",
    onInput,
    value,
    ref,
    error,
  } = props;

  return (
    <div className={`${s.field} ${className}`}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${s.input}${error ? s.isInvalid : ""}`}
        id={id}
        type={type}
        placeholder=" "
        autoComplete="off"
        onInput={onInput}
        value={value}
        ref={ref}
      />
      {error && (
        <span className={s.error} title={error}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Field;
