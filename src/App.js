import React from 'react';


function App() {
    let [index, setIndex] = React.useState(0)

    function plusOne(){
        setIndex(index+1)
    }

    return (
        <div className="App">
            <h1>{index}</h1>
            <button onClick={plusOne}>+</button>
            <button onClick={()=>setIndex(index-1)}>-</button>
            <button onClick={()=>setIndex(0)}>0</button>
        </div>
    );
}

export default App;
