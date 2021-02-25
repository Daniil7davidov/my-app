import React from 'react';


function ListItem(props) {

    function remove(){
        console.log(props.text)
        console.log(props.idx)
        props.remove(props.idx)
    }
    
    return (
        <div className="App">
            <span>{props.text}</span>
            <button onClick={remove}>X</button>
        </div>
    );
}


export default ListItem;
