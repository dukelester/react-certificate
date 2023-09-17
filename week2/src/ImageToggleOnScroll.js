import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  
  const isInView = () => {
    const rectangle = imageRef.current.getBoundingClientRect();
    return rectangle.top >= 0 && rectangle.bottom <= window.innerHeight;
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  
  const scrollHandler = () => {
    setInView(isInView());
  }
   return (
    <div>
      <img src={ inView ? secondaryImage : primaryImage }  alt='' ref={imageRef}/>
    </div>
  )
}

export default ImageToggleOnScroll;
