import React, { useState, createContext } from "react";
export const ImageContext = createContext();

function ImageProvider({ children }) {
  const [imageInfo, setimageInfo] = useState([]);
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  return (
    <ImageContext.Provider
      value={{ 
        imageInfo,
        setimageInfo,
        loading,
        setloading ,
        show , 
        setshow
        }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export default ImageProvider;
