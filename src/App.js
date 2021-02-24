import React from 'react';


function App() {
    let [index, setIndex] = React.useState(0)

    return (
        <div className="App">
            <h1>{index}</h1>
        </div>
    );
}

export default App;
