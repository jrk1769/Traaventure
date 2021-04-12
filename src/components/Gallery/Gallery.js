import React, { useEffect, useState } from "react";
import useFetch from "../useFetch/useFetch";
import "./Gallery.css";

/**
 * @author
 * @function Gallery
 **/

const Gallery = () => {
  const { data: images, error: imagesErr, isLoading: imagesLoad } = useFetch(
    "http://localhost:8000/images"
  );
  const { data: places, error: placesErr, isLoading: placesLoad } = useFetch(
    "http://localhost:8000/places"
  );

  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!imagesLoad && !imagesErr && images) {
      setItems(images);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoad && !imagesErr && images) {
      setItems([]);
      const filtered = images.map((img) => ({
        ...img,
        filtered: img.category.includes(filter),
      }));
      setItems(filtered);
    }
  }, [filter, imagesLoad]);

  return (
    <>
      <div className="backgrnd"></div>
      <section className="gallery-container">
        {placesErr && <div>{placesErr}</div>}
        {placesLoad && <div>Loading...</div>}
        {places && (
          <ul>
            {places.map((place) => (
              <li
                key={place.id}
                className={filter === place.category ? 'active' : ''}
                onClick={() => {
                  setFilter(place.category);
                }}
              >
                {place.category}
              </li>
            ))}
          </ul>
        )}
        <div className="gallery">
          {imagesErr && <div>{imagesErr}</div>}
          {imagesLoad && <div>Loading...</div>}
          <div className="Images">
            {items.map((image) =>
              image.filtered === true ? (
                <div key={image.id} className={image.category + " itemBox"}>
                  <img src={image.imgSrc} alt={image.category} />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
