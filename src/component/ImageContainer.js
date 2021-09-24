import React, { useContext } from "react";
import { useRouteMatch , useHistory } from "react-router";
import ImageWrapper from "./ImageWrapper";
import { ImageContext } from "../context/ImageProvider";
import axios from "axios";
import "../styles/ImageStyles.css";

function ImageContainer({ Image1, Image2, Image3 }) {
  const { setloading, setimageInfo, setshow } = useContext(ImageContext);
  const history = useHistory();
  const {url}  = useRouteMatch();


  async function showModel(id) {
  
    setshow(true);
    if(url === "/") {
      history.push(`/photos/${id}`)
    }else {
      history.push(`/photos/${id}`)
    }
    setloading(true);
    const res = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_CLIENT_ID}`
    );
    setimageInfo(res.data);
    setloading(false);
  }

  return (
    <React.Fragment>
      <div className="col">
        {Image1 &&
          Image1.map(({ id, alt_description, urls, user }) => (
            <ImageWrapper
              key={id}
              id={id}
              alt_description={alt_description}
              urls={urls}
              user={user}
              showModel={() => showModel(id)}
            />
          ))}
      </div>
      <div className="col">
        {Image2 &&
          Image2.map(({ id, alt_description, urls, user }) => (
            <ImageWrapper
              key={id}
              id={id}
              alt_description={alt_description}
              urls={urls}
              user={user}
              showModel={() => showModel(id)}
            />
          ))}
      </div>
      <div className="col">
        {Image3 &&
          Image3.map(({ id, alt_description, urls, user }) => (
            <ImageWrapper
              key={id}
              id={id}
              alt_description={alt_description}
              urls={urls}
              user={user}
              showModel={() => showModel(id)}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default React.memo(ImageContainer);
