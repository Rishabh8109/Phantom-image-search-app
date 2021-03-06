import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/tabs.css";

function Tabs() {
  const [category, setcategory] = useState([]);

  async function getcategoryData() {
    const res = await axios({
      method: "GET",
      url: `https://api.unsplash.com/topics?client_id=${process.env.REACT_APP_CLIENT_ID}`,
    });
    setcategory(res.data);
  }
  
  useEffect(() => {
    // get topics 
    getcategoryData();
  }, []);

  return (
    <div className="categroy-tabs">
      <ul>
        {category && category.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    </div>
  );
}

export default Tabs;
