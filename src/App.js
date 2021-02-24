import React from 'react';


function App() {
    //отрисовка списка
    let numbers = [0,1,2,3,4,5];
    let listNumbers = numbers.map((number)=><li>{number}</li>)
    listNumbers = [];
    for (let i = 0; i<numbers.length; i++){
        listNumbers.push(<li>{numbers[i]}</li>)
    }
    console.log(listNumbers);
    return (
        <div className="App">
            {listNumbers}
        </div>
    );
}


export default App;
