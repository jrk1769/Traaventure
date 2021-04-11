import React from "react";

/**
 * @author
 * @function Menu
 **/

const Menu = ({ places, handleGalleryFilter }) => {
  return (
    <ul>
      {places.map((place) => (
        <li onClick={() => handleGalleryFilter(place.category)}
          className={place.category === "All" ? "list active" : "list"}
          key={place.id}
        >
          {place.category}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
