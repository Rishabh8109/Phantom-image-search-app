import React from 'react'

function Colors({color}) {
   const circleStyles = {
       width : '15px',
       height : '15px',
       borderRadius : '50%',
       backgroundColor : color,
       cursor : 'pointer',
       border : '1px solid #ddd'
   }

    return (
        <div className="color-circle" style={{...circleStyles}}></div>
    )
}

export default Colors
