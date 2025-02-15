import React from "react";

function RightSection({
  productImgURL,
  productName,
  productdescription,
  learnMoreLink,
  learnMoreTopic,
}) {
  return (
    <div style={{ margin: "1% 5% 1% 5%" }} className="container ">
      <div style={{ padding: "1% 0% 1% 5%", display: "flex" }} className="row">
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
              href={learnMoreLink}
            >
              {learnMoreTopic}
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={productImgURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
