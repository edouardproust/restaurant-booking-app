export default function Button({
  children,
  classes,
  type = "button",
  onClick,
}) {
  return (
    <>
      <button
        type={type}
        className={classes ? "btn " + classes : "btn btn-primary"}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
}
