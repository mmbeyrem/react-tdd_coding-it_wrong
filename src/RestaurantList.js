import React from 'react'
import { Collection, CollectionItem } from "react-materialize";
const RestaurantList = ({ restaurants }) => (
    <>
        <Collection header="Restaurants">
            {
                restaurants.length === 0
                && <CollectionItem style={{ color: 'gray' }} > (no restaurants saved. )   </CollectionItem>
            }
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