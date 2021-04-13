import React, { useEffect, useState } from "react";
import AnimatedModal from "../Modal/Modal";
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
  const [open, setOpen] = useState({ "-1": false });

  const handleShowDialog = (imageId) => {
    const isOpen = {
      [imageId]: !open[imageId],
    };
    setOpen(isOpen);
    console.log("clicked");
  };

  useEffect(() => {
    if (!imagesLoad && !imagesErr && images) {
      setItems(images);
    }
  }, [images, imagesErr, imagesLoad]);

  useEffect(() => {
    if (!imagesLoad && !imagesErr && images) {
      setItems([]);
      const filtered = images.map((img) => ({
        ...img,
        filtered: img.category.includes(filter),
      }));
      setItems(filtered);
    }
  }, [filter, images, imagesErr, imagesLoad]);

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
                className={filter === place.category ? "active" : ""}
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
                  <img
                    src={image.imgSrc}
                    alt={image.category}
                    onClick={() => handleShowDialog(image.id)}
                  />
                  {open[image.id] && (
                    <AnimatedModal
                      imageId={image.id}
                      open={open}
                      imgSrc={image.imgSrc}
                      handleClose={() => handleShowDialog(image.id)}
                    ></AnimatedModal>
                  )}
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
