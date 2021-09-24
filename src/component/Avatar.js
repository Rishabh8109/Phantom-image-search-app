import React from 'react'

function Avatar({img}) {
    return (
        <React.Fragment>
          <img src={img} alt="" className="avatar" />  
        </React.Fragment>
    )
}

export default Avatar;
