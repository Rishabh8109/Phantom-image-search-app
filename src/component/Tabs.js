import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/tabs.css";

function Tabs() {
  const [category, setcategory] = useState([]);

  let BASE_URL = `https://api.unsplash.com/topics?client_id=${process.env.REACT_APP_CLIENT_ID}`;
  useEffect(async () => {
    const res = await axios({
      method: "GET",
      url: BASE_URL,
    });
    setcategory(res.data);
  }, []);
  
  return (
      <div className="categroy-tabs">
         <ul>
          {category && category.map(({id , title}) => (
              <li key={id}>{title}</li>
          ))}
         </ul>
      </div>
  )
}

export default Tabs;
