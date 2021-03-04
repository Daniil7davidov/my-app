import React from 'react';


function Component4() {
    let [index, setIndex] = React.useState(0)

    function plusOne(){
        setIndex(index+1)
    }

    return (
        <div className="App">
            <h1 data-testid='result'>{index}</h1>
            <button data-testid='plusone' onClick={plusOne}>+</button>
            <button data-testid='minusone' onClick={()=>setIndex(index-1)}>-</button>
            <button data-testid='setzero'onClick={()=>setIndex(0)}>0</button>
        </div>
    );
}

export default Component4;
