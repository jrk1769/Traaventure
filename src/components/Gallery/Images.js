import React from 'react'

/**
* @author
* @function Images
**/

const Images = ({images}) => {
  return(
    <div className="Images">
      {
        images.map((image) => (
          <div key={image.id} className={image.class + " itemBox"}>
            <img src={image.imgSrc} alt={image.class} />
          </div>
        ))
      }
    </div>
   )

 }

export default Images