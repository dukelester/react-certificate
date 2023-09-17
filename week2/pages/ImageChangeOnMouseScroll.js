import React, { useEffect, useState } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';


const ImageChangeOnMouseScroll = () => {
    const [currentImageId, setCurrentImageId] = useState(0);
    const [mouseEventCount, setMouseEventCount] = useState(0);
    useEffect(() => {
        window.document.title = `speaker: ${currentImageId}`;
        console.log(`useEffect: setting the title to ${currentImageId}`);
    },[currentImageId]);
    return (
        <div>
        <span>Mouse Envent Count: {mouseEventCount}</span>
        { [1, 2, 3, 4, 5, 6].map((imageId) => {
            return (
                <div key={imageId} onMouseOver={() => {
                    setCurrentImageId(imageId);
                    setMouseEventCount(mouseEventCount + 1);
                    console.log(`on mouseOver ${imageId}`);
                }}>
                <ImageToggleOnScroll
                primaryImage={`/static/images/bw/image${imageId}.jpeg`}
                secondaryImage={`/static/images/bw/image${imageId}.jpeg`}
                alt='' />
                </div>
            )
        })}
        </div>
    )
}
        
export default ImageChangeOnMouseScroll;
