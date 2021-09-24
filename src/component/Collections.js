import React from "react";
import "../styles/collection.css";
import {Row , Col} from 'react-bootstrap';

function Collections({ preview_photos }) {

  const imageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
  }


  return (
    <Row className="collection">
      {preview_photos && (
        <React.Fragment>
          <Col sm={6} style={{margin : ".1rem 0", padding : 0}}>
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
          </Col>
          <Col sm={6} style={{padding : '.1rem'}}>
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
          </Col>
        </React.Fragment>
      )}
    </Row>
  );
}
export default Collections;
