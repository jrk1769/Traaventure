import React from 'react'

/**
* @author
* @function Menu
**/

const Menu = ({ places }) => {
    return (
        <ul>
            {
                places.map((place) => (
                    <li className={place.name === "All" ? "list active" : "list"} key={place.id} data-filter={place.name}>{place.name}</li>
                ))
            }
        </ul>
    )

}

export default Menu