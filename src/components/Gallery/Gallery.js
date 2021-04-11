import React from 'react'
import useFetch from '../useFetch/useFetch';
import Images from './Images';
import Menu from './Menu';
import "./Gallery.css";

/**
* @author
* @function Gallery
**/

const Gallery = (props) => {
  const { data: images, error: imagesErr, isLoading: imagesLoad } = useFetch('http://localhost:8000/images');
  const { data: places, error: placesErr, isLoading: placesLoad } = useFetch('http://localhost:8000/places');

  return (
    <>
      <div className="backgrnd">

      </div>
      <section className="gallery-container">
        {placesErr && <div>{placesErr}</div>}
        {placesLoad && <div>Loading...</div>}
        {places && <Menu places={places} />}
        <div className="gallery">
          {imagesErr && <div>{imagesErr}</div>}
          {imagesLoad && <div>Loading...</div>}
          {images && <Images images={images} />}
        </div>
      </section>

    </>
  )

}

export default Gallery