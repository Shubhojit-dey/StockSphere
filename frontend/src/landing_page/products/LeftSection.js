import React from "react";

function LeftSection({
  productImgURL,
  productName,
  productdescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
  linkName,
  linkname2,
}) {
  return (
    <div style={{ margin: "5%" }} className="container">
      <div style={{ padding: "2% 0% 2% 5%", display: "flex" }} className="row">
        <div className="col-6 p-3">
          <img src={productImgURL} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="col-6 p-3"
        >
          <h2>{productName}</h2>
          <p>{productdescription}</p>
          <div className="m-3">
            <a
              style={{ textDecoration: "none", marginRight: "4.6rem" }}
              href={tryDemo}
            >
              {linkName}{" "}
            </a>
            <a style={{ textDecoration: "none" }} href={learnMore}>
              {linkname2}
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", marginRight: "1.2rem" }}
              href={playStore}
            >
              <img style={{ width: "22%" }} src="media/googlePlayBadge.svg" />{" "}
            </a>
            <a style={{ textDecoration: "none" }} href={appStore}>
              <img style={{ width: "20%" }} src="media/appstoreBadge.svg" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
