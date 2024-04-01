import React from 'react'
import  { useState,useEffect } from 'react';
import image1 from './images/ganesh1.jpeg'

import image2 from './images/gallery1/ram2.jpeg'
import image3 from './images/ram1.jpeg'
import image4 from './images/gallery1/ram4.jpeg'
import image5 from './images/gallery1/ram5.jpeg'
import image6 from './images/gallery1/ram6.jpeg'
import image7 from './images/gallery1/won1.jpg'
import image8 from './images/gallery1/won2.jpg'
import image9 from './images/gallery1/ram3.jpeg'
import image10 from './images/gallery1/won3.jpeg'
import image11 from './images/gallery1/ram4.jpeg'
import image12 from './images/ganesh2.jpeg'
import styles from './galleryCss.module.css'
import { RxCrossCircled } from "react-icons/rx";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
   const images = [image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]; // Add all imported images to this array

   const [touchStartX, setTouchStartX] = useState(null);
  
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleLeftArrowClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCloseClick = () => {
    setSelectedImageIndex(null);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };
  
  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const threshold = 50; // Adjust threshold as needed
  
    if (deltaX > threshold) {
      // Swiped right, go to previous image
      handleLeftArrowClick();
    } else if (deltaX < -threshold) {
      // Swiped left, go to next image
      handleRightArrowClick();
    }
  };
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
        handleLeftArrowClick();
      } else if (event.keyCode === 39) { // Right arrow key
        handleRightArrowClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div>
      <div className={styles.center}>
      Image Gallery
      </div>
      <div 
      // style={{ display: 'flex', flexWrap: 'wrap' }} 
      className={styles.main}
      >
        {images.map((imageURL, index) => (
          <div key={index} 
          // style={{ margin: '10px', width: '200px' }} 
          className={styles.images}
          >
            <img
              src={imageURL}
              alt={`Image ${index + 1}`}
              // style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              onClick={() => handleImageClick(index)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
               className={styles.img}
            />
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div 
        // style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }} 
        className={styles.zoom}
        >
          <div 
          // style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={styles.zoom2}
          >
            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} 
            // style={{ maxWidth: '90%', maxHeight: '90%', cursor: 'pointer' }} 
            className={styles.zoomImg}
            />
            <div className={styles.buttonsContainer}>
            
            <button onClick={handleLeftArrowClick}>⬅️</button>
            <button onClick={handleRightArrowClick}>➡️</button>
            </div>
            <button onClick={handleCloseClick} className={styles.closeButton} ><RxCrossCircled /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery
