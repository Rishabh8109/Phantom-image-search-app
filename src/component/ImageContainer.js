import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ImageStyles.css";
import Avatar from "./Avatar";
import {AiOutlineHeart} from 'react-icons/ai';
import {LazyLoadImage } from 'react-lazy-load-image-component'

function ImageContainer() {
  const [Image1, setImages1] = useState([]);
  const [Image2, setImages2] = useState([]);
  const [Image3, setImages3] = useState([]);


  
  
  function getImages() {
    const ImageRequest1 = axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`);
    const ImageRequest2 = axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`, { params: { page: 2 } });
    const ImageRequest3 = axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`, { params: { page: 3 } });
    axios.all([ImageRequest1, ImageRequest2, ImageRequest3]).then(axios.spread(function (res1, res2, res3) {
      setImages1(res1.data);
      setImages2(res2.data);
      setImages3(res3.data);
    })
  );
  }

  useEffect(() => {
     getImages();
  }, []);

  return (
    <>
      <div className="col">
        {Image1 &&
          Image1.map(({ id, alt_description, urls, sponsorship }) => (
            <div className="image-wrapper" key={id}>
              <div className="sponsorship">
                <Avatar
                  img={sponsorship && sponsorship.sponsor.profile_image.small}
                />
                <div>
                  {sponsorship && (
                    <h3>
                      {sponsorship.sponsor.first_name}{" "}
                      {sponsorship.sponsor.last_name}
                    </h3>
                  )}
                  <p>{sponsorship && sponsorship.tagline}</p>
                </div>
              </div>
              <LazyLoadImage  src={urls.regular} alt={alt_description} />
              <div className="image-actions">
                 <AiOutlineHeart className="heart-icon" />
                 <button className="download-btn">Download</button>
              </div>
            </div>
          ))}
      </div>
      <div className="col">
        {Image2 &&
          Image2.map(({ id, alt_description, urls, sponsorship }) => (
            <div className="image-wrapper" key={id}>
              <div className="sponsorship">
                <Avatar
                  img={sponsorship && sponsorship.sponsor.profile_image.small}
                />
                <div>
                  {sponsorship && (
                    <h3>
                      {sponsorship.sponsor.first_name}{" "}
                      {sponsorship.sponsor.last_name}
                    </h3>
                  )}
                  <p>{sponsorship && sponsorship.tagline}</p>
                </div>
              </div>
              <img  src={urls.regular} alt={alt_description} />
              <div className="image-actions">
              <AiOutlineHeart className="heart-icon" />
              <button className="download-btn">Download</button>
              </div>
            </div>
          ))}
      </div>
      <div className="col">
        {Image3 &&
          Image3.map(({ id, alt_description, urls, sponsorship }) => (
            <div className="image-wrapper" key={id}>
              <div className="sponsorship">
                <Avatar
                  img={sponsorship && sponsorship.sponsor.profile_image.small}
                />
                <div>
                  {sponsorship && (
                    <h3>
                      {sponsorship.sponsor.first_name}{" "}
                      {sponsorship.sponsor.last_name}
                    </h3>
                  )}
                  <p>{sponsorship && sponsorship.tagline}</p>
                </div>
              </div>
              <img  src={urls.regular} alt={alt_description} />
              <div className="image-actions">
                <AiOutlineHeart className="heart-icon" />
                <button className="download-btn">Download</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ImageContainer;
