import React, { useRef } from 'react'

const ImageToggleOnMouseOver = ({ primaryImage, secondaryImage }) => {
    
  const imageRef = useRef(null);
  return (
    <div>
      <img onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }} onMouseOut={() => {
        imageRef.current.src = primaryImage;
      }}
      src={primaryImage} alt='' ref={imageRef}/>
    </div>
  )
}

export default ImageToggleOnMouseOver;
