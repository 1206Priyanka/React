import React from 'react';

function Item (props){

    const itemId = props.itemId;
    const itemName = props.itemName;



    return(
        <div>
            <h1>Hello from Item. The id is = {itemId}. The name is {itemName}</h1>
    
        </div>
    );

}

export default Item;
