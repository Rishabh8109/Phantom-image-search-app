import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAxiosRequest } from "../apis/request";
import ImageContainer from "../component/ImageContainer";
import axios from 'axios';

function CollectionImage() {
  const [Image1, setImages1] = useState([]);
  const [Image2, setImages2] = useState([]);
  const [Image3, setImages3] = useState([]);
  const { slug, id } = useParams();
  const URL = `https://api.unsplash.com/collections/${id}/photos?client_id=${process.env.REACT_APP_CLIENT_ID}`;

  useEffect(() => {
    let mounted = true;
    const ImageRequest1 = axios.get(URL);
    const ImageRequest2 = axios.get(URL, { params: { page: 2 } });
    const ImageRequest3 = axios.get(URL, { params: { page: 3 } });
    if(mounted) {
      getAxiosRequest(
        ImageRequest1,
        ImageRequest2,
        ImageRequest3,
        setImages1,
        setImages2,
        setImages3
      );
    }
    return () => (mounted = false);
  }, [URL]);

  return (
    <React.Fragment>
      <h1 style={{marginLeft : "4rem"}}>{slug}</h1>
      <div className="user">
      </div>
      <section className="image-grid">
        <ImageContainer
          Image1={Image1}
          Image2={Image2}
          Image3={Image3}
          setImages1={setImages1}
          setImages2={setImages2}
          setImages3={setImages3}
        />
      </section>
    </React.Fragment>
  );
}
export default CollectionImage;
