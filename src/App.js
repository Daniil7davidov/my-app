import React from 'react';


function App() {
    let numbers = [0,1,2,3,4,5];
    let listNumbers = numbers.map((number)=><li>{number}</li>)
    return (
        <div className="App">
            {listNumbers}
        </div>
    );
}


export default App;
