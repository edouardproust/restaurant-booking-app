export default function ImagesCol({ imgLeft, imgRight, minHeight = "460px" }) {
  return (
    <div className="col col-images" style={{ minHeight: minHeight }}>
      <div
        className="imgLeft"
        style={{ backgroundImage: `url(${imgLeft})` }}></div>
      <div
        className="imgRight"
        style={{ backgroundImage: `url(${imgRight})` }}></div>
    </div>
  );
}
