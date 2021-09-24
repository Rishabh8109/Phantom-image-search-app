import React from "react";
import Avatar from "../component/Avatar";
import { AiOutlineHeart } from "react-icons/ai";
import { FiArrowDown } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";


function ImageWrapper({ showModel, alt_description, user, urls }) {
  return (
        <div className="image-wrapper" onClick={showModel}>
          <div className="sponsorship">
            <Avatar img={user && user.profile_image.small} />
            <div className="mt-2">
              {user && (
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
              )}
              {user.for_hire && <p>Available for hire</p>}
            </div>
          </div>
          <LazyLoadImage src={urls.small} alt={alt_description} className="card-image my-2" />
          <div className="image-actions">
            <AiOutlineHeart className="heart-icon" />
            <button className="download-btn">
              <FiArrowDown className="mb-2"/>
            </button>
          </div>
        </div>
  );
}

export default ImageWrapper;
