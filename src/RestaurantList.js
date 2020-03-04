import React from 'react'
import { Collection, CollectionItem } from "react-materialize";
const RestaurantList = ({ restaurants }) => (
    <>
        <h3>Restaurants</h3>
        <Collection>
            {
                restaurants.map(r => (
                    <CollectionItem key={r}>
                        {r}
                    </CollectionItem>
                ))
            }
        </Collection>
    </>
);
export default RestaurantList; 