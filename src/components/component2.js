import React from 'react';


function Component2() {
    let [index, setIndex] = React.useState(0)

    return (
        <div className="App">
            <h1 data-testid="test">{index}</h1>
        </div>
    );
}

export default Component2;