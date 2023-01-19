export default function Button({
  children,
  classes,
  type = "button",
  onClick,
  disabled,
}) {
  return (
    <>
      <button
        type={type}
        className={classes ? "btn " + classes : "btn btn-primary"}
        onClick={onClick}
        disabled={disabled}>
        {children}
      </button>
    </>
  );
}
