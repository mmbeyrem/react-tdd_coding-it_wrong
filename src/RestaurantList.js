import React from 'react'
import { Collection, CollectionItem } from "react-materialize";


const RestaurantList = ({ restaurants }) => (
    <Collection header="Restaurants">
        {
            restaurants.length === 0
                ? <EmptyRestaurantListItem />
                : <RestaurantListItems restaurants={restaurants} />
        }
    </Collection>
);

const EmptyRestaurantListItem = () => (
    <CollectionItem style={{ color: 'gray' }} > (no restaurants saved. )   </CollectionItem>
);

const RestaurantListItems = ({ restaurants }) => (
    restaurants.map(r => (
        <CollectionItem key={r}>
            {r}
        </CollectionItem>
    )));



export default RestaurantList; 