import React from 'react';


function Component5() {
    let numbers = [0,1,2,3,4,5];
    let listNumbers = numbers.map((number)=><li>{number}</li>)
    return (
        <div className="App">
            {listNumbers}
        </div>
    );
}


export default Component5;