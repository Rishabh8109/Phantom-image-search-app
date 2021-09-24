import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, useRouteMatch, Link } from "react-router-dom";
import CollectionsComponent from "../component/Collections";
import "../styles/collection.css";
import CollectionImage from "./CollectionImage";

function Collections() {
  const [collection, setcollection] = useState([]);
  const { url } = useRouteMatch();

  useEffect(async () => {
    let mounted = true;
     
    if(mounted) {
      const res = await axios(
        `https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_CLIENT_ID}`
      );
      setcollection(res.data);
    }
    return () => {
      mounted = false;
    }
  }, []);

  return (
    <section
      className="m-auto d-block collection-group"
      style={{ width: "90%" }}
    >
      <Route path={`${url}`} exact>
        <h1>Collections</h1>
        <p>
          Explore the world through collections of beautiful photos free to use
          under the
        </p>
        <div className="row">
          {collection &&
            collection.map(
              ({ id, preview_photos, title, total_photos, user }) => (
                <div
                  className="col-sm-4"
                  key={id}
                  style={{ cursor: "pointer" }}
                >
                  <Link to={`${url}/${id}/${title}`}>
                    <CollectionsComponent preview_photos={preview_photos} />
                    <div className="collection-info">
                      <h2 className="ml-3 title">{title}</h2>
                      <span className="ml-3 subtitle">
                        {total_photos} photos
                      </span>{" "}
                      <span className="ml-3 subtitle">
                        created by {user && user.username}
                      </span>
                      {""}
                    </div>
                  </Link>
                </div>
              )
            )}
        </div>
      </Route>
      <Route path={`${url}/:id/:slug`} exact>
        <CollectionImage />
      </Route>
    </section>
  );
}

export default Collections;
