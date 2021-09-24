import React from "react";

function Skeleton({width , height}) {
   const skeletonStyle = {
       backgroundColor: "#000",
       margin : 'auto',
       display : 'block'
   }

  return (
    <div
      className="skeleton-loader"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...skeletonStyle
      }}
    ></div>
  );
}

export default Skeleton;
