import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './slider.module.css';

const SimpleSlider = () => {
  const images = [
    {
      original: '/i1.png',
      thumbnail: '/i1.png',
      description: 'Image 1',
      title: 'Title 1',
    },
    {
      original: '/i2.png',
      thumbnail: '/i2.png',
      description: 'Image 2',
      title: 'Title 2',
    },
  ];

  const renderGalleryItem = (item) => {
    return (
      <div className={styles.galleryItem}>
          <h2>{item.title}</h2>
        <img src={item.original} alt={item.description} />
      
      </div>
    );
  };

  return (
    <div>
      <ImageGallery renderItem={renderGalleryItem} items={images}  />
    </div>
  );
};

export default SimpleSlider;