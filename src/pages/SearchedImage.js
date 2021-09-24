import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { getSearchRequest } from "../apis/request";
import ImageContainer from "../component/ImageContainer";
import FilterBar from "../component/FilterBar";
import axios from "axios";
import queryString from 'query-string';
import "../styles/searched.css";
import ImageModel from "../component/ImageModel";


function SearchedImage() {
  const [Image1, setImages1] = useState([]);
  const [Image2, setImages2] = useState([]);
  const [Image3, setImages3] = useState([]);
  const [orientation, setorientation] = useState("");
  const [relevent, setrelevent] = useState("relevant");
  const [color, setcolor] = useState("red");
  const { slug } = useParams();
  const location = useLocation();
  const parse = queryString.parse(location.search);
  const SEARCH_IMAGE_URL = `https://api.unsplash.com/search/photos?query=${slug}?orientation=${parse.orientation || orientation}&color=${parse.color || color}&order_by=${parse.relevent || relevent}&client_id=${process.env.REACT_APP_CLIENT_ID}`;
  

  useEffect(() => {
    const ImageRequest1 = axios.get(SEARCH_IMAGE_URL);
    const ImageRequest2 = axios.get(SEARCH_IMAGE_URL, { params: { page: 2 } });
    const ImageRequest3 = axios.get(SEARCH_IMAGE_URL, { params: { page: 3 } });
    getSearchRequest(
      ImageRequest1,
      ImageRequest2,
      ImageRequest3,
      setImages1,
      setImages2,
      setImages3
    );
  }, [
    SEARCH_IMAGE_URL,
    slug,
    orientation,
    relevent,
    color,
    setImages1,
    setImages2,
    setImages3,
  ]);

  return (
    <React.Fragment>
      <FilterBar setorientation={setorientation} setrelevent={setrelevent} setcolor={setcolor} />
      <div className="heading">
        <h1>{slug}</h1>
      </div>
      <ImageModel />
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

export default SearchedImage;
