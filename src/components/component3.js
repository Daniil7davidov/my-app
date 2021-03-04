import React from 'react';


function Component3() {
    let [index, setIndex] = React.useState(0)

    return (
        <div className="App">
            <h1 data-testid='result'>{index}</h1>
            <button data-testid='button' onClick={()=>setIndex(index+1)}>+</button>
        </div>
    );
}

export default Component3;