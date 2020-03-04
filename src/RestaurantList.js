import React from 'react'

const RestaurantList = ({ restaurants }) => (
    <>
        <h3>Restaurants</h3>
        <ul>
            {
                restaurants.map(r => (
                    <li key={r}> {r}  </li>
                ))
            }
        </ul>
    </>
);
export default RestaurantList; 