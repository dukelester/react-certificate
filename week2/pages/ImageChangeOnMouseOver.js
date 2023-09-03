import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
        <ImageToggleOnMouseOver
        primaryImage='/static/images/bw/image1.jpg' 
        secondaryImage='/static/images/bw/image3.jpeg'
        alt='' />
        &nbsp;&nbsp;&nbsp;
        <ImageToggleOnMouseOver 
        primaryImage='/static/images/bw/image2.jpeg' 
        secondaryImage='/static/images/bw/image4.jpeg' 
        alt='' />
        </div>
    )
};

export default ImageChangeOnMouseOver;
