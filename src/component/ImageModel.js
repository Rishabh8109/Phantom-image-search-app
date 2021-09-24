import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import { ImageContext } from "../context/ImageProvider";
import { BsX } from "react-icons/bs";
import Avatar from "../component/Avatar";
import Collections from "./Collections";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "../styles/model.css";

function ImageModel() {
  const { show, imageInfo, setshow, loading, setimageInfo } =
    useContext(ImageContext);

  const {
    user,
    urls,
    alt_description,
    views,
    links,
    downloads,
    related_collections,
  } = imageInfo;
  const history = useHistory();

  function close() {
    setshow(false);
    history.goBack();
    setimageInfo([]);
  }

  return (
    <React.Fragment>
      <div
        className="backdrop"
        style={{ display: show ? "block" : "none" }}
        onClick={close}
      ></div>
      <div className="image-model" style={{ display: show ? "block" : "none" }}>
        <div className="cardHeader">
          <BsX className="close" onClick={close} />
          {loading ? (
            <React.Fragment>
              <div className="skeleton" style={{ width: "160px" }}>
                <Skeleton
                  circle={true}
                  height={50}
                  width={50}
                  className="mr-2"
                />
                <div>
                  <Skeleton height={30} width={100} className="ml-3" />
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="user">
                <Avatar img={user && user.profile_image.small} />
                <div>
                  {user && (
                    <h3>
                      {user.first_name} {user.last_name}
                    </h3>
                  )}
                  <p>@{user && user.instagram_username}</p>
                </div>
              </div>
            </React.Fragment>
          )}
          <div className="actions">
            <button>
              <AiFillHeart className="heart" />
            </button>
            <button>
              <a
                href={links && links.download + "?force=true"}
                download
                className="text-dark"
              >
                Download
              </a>
            </button>
          </div>
        </div>
        <div className="card-body">
          {loading ? (
            <Skeleton
              width={500}
              height={500}
              style={{ margin: "auto", display: "block" }}
            />
          ) : (
            <div className="image-wrapper">
              <img
                src={urls && urls.regular}
                alt={alt_description}
                className="model-image img-responsive"
              />
            </div>
          )}
          <div className="image-info">
            <div className="row">
              <div className="col">
                <p>Views</p>
                <p>{views}</p>
              </div>
              <div className="col">
                <p>Downloades</p>
                <p>{downloads}</p>
              </div>
            </div>
            <div className="row">
              <button>
                <AiFillInfoCircle /> Info
              </button>
            </div>
          </div>
          <h4 className="collection-heading">Related Collections</h4>
          <section className="collections">
            {related_collections &&
              related_collections.results.map(
                ({ id, preview_photos, title, total_photos, user }) => (
                  <React.Fragment key={id}>
                    {loading ? (
                      <Skeleton width={400} height={400} />
                    ) : (
                      <Link to={`/collections/${id}/${title}`}>
                        <div  className="collection-card">
                          <Collections preview_photos={preview_photos} />
                          <h5 className="ml-3 title">{title}</h5>
                          <span className="ml-3 subtitle">
                            {total_photos} photos
                          </span>{" "}
                          <span className="ml-3 subtitle">
                            created by {user && user.username}
                          </span>
                          {""}
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                )
              )}
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImageModel;
