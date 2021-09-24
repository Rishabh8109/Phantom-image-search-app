import React , {useState , useEffect} from "react";
import Searchbar from "../component/Searchbar";
import ImageContainer from "../component/ImageContainer";
import Tabs from "../component/Tabs";
import { Random_Image_Url } from "../apis/urls";
import axios from "axios";
import {getAxiosRequest}  from '../apis/request';
import ImageModel from "../component/ImageModel";

function Main() {
    const [Image1, setImages1] = useState([]);
    const [Image2, setImages2] = useState([]);
    const [Image3, setImages3] = useState([]);


     // Get Images every times component render
     useEffect(() => {
      const ImageRequest1 = axios.get(Random_Image_Url);
      const ImageRequest2 = axios.get(Random_Image_Url, { params: { page: 2 } });
      const ImageRequest3 = axios.get(Random_Image_Url, { params: { page: 3 } });
      getAxiosRequest(
        ImageRequest1,
        ImageRequest2,
        ImageRequest3,
        setImages1,
        setImages2,
        setImages3
      );
    },[Random_Image_Url ,setImages1 , setImages2 , setImages3]);

  return (
    <React.Fragment>
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1510561467401-91b9835f745e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="hero_image"
          className="hero-image"
        />
        <div className="wrapper">
          <h1>Explore Quality Product Images With The Phantom</h1>
          <p>Powered by unsplash</p>
          <Searchbar />
        </div>
      </section>
      <section id="categories">
        <Tabs />
      </section>
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

export default Main;
