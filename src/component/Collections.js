import React from "react";
import "../styles/collection.css";

function Collections({ preview_photos }) {

  const imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
  }


  return (
    <div className="row collection">
      {preview_photos && (
        <React.Fragment>
          <div className="col-6 my-1 p-0">
            <div
              className="wrapper-1"
              style={{
                backgroundImage: `url(${preview_photos[0].urls.regular})`,
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                backgroundColor : "rgb(245, 245, 245)",
                ...imageStyle,
              }}
            ></div>
          </div>
          <div className="col-6 p-1">
            <div
              className="wrapper-2"
              style={{
                backgroundImage: preview_photos[2] && `url(${preview_photos[2].urls.regular})`,
                ...imageStyle,
                borderTopRightRadius: "10px",
                backgroundColor : "rgb(245, 245, 245)",
              }}
            ></div>
            <div
              className="wrapper-2"
              style={{
                backgroundImage: preview_photos[3] && `url(${preview_photos[3].urls.regular})`,
                ...imageStyle,
                borderBottomRightRadius: "10px",
                backgroundColor : "rgb(245, 245, 245)",
              }}
            ></div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
export default Collections;
