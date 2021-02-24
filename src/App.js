import React from 'react';


function App() {
    let [index, setIndex] = React.useState(0)

    return (
        <div className="App">
            <h1>{index}</h1>
            <button onClick={()=>setIndex(index+1)}>+</button>
        </div>
    );
}

export default App;
