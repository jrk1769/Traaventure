import React, { useEffect, useState } from "react";
import AnimatedModal from "../Modal/Modal";
import "./Gallery.css";
import images from '../../assets/images.json';
import places from '../../assets/places.json';

/**
 * @author
 * @function Gallery
 **/

const Gallery = () => {

  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState({ "-1": false });

  const handleShowDialog = (imageId) => {
    const isOpen = {
      [imageId]: !open[imageId],
    };
    setOpen(isOpen);
  };

  useEffect(() => {
    if (images) {
      setItems(images);
    }
  }, []);

  useEffect(() => {
    if (images) {
      setItems([]);
      const filtered = images.map((img) => ({
        ...img,
        filtered: img.category.includes(filter),
      }));
      setItems(filtered);
    }
  }, [filter]);

  return (
    <>
      <div className="backgrnd"></div>
      <section className="gallery-container">
        
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
