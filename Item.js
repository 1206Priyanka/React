import React from 'react';

function Item (props){

    //hooks
    //const itemId = props.itemId;
    //const itemName = props.itemName;
    
    //setters
    const [itemName, setItemName]= React.useState(props.itemName);
    const[itemId, setItemId]= React.useState(props.itemId);
    
    //Event Handler
    function clickHandler(){
      setItemName("Apple");
      setItemId("Apple1");
      window.alert("This is an item with name given as = " +itemName);
    }



    return(
        <div>
            <h1>Hello from Item. The id is = {itemId}. The name is {itemName}</h1>
            <input type ="text" placeholder ="Item" value ={itemName}></input>
            <br></br>

            <button onClick = {clickHandler}>Show Item Details</button>
    
        </div>
    );

}

export default Item;
