export default function Button({ classes, children }) {
  return (
    <>
      <button className={classes ? "btn " + classes : "btn btn-primary"}>
        {children}
      </button>
    </>
  );
}
